'use client'

import { useAppContext } from '@/providers/AppProvider'
import { useEventContext } from '@/providers/EventProvider'
import { useQuestionnaireContext } from '@/providers/QuestionnaireProvider'
import { Box, Button, Flex, Image, Text, ThemeIcon } from '@mantine/core'
import { IconArrowLeft, IconListNumbers } from '@tabler/icons-react'
import Confetti from 'react-confetti'

interface QuestionnaireCompleteProps {}

const QuestionnaireComplete: React.FC<QuestionnaireCompleteProps> = () => {
  const { event } = useEventContext()
  const { questionnaire } = useQuestionnaireContext()
  const { navigate } = useAppContext()

  const handleLeave = () => {
    navigate(`/${questionnaire?.event_id}/quizzes`)
  }

  const handleViewRanking = () => {
    navigate(`/${questionnaire?.event_id}/quizzes/${questionnaire?.id}/ranking`)
  }

  return (
    <Flex direction="column" gap={16} h="100%" justify="space-between">
      <Flex direction="column" gap={16}>
        <Flex direction="column" align="center">
          <Flex
            h="100%"
            direction="column"
            align="center"
            justify="center"
            gap="10px"
          >
            <Confetti style={{ height: '100%', width: '100%' }} />
            <Image
              src={questionnaire?.image}
              alt={String(questionnaire?.title)}
              radius="md"
              styles={{
                imageWrapper: {
                  height: '250px',
                  width: '100%',
                },
                image: {
                  height: '250px !important',
                  width: '100% !important',
                },
              }}
            />
            <Text align="center">
              <Text size="lg">Parabéns!</Text>
              <Text>
                Você concluiu o questionário do evento{' '}
                <Text fw="bold">{event?.name}</Text>
              </Text>
            </Text>
          </Flex>
        </Flex>
        <Flex w="100%" gap={16}>
          <Button
            color="blue"
            variant="outline"
            fullWidth
            radius="md"
            onClick={() => handleLeave()}
            leftIcon={<IconArrowLeft />}
          >
            Sair
          </Button>
          <Button
            color="blue"
            fullWidth
            radius="md"
            onClick={() => handleViewRanking()}
            leftIcon={<IconListNumbers />}
          >
            Ver ranking
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default QuestionnaireComplete
