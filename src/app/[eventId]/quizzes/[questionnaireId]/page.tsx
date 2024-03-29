'use client'

import { Button, Flex, Box, Text, Progress, Title } from '@mantine/core'

import { useMemo } from 'react'
import { useEventContext } from '@/providers/EventProvider'
import { useQuestionnaireContext } from '@/providers/QuestionnaireProvider'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Option } from '@/types'
import QuestionOption from '@/components/QuestionOption'
import DataRenderer from '@/components/DataRenderer'
import { IconCheck } from '@tabler/icons-react'

type ButtonProps = {
  label: string
  color: string
  icon: React.ReactNode
}

const Questionnaire: React.FC = () => {
  const { event } = useEventContext()

  const {
    questionnaire,
    activeQuestion,
    activeQuestionIndex,
    selectedOption,
    setSelectedOption,
    handleNextQuestion,
    isLastQuestion,
    progress,
  } = useQuestionnaireContext()

  const breadcrumbs = [
    { title: 'Meus eventos', href: '/' },
    { title: String(event?.name), href: `/${event?.id}/quizzes` },
  ]

  const totalQuestions: number = useMemo(
    () => Number(questionnaire?.questions?.length || 0),
    [questionnaire]
  )

  const buttonProps: ButtonProps = useMemo(
    () =>
      isLastQuestion
        ? {
            label: 'Concluir',
            color: 'green',
            icon: <IconCheck size="1rem" />,
          }
        : {
            label: 'Próxima pergunta',
            color: 'blue',
            icon: null,
          },
    [isLastQuestion]
  )

  const isEmpty = useMemo(
    () => (activeQuestion?.options?.length || 0) === 0 || totalQuestions === 0,
    [totalQuestions, activeQuestion?.options]
  )

  const emptyText = useMemo(
    () =>
      totalQuestions === 0
        ? 'Nenhuma pergunta encontrada'
        : 'Nenhuma opção encontrada',
    [totalQuestions]
  )

  return (
    <Flex direction="column" gap={16} h="100%" justify="space-between">
      <Flex direction="column" gap={16}>
        <Breadcrumbs items={breadcrumbs} />
        <Title>{questionnaire?.title}</Title>

        {totalQuestions > 0 && (
          <Box>
            <Text size={14}>
              Pergunta {activeQuestionIndex + 1} de {totalQuestions}
            </Text>
            <Progress value={progress} size={14} />
          </Box>
        )}

        <Box>
          <Text fz="lg" fw={700}>
            {activeQuestion?.title}
          </Text>
          <DataRenderer isEmpty={isEmpty} emptyText={emptyText}>
            <Flex direction="column" gap={10} py={10}>
              {activeQuestion?.options?.map((option: Option) => (
                <QuestionOption
                  key={option.id}
                  option={option}
                  selectedOption={selectedOption}
                  onClick={setSelectedOption}
                />
              ))}
            </Flex>
          </DataRenderer>
        </Box>
      </Flex>

      {!isEmpty && (
        <Flex direction="column" gap={16}>
          <Button
            fullWidth
            radius="md"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            color={buttonProps.color}
            leftIcon={buttonProps.icon}
          >
            {buttonProps.label}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default Questionnaire
