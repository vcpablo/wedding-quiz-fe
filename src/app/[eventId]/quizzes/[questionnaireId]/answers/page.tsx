'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import QuestionOption from '@/components/QuestionOption'
import QuestionOptionAnswers from '@/components/QuestionOptionAnswers'
import { reduceAnswers } from '@/lib/utils/questionnaire'
import {
  GetEventQuestionnaireUsersAnswersDocument,
  GetEventQuestionnaireUsersAnswersQuery,
  GetEventQuestionnaireUsersAnswersQueryVariables,
} from '@/lib/wedding/graphql'
import { useEventContext } from '@/providers/EventProvider'
import { useQuestionnaireContext } from '@/providers/QuestionnaireProvider'
import { Answer, Option, Question } from '@/types'
import { useQuery } from '@apollo/client'
import { Accordion, Avatar, Badge, Flex, Group, Text } from '@mantine/core'
import { groupBy, isLength, maxBy, pipe, reduce, uniq } from 'lodash/fp'
import { useMemo } from 'react'

const Answers: React.FC = () => {
  const { event } = useEventContext()
  const { questionnaire } = useQuestionnaireContext()

  const { loading, data } = useQuery<
    GetEventQuestionnaireUsersAnswersQuery,
    GetEventQuestionnaireUsersAnswersQueryVariables
  >(GetEventQuestionnaireUsersAnswersDocument, {
    variables: {
      questionnaireId: questionnaire?.id,
    },
    skip: !questionnaire?.id,
  })

  const breadcrumbs = [
    { title: String(event?.name), href: `/${event?.id}/quizzes` },
    {
      title: String(questionnaire?.title),
    },
  ]

  const questions: any[] = useMemo(() => {
    if (!data?.questionnaire[0]) return []

    return data.questionnaire[0].questions
  }, [data?.questionnaire])

  const isEmpty = useMemo(() => questions.length === 0, [questions])

  const users = useMemo(
    () =>
      pipe(
        reduce((acc: any, question: Question) => {
          const answersUsers = question.answers.map(
            (answer: Answer) => answer.user_id
          )

          return [...acc, ...answersUsers]
        }, []),
        uniq,
        isLength
      )(questions),
    [questions]
  )

  const styles = {
    label: {
      padding: 0,
    },
  }

  return (
    <>
      <Flex direction="column" gap={16}>
        <Breadcrumbs items={breadcrumbs} />
        <DataRenderer
          isLoading={loading}
          isEmpty={isEmpty}
          emptyText="Nenhuma pergunta encontrada"
        >
          <Text fw="bold">{users} participantes</Text>
          <Accordion
            chevronPosition="right"
            variant="contained"
            styles={styles}
          >
            {questions.map((question: any) => {
              let maxAnswers = 0

              for (const option of question.options) {
                if (!maxAnswers) {
                  maxAnswers = option.answers.length
                } else if (option.answers.length > maxAnswers) {
                  maxAnswers = option.answers.length
                }
              }

              return (
                <Accordion.Item value={String(question.id)} key={question.id}>
                  <Accordion.Control>
                    <Flex justify="space-between" py={10}>
                      <Text>{question.title}</Text>
                      <Badge>{question.answers.length}</Badge>
                    </Flex>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Flex direction="column" gap={10} py={10}>
                      {question.options?.map((option: Option) => (
                        <QuestionOptionAnswers
                          key={option.id}
                          option={option}
                          maxAnswers={maxAnswers}
                        />
                      ))}
                    </Flex>
                  </Accordion.Panel>
                </Accordion.Item>
              )
            })}
          </Accordion>
        </DataRenderer>
      </Flex>
    </>
  )
}

export default Answers
