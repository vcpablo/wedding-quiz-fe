'use client'

import maxBy from 'lodash/fp/maxBy'
import last from 'lodash/fp/last'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import {
  GetEventQuestionnaireUserAnswersByIdDocument,
  GetEventQuestionnaireUserAnswersByIdQuery,
  GetEventQuestionnaireUserAnswersByIdQueryVariables,
  InsertAnswerDocument,
  InsertAnswerMutation,
  InsertAnswerMutationVariables,
  Questionnaire,
  Questions,
  UpdateAnswerDocument,
  UpdateAnswerMutation,
  UpdateAnswerMutationVariables,
} from '@/lib/wedding/graphql'
import { useMutation, useQuery } from '@apollo/client'
import { useAuthContext } from './AuthProvider'
import { useAppContext } from './AppProvider'
import { Answer, Question } from '@/types'
import { reduceAnswers } from '@/lib/utils/questionnaire'

interface QuestionnaireContextValue {
  questionnaire?: Questionnaire | null
  activeQuestion: any | null
  activeQuestionIndex: any | null
  selectedOption: number | null
  setSelectedOption: (id: number) => void
  handleNextQuestion: () => void
  isLastQuestion: boolean
  hasPrizes: boolean
  progress: number
}

const QuestionnaireContext = createContext<
  QuestionnaireContextValue | undefined
>(undefined)

export const QuestionnaireProvider = ({ children }: any) => {
  const searchParams = useSearchParams()
  const params = useParams()
  const pathname = usePathname()

  const { navigate, setIsLoading } = useAppContext()

  const { user } = useAuthContext()
  const [questionnaire, setQuestionnaire] = useState<Questionnaire | null>(null)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(-1)
  const [selectedOption, setSelectedOption] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)

  const questionnaireId = Number(params?.questionnaireId)

  const { loading, data, refetch } = useQuery<
    GetEventQuestionnaireUserAnswersByIdQuery,
    GetEventQuestionnaireUserAnswersByIdQueryVariables
  >(GetEventQuestionnaireUserAnswersByIdDocument, {
    variables: {
      questionnaireId,
      userId: user.data?.id,
    },
    fetchPolicy: 'no-cache',
    skip: !user.data?.id || !questionnaireId,
  })

  const [insertAnswer] = useMutation<
    InsertAnswerMutation,
    InsertAnswerMutationVariables
  >(InsertAnswerDocument)

  const [updateAnswer] = useMutation<
    UpdateAnswerMutation,
    UpdateAnswerMutationVariables
  >(UpdateAnswerDocument)

  useEffect(() => setIsLoading(loading), [loading])

  useEffect(() => {
    if (
      questionnaireId &&
      String(questionnaireId) !== String(questionnaire?.id)
    ) {
      refetch({
        questionnaireId,
        userId: user.data?.id,
      })
    }
  }, [params])

  useEffect(() => {
    if (data?.questionnaire?.[0]) {
      setQuestionnaire(data.questionnaire[0] as Questionnaire)

      const questions: Question[] = data.questionnaire[0]?.questions
      const answers: Answer[] = reduceAnswers(questions)

      const lastAnsweredQuestionId: number =
        maxBy('updated_at', answers)?.question_id || questions[0]?.id

      console.log({ lastAnsweredQuestionId })

      const lastAnsweredQuestionIndex = questions.findIndex(
        (question) => question.id === lastAnsweredQuestionId
      )

      const lastAnsweredQuestionIndexKey =
        answers.length > 0
          ? lastAnsweredQuestionIndex + 1
          : lastAnsweredQuestionIndex

      const currentAnsweredQuestionId =
        questions[lastAnsweredQuestionIndexKey]?.id

      if (
        lastAnsweredQuestionId &&
        /^\/[0-9]\/quizzes\/[0-9]$/.test(pathname)
      ) {
        navigate(`${pathname}?questionId=${currentAnsweredQuestionId}`)
      }
    }
  }, [data?.questionnaire])

  useEffect(() => {
    const questionId = Number(searchParams.get('questionId'))

    if (questionId && questionnaire) {
      const questionIndex = questionnaire?.questions?.findIndex(
        ({ id }) => id === questionId
      )

      setActiveQuestionIndex(questionIndex)

      const selectedOption =
        questionnaire?.questions[questionIndex]?.answers?.[0]?.option_id

      if (selectedOption) {
        setSelectedOption(selectedOption)
      }
    }
  }, [questionnaire, searchParams])

  useEffect(() => {
    const questions: Questions[] = questionnaire?.questions || []
    const progress: number =
      ((activeQuestionIndex + 1) * 100) / (questions.length || 1)

    setProgress(progress)
  }, [questionnaire, activeQuestionIndex])

  const activeQuestion = useMemo(
    () => questionnaire?.questions[activeQuestionIndex],
    [questionnaire, activeQuestionIndex]
  )

  const isLastQuestion = useMemo(() => {
    const lastQuestion = last(questionnaire?.questions)

    return lastQuestion?.id === activeQuestion?.id
  }, [questionnaire, activeQuestion])

  const hasPrizes = useMemo(
    () => (questionnaire && Number(questionnaire?.prizes?.length) > 0) || true,
    [questionnaire?.prizes]
  )

  const handleNextQuestion = useCallback(async () => {
    if (activeQuestion?.id) {
      const answer = activeQuestion?.answers[0]
      setIsLoading(true)

      if (!!answer) {
        await updateAnswer({
          variables: {
            id: answer.id,
            optionId: selectedOption,
          },
        })
      } else {
        await insertAnswer({
          variables: {
            questionId: activeQuestion.id,
            optionId: selectedOption,
            userId: user.data?.id,
          },
        })
      }
    }

    await refetch({
      questionnaireId: Number(params?.questionnaireId),
      userId: user.data?.id,
    })

    if (isLastQuestion) {
      navigate(`${pathname}/complete`)
    } else {
      const nextQuestionId =
        questionnaire?.questions[activeQuestionIndex + 1]?.id
      navigate(`${pathname}?questionId=${nextQuestionId}`)
    }
  }, [selectedOption, isLastQuestion])

  return (
    <QuestionnaireContext.Provider
      value={{
        questionnaire,
        activeQuestionIndex,
        activeQuestion,
        selectedOption,
        isLastQuestion,
        hasPrizes,
        setSelectedOption,
        handleNextQuestion,
        progress,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
}

export const useQuestionnaireContext = () => {
  const Context = useContext(QuestionnaireContext)

  if (Context === undefined) {
    throw new Error(
      'useQuestionnaireContext must be inside an QuestionnaireProvider'
    )
  }

  return Context
}
