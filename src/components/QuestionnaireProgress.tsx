'use client'

import { QuestionnaireProgress } from '@/types'
import { Progress, Text } from '@mantine/core'
import { useMemo } from 'react'

const QuestionnaireProgress: React.FC<QuestionnaireProgress> = ({
  totalQuestions,
  totalAnswers,
  progress,
}) => {
  const color = useMemo(() => (progress === 100 ? 'green' : 'blue'), [progress])

  const label = useMemo(() => {
    if (totalQuestions === 0) return ''
    if (totalAnswers >= totalQuestions)
      return '(Todas as perguntas respondidas)'
    if (totalAnswers === 0) return '(Nenhuma pergunta respondida)'

    return `(${totalAnswers} de ${totalQuestions} perguntas
      respondidas)`
  }, [totalQuestions, totalAnswers, progress])

  return (
    <>
      <Text size="xs">
        Progresso {progress}% {label}
      </Text>
      <Progress value={progress} w="100%" size="lg" color={color} />
    </>
  )
}

export default QuestionnaireProgress
