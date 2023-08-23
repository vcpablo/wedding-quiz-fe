'use client'

import { Questionnaire } from '@/types'
import {
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Progress,
  Text,
} from '@mantine/core'
import { useCallback, useMemo } from 'react'
import QuestionnaireBadge from './QuestionnaireBadge'
import {
  getQuestionnaireButtonAttrs,
  getQuestionnaireProgress,
  getQuestionnaireStatus,
} from '@/helpers/questionnaire'
import {
  IconListNumbers,
  IconPlayerPlay,
  IconPlayerSkipForward,
  IconTrophy,
} from '@tabler/icons-react'
import { useAppContext } from '@/providers/AppProvider'

type QuestionnaireCardProps = {
  questionnaire: Questionnaire
  hasPrizes: boolean
}

const QuestionnaireCard: React.FC<QuestionnaireCardProps> = ({
  questionnaire,
  hasPrizes,
}) => {
  const { navigate } = useAppContext()

  const progress = useMemo(
    () => getQuestionnaireProgress(questionnaire),
    [questionnaire]
  )

  const progressColor = useMemo(
    () => (progress === 100 ? 'green' : 'blue'),
    [progress]
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

  const handleClick = useCallback(() => {
    const isQuestionnaireComplete = progress === 100
    if (isQuestionnaireComplete) return

    const isQuestionnaireNotStarted = progress === 0
    const isQuestionnaireStarted = progress > 0 && progress < 100

    const url = `/${questionnaire.event_id}/quizzes/${questionnaire.id}`
    const route =
      isQuestionnaireStarted || isQuestionnaireNotStarted
        ? url
        : `${url}/ranking`

    navigate(route)
  }, [questionnaire, progress])

  const handleViewPrizes = () =>
    navigate(`/${questionnaire.event_id}/quizzes/${questionnaire.id}/prizes`)

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ cursor: 'pointer' }}
      onClick={() => handleClick}
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
          <Text size="xs">Progresso {progress}%</Text>
          <Progress value={progress} w="100%" size="lg" color={progressColor} />
        </Box>

        <QuestionnaireBadge status={status} />
      </Group>

      <Text size="sm" color="dimmed">
        {questionnaire.description}
      </Text>

      <Flex gap={16} align="center" mt="md">
        <Button
          color={buttonAttrs.color}
          fullWidth
          radius="md"
          onClick={() => handleClick()}
          leftIcon={buttonIcon}
        >
          {buttonAttrs.label}
        </Button>

        {hasPrizes && (
          <Button
            color="yellow"
            fullWidth
            radius="md"
            leftIcon={<IconTrophy size="1rem" />}
            onClick={() => handleViewPrizes()}
          >
            Prêmios
          </Button>
        )}
      </Flex>
    </Card>
  )
}

export default QuestionnaireCard
