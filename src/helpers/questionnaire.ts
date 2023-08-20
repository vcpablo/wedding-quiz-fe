'use client'

import { Questionnaire, QuestionnaireStatus } from '@/types'

export const getQuestionnaireProgress = (
  questionnaire: Questionnaire
): number => {
  const answers =
    questionnaire.questions.reduce(
      (acc, question) => (acc += question.answers.length),
      0
    ) || 0

  return parseInt(
    String((answers * 100) / (questionnaire?.questions?.length || 1))
  )
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

export const getRanking = (position: number): string => {
  if (!position) return ''

  if (position === 1) return '🥇'
  if (position === 2) return '🥈'

  return String(position)
}
