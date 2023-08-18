'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useAppContext } from '@/providers/AppProvider'
import { useEventContext } from '@/providers/EventProvider'
import { useQuestionnaireContext } from '@/providers/QuestionnaireProvider'
import { Box, Button, Flex, Image, Text, ThemeIcon } from '@mantine/core'
import {
  IconArrowLeft,
  IconCheck,
  IconConfetti,
  IconListNumbers,
} from '@tabler/icons-react'
import Confetti from 'react-confetti'

interface QuestionnaireCompleteProps {}

const QuestionnaireComplete: React.FC<QuestionnaireCompleteProps> = () => {
  const { event } = useEventContext()
  const { questionnaire } = useQuestionnaireContext()
  const { navigate } = useAppContext()

  const breadcrumbs = [
    { title: 'Meus eventos', href: '/' },
    { title: String(event?.name), href: `/${event?.id}/quizzes` },
    {
      title: String(questionnaire?.title),
      href: `/${event?.id}/quizzes/${questionnaire?.id}`,
      active: true,
    },
  ]

  const handleLeave = () => {
    navigate(`/${questionnaire?.event_id}/quizzes`)
  }

  const handleViewRanking = () => {
    navigate(`/${questionnaire?.event_id}/quizzes/${questionnaire?.id}/ranking`)
  }

  return (
    <Flex direction="column" justify="space-between" h="100%" gap="10px">
      <Flex direction="column" align="center" style={{ flex: 1 }}>
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
                width: '250px',
              },
              image: {
                height: '250px !important',
                width: '250px !important',
              },
            }}
          />
          <Text size="lg">Parabéns!</Text>
          <Text>Você concluiu o questionário.</Text>
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
  )
}

export default QuestionnaireComplete
