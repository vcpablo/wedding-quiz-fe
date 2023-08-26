'use client'

import {
  Prize,
  Questionnaire,
  QuestionnaireProgress,
  QuestionnaireStatus,
} from '@/types'

export const getQuestionnaireProgress = (
  questionnaire: Questionnaire
): QuestionnaireProgress => {
  const totalQuestions = questionnaire.questions.length

  const totalAnswers =
    questionnaire.questions.reduce(
      (acc, question) => (acc += question.answers.length),
      0
    ) || 0

  const progress = parseInt(
    String((totalAnswers * 100) / (questionnaire?.questions?.length || 1))
  )

  return {
    totalQuestions,
    totalAnswers,
    progress,
  }
}

export const getQuestionnaireStatus = (
  progress: number
): QuestionnaireStatus => {
  if (progress === 100) return QuestionnaireStatus.Completed
  if (progress === 0) return QuestionnaireStatus.NotStarted
  return QuestionnaireStatus.InProgress
}

export const getQuestionnaireButtonAttrs = (
  progress: number
): { label: string; color: string } => {
  if (progress === 0)
    return {
      label: 'Começar',
      color: 'green',
    }
  if (progress === 100)
    return {
      label: 'Ver ranking',
      color: 'blue',
    }
  return {
    label: 'Continuar',
    color: 'blue',
  }
}

export const getQuestionnaireBadgeColor = (
  status: QuestionnaireStatus
): string => {
  if (status === QuestionnaireStatus.NotStarted) return 'orange'
  if (status === QuestionnaireStatus.Completed) return 'green'
  return 'blue'
}

type GetRankingInput = {
  position: number
  prizes: Prize[]
}

export const getRanking = ({ position, prizes }: GetRankingInput): string => {
  if (!position) return ''

  if (prizes.length === 0) {
    return String(position)
  }

  if (position === 1) return '🥇'
  if (prizes.length > 1 && position === 2) return '🥈'
  if (prizes.length > 2 && position === 3) return '🥉'

  return String(position)
}
