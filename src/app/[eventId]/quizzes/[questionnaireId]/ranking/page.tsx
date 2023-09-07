'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import { getRanking } from '@/helpers/questionnaire'
import {
  GetQuestionnaireRankingDocument,
  GetQuestionnaireRankingQuery,
  GetQuestionnaireRankingQueryVariables,
} from '@/lib/wedding/graphql'
import { useAppContext } from '@/providers/AppProvider'
import { useEventContext } from '@/providers/EventProvider'
import { useQuestionnaireContext } from '@/providers/QuestionnaireProvider'
import { useQuery } from '@apollo/client'
import {
  Box,
  Button,
  Flex,
  Paper,
  Popover,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'
import { IconHelpCircle, IconInfoCircle, IconTrophy } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { useMemo } from 'react'

interface QuestionnaireRankingProps {}

const QuestionnaireRanking: React.FC<QuestionnaireRankingProps> = () => {
  const { questionnaire, hasPrizes } = useQuestionnaireContext()
  const { event } = useEventContext()
  const { navigate } = useAppContext()

  const { loading, data, error } = useQuery<
    GetQuestionnaireRankingQuery,
    GetQuestionnaireRankingQueryVariables
  >(GetQuestionnaireRankingDocument, {
    variables: {
      args: {
        questionnaire_id: questionnaire?.id,
      },
    },
    skip: !questionnaire?.id,
  })

  const breadcrumbs = [
    { title: String(event?.name), href: `/${event?.id}/quizzes` },
    {
      title: String(questionnaire?.title),
    },
  ]

  const handleViewPrizes = () =>
    navigate(`/${questionnaire?.event_id}/quizzes/${questionnaire?.id}/prizes`)

  const isEmpty = useMemo(
    () => !loading && data?.get_questionnaire_ranking?.length === 0,
    [data?.get_questionnaire_ranking]
  )

  return (
    <Flex h="100%" direction="column" gap={16}>
      <Breadcrumbs items={breadcrumbs} />
      <Title>Ranking</Title>
      <DataRenderer
        isLoading={loading}
        isEmpty={isEmpty}
        emptyText="Nenhuma participação encontrada"
      >
        <Flex h="100%" direction="column" gap={16}>
          <Flex align="center" gap={5}>
            <Text color="gray" size="xs">
              Ranking parcial
            </Text>
            <Popover width="60vw" position="bottom" withArrow shadow="md">
              <Popover.Target>
                <IconHelpCircle size="1rem" color="gray" />
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="sm">
                  <Text>
                    Os pontos são contabilizados assim que cada pergunta é
                    respondida.
                  </Text>
                  <Text>
                    Alguns convidados podem ainda não ter concluído o
                    questionário.
                  </Text>
                </Text>
              </Popover.Dropdown>
            </Popover>
          </Flex>
          <Flex h="100%" direction="column" justify="space-between" gap={16}>
            <Paper shadow="xs" p="md">
              <Table striped captionSide="bottom">
                <thead>
                  <tr>
                    <th>
                      <Box ta="center">Posição</Box>
                    </th>
                    <th>Convidado</th>
                    <th>
                      <Box ta="center">Pontos</Box>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.get_questionnaire_ranking?.map(
                    (
                      { id, name, email, phone, points, last_answer },
                      index
                    ) => {
                      const ranking = getRanking({
                        position: index + 1,
                        prizes: questionnaire?.prizes || [],
                      })

                      const hasPrize = !Number(ranking)
                      const textStyle = hasPrize
                        ? {
                            fw: 'bold',
                            size: 16,
                          }
                        : null

                      return (
                        <tr key={id}>
                          <td>
                            <Box ta="center">{ranking}</Box>
                          </td>
                          <td>
                            <Text {...textStyle}>
                              {name || email || phone || 'Usuário desconhecido'}
                            </Text>
                            <Text size={10} color="gray">
                              {dayjs(last_answer).format(
                                'DD/MM/YYYY [às] HH[h]mm'
                              )}
                            </Text>
                          </td>
                          <td valign="baseline">
                            <Text ta="center" {...textStyle}>
                              {points}
                            </Text>
                          </td>
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </Table>
            </Paper>

            <Text size="xs" color="gray">
              Somente os convidados marcados com medalhas tem direito a prêmios.
            </Text>

            <Flex w="100%">
              {hasPrizes && (
                <Button
                  color="yellow"
                  fullWidth
                  radius="md"
                  leftIcon={<IconTrophy size="1rem" />}
                  onClick={handleViewPrizes}
                >
                  Ver prêmios
                </Button>
              )}
            </Flex>
          </Flex>
        </Flex>
      </DataRenderer>
    </Flex>
  )
}

export default QuestionnaireRanking
