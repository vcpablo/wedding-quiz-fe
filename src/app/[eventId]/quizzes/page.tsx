'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import QuestionnaireCard from '@/components/QuestionnaireCard'
import {
  GetEventQuestionnairesGuestAnswersDocument,
  GetEventQuestionnairesGuestAnswersQuery,
  GetEventQuestionnairesGuestAnswersQueryVariables,
} from '@/lib/wedding/graphql'

import { useAuthContext } from '@/providers/AuthProvider'
import { useEventContext } from '@/providers/EventProvider'
import { Questionnaire } from '@/types'
import { useLazyQuery } from '@apollo/client'
import { Flex, Grid, Text, Title } from '@mantine/core'
import { useEffect, useMemo } from 'react'

const Quizzes: React.FC = () => {
  const { user } = useAuthContext()
  const { event } = useEventContext()

  const [fetch, { data, loading }] = useLazyQuery<
    GetEventQuestionnairesGuestAnswersQuery,
    GetEventQuestionnairesGuestAnswersQueryVariables
  >(GetEventQuestionnairesGuestAnswersDocument)

  useEffect(() => {
    if (event?.id) {
      fetch({
        variables: {
          eventId: event?.id,
          userId: user.data?.id,
        },
      })
    }
  }, [event?.id])

  const breadcrumbs = [
    { title: 'Meus eventos', href: '/' },
    { title: event?.name, active: true },
  ]

  const isEmpty = useMemo(
    () => data?.questionnaire?.length === 0,
    [data?.questionnaire]
  )

  return (
    <Flex direction="column" gap={16}>
      <Breadcrumbs items={breadcrumbs} />
      <Title>Quizzes</Title>
      <Text size="sm" color="dimmed">
        Estes são os questionários disponíveis para o evento {event?.name}.
      </Text>
      <DataRenderer
        isLoading={loading}
        isEmpty={isEmpty}
        emptyText="Nenhum quiz encontrado"
      >
        <Grid>
          {data?.questionnaire?.map((questionnaire: any, index: number) => {
            const hasPrizes = questionnaire.prizes.length > 0

            return (
              <Grid.Col key={index} xs={6} sm={4} md={4} lg={4}>
                <Flex
                  key={index}
                  direction={{ base: 'column', sm: 'row' }}
                  h="100%"
                  style={{
                    flexGrow: '1',
                    flex: '1 0 100%',
                  }}
                >
                  <QuestionnaireCard
                    questionnaire={questionnaire as Questionnaire}
                    hasPrizes={hasPrizes}
                  />
                </Flex>
              </Grid.Col>
            )
          })}
        </Grid>
      </DataRenderer>
    </Flex>
  )
}

export default Quizzes
