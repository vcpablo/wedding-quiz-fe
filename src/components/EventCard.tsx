'use client'
import dayjs from 'dayjs'
import { Button, Card, Flex, Image, Text } from '@mantine/core'
import TruncatedText from './TruncatedText'
import { IconMessageCircleQuestion, IconUsersGroup } from '@tabler/icons-react'
import { useAppContext } from '@/providers/AppProvider'
import { useAuthContext } from '@/providers/AuthProvider'

type EventCardProps = {
  event: any
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { isAdmin } = useAuthContext()
  const { navigate } = useAppContext()

  const handleViewGuests = (e: any) => {
    e.stopPropagation()
    navigate(`/${event.id}/guests`)
  }

  const handleViewQuizzes = (e: any) => {
    e.stopPropagation()
    navigate(`/${event.id}/quizzes`)
  }

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      onClick={handleViewQuizzes}
    >
      <Card.Section>
        <Image src={event.image} alt={event.name} height={240} />
      </Card.Section>

      <Flex direction="column" mt="md" mb="xs">
        <TruncatedText fw={500}>{event.name}</TruncatedText>
        {event.datetime && (
          <Text mt="xs" color="dimmed" size="sm">
            {dayjs(event.datetime).format('DD/MM/YYYY, dddd [às] HH[h]mm')}
          </Text>
        )}
        {event.location && (
          <Text mt="xs" color="dimmed" size="sm">
            {event.location}
          </Text>
        )}

        <Flex gap={16} align="center" mt="md">
          <Button
            fullWidth
            radius="md"
            leftIcon={<IconMessageCircleQuestion size="1rem" />}
            onClick={handleViewQuizzes}
          >
            Questionários
          </Button>

          {isAdmin && (
            <Button
              color="yellow"
              fullWidth
              radius="md"
              onClick={handleViewGuests}
              leftIcon={<IconUsersGroup size="1rem" />}
            >
              Convidados
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  )
}

export default EventCard
