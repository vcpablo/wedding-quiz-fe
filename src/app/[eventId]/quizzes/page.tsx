'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import QuestionnaireCard from '@/components/QuestionnaireCard'
import {
  GetEventQuestionnairesGuestAnswersDocument,
  GetEventQuestionnairesGuestAnswersQuery,
  GetEventQuestionnairesGuestAnswersQueryVariables,
} from '@/lib/wedding/graphql'
import { useAppContext } from '@/providers/AppProvider'

import { useAuthContext } from '@/providers/AuthProvider'
import { useEventContext } from '@/providers/EventProvider'
import { Questionnaire } from '@/types'
import { useQuery } from '@apollo/client'
import { Flex, Grid, Title } from '@mantine/core'
import { useEffect, useMemo } from 'react'

const Quizzes: React.FC = () => {
  const { user } = useAuthContext()
  const { event } = useEventContext()
  const { setIsLoading } = useAppContext()

  const { navigate } = useAppContext()

  const { data, loading } = useQuery<
    GetEventQuestionnairesGuestAnswersQuery,
    GetEventQuestionnairesGuestAnswersQueryVariables
  >(GetEventQuestionnairesGuestAnswersDocument, {
    variables: {
      userId: user.data?.id,
      eventId: event?.id,
    },
    fetchPolicy: 'no-cache',
    skip: !event?.id || !user.data?.id,
  })

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
                  // maw={{ base: '100%', sm: 'calc(100% * (1/4) - 12px)' }}
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
        {/* <Flex wrap="wrap" gap={16}>
        </Flex> */}
      </DataRenderer>
    </Flex>
  )
}

export default Quizzes
