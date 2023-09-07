'use client'

import { Questionnaire } from '@/types'
import { Box, Button, Card, Flex, Group, Image, Text } from '@mantine/core'
import { useCallback, useMemo } from 'react'
import QuestionnaireBadge from './QuestionnaireBadge'
import {
  getQuestionnaireButtonAttrs,
  getQuestionnaireProgress,
  getQuestionnaireStatus,
} from '@/helpers/questionnaire'
import {
  IconExclamationCircle,
  IconListDetails,
  IconListNumbers,
  IconPlayerPlay,
  IconPlayerSkipForward,
  IconTrophy,
} from '@tabler/icons-react'
import { useAppContext } from '@/providers/AppProvider'
import QuestionnaireProgress from './QuestionnaireProgress'
import { useAuthContext } from '@/providers/AuthProvider'

type QuestionnaireCardProps = {
  questionnaire: Questionnaire
  hasPrizes: boolean
}

const QuestionnaireCard: React.FC<QuestionnaireCardProps> = ({
  questionnaire,
  hasPrizes,
}) => {
  const { navigate } = useAppContext()
  const { isAdmin } = useAuthContext()

  const { progress, totalAnswers, totalQuestions } = useMemo(
    () => getQuestionnaireProgress(questionnaire),
    [questionnaire]
  )

  const status = useMemo(() => getQuestionnaireStatus(progress), [progress])

  const buttonAttrs = useMemo(
    () => getQuestionnaireButtonAttrs(progress),
    [progress]
  )

  const buttonIcon = useMemo(() => {
    if (progress === 0) return <IconPlayerPlay size="1rem" />
    if (progress === 100) return <IconListNumbers size="1rem" />
    return <IconPlayerSkipForward size="1rem" />
  }, [progress])

  const hasNoQuestion = useMemo(
    () => questionnaire?.questions?.length === 0,
    [questionnaire]
  )

  const handleClick = useCallback(
    (bypass: boolean) => {
      const isQuestionnaireComplete = progress === 100
      if (isQuestionnaireComplete && !bypass) return

      const isQuestionnaireNotStarted = progress === 0
      const isQuestionnaireStarted = progress > 0 && progress < 100

      const url = `/${questionnaire.event_id}/quizzes/${questionnaire.id}`
      const route =
        isQuestionnaireStarted || isQuestionnaireNotStarted
          ? url
          : `${url}/ranking`

      navigate(route)
    },
    [questionnaire, progress]
  )

  const handleViewPrizes = (event: any) => {
    event.stopPropagation()
    navigate(`/${questionnaire.event_id}/quizzes/${questionnaire.id}/prizes`)
  }

  const handleViewAnswers = (event: any) => {
    event.stopPropagation()
    navigate(`/${questionnaire.event_id}/quizzes/${questionnaire.id}/answers`)
  }

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ cursor: 'pointer' }}
      onClick={() => handleClick(false)}
    >
      <Card.Section>
        <Image
          src={questionnaire.image}
          alt={String(questionnaire.title)}
          height={160}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Flex align="center" gap={5}>
          <Text weight={500}>{questionnaire.title}</Text>
        </Flex>
        <Box w="100%">
          <QuestionnaireProgress
            {...{ progress, totalAnswers, totalQuestions }}
          />
        </Box>

        <QuestionnaireBadge status={status} />
        <Text size="sm" color="dimmed">
          {questionnaire.description}
        </Text>

        <Flex gap={16} align="center" w="100%">
          <Button
            color={buttonAttrs.color}
            fullWidth
            radius="md"
            onClick={() => handleClick(true)}
            leftIcon={buttonIcon}
            disabled={hasNoQuestion}
          >
            {buttonAttrs.label}
          </Button>

          {hasPrizes && (
            <Button
              color="yellow"
              fullWidth
              radius="md"
              leftIcon={<IconTrophy size="1rem" />}
              onClick={handleViewPrizes}
            >
              Prêmios
            </Button>
          )}
        </Flex>

        {isAdmin && (
          <Button
            fullWidth
            variant="light"
            leftIcon={<IconListDetails size="1rem" />}
            onClick={handleViewAnswers}
            disabled={hasNoQuestion}
          >
            Ver respostas
          </Button>
        )}

        {hasNoQuestion && (
          <Flex align="center" gap={5}>
            <IconExclamationCircle size="0.725rem" color="red" />
            <Text color="red" size="xs" align="center">
              Este questionário não possui perguntas
            </Text>
          </Flex>
        )}
      </Group>
    </Card>
  )
}

export default QuestionnaireCard
