'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import LoadingOverlay from '@/components/LoadingOverlay'
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
import { Box, Button, Flex, Paper, Table, Title } from '@mantine/core'
import { IconTrophy } from '@tabler/icons-react'
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
        <Flex h="100%" direction="column" justify="space-between">
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
                  ({ id, name, email, phone, points }, index) => (
                    <tr key={id}>
                      <td>
                        <Box ta="center">{getRanking(index + 1)}</Box>
                      </td>
                      <td>
                        {name || email || phone || 'Usuário desconhecido'}
                      </td>
                      <td>
                        <Box ta="center">{points}</Box>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Paper>

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
      </DataRenderer>
    </Flex>
  )
}

export default QuestionnaireRanking
