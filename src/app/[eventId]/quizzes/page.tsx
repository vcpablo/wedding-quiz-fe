'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import LoadingOverlay from '@/components/LoadingOverlay'
import { Masonry } from '@/components/Masonry'
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
import { Flex, Title } from '@mantine/core'
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

  window.onresize = () => setIsLoading(false)

  const handleBack = () => navigate('/')

  const isEmpty = useMemo(
    () => data?.questionnaire?.length === 0,
    [data?.questionnaire]
  )

  useEffect(() => {
    if (data?.questionnaire) {
      setTimeout(() => window.dispatchEvent(new Event('resize')), 0)
    }
  }, [data])

  return (
    <Flex direction="column" gap={16}>
      <Breadcrumbs items={breadcrumbs} />
      <Title>Quizzes</Title>
      <DataRenderer
        isLoading={loading}
        isEmpty={isEmpty}
        emptyText="Nenhum quiz encontrado"
      >
        <Flex wrap="wrap" gap={16}>
          {data?.questionnaire?.map((questionnaire: any, index: number) => {
            const hasPrizes = questionnaire.prizes.length > 0

            return (
              <Flex
                key={index}
                direction={{ base: 'column', sm: 'row' }}
                maw={{ base: '100%', sm: 'calc(100% * (1/4) - 12px)' }}
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
            )
          })}
        </Flex>
      </DataRenderer>
    </Flex>
  )
}

export default Quizzes
