'use client'

import { Options, Questions } from '@/lib/wedding/graphql'
import {
  Card as CardUI,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Radio,
} from '@mantine/core'
import { useState } from 'react'

const Card = ({ question }: { question: Questions }) => {
  const [answer, setAnswer] = useState<string>()

  return (
    <CardUI shadow="sm" padding="lg" radius="md" withBorder>
      {question.image && (
        <CardUI.Section>
          <Image src={question.image} height={160} alt={question.title} />
        </CardUI.Section>
      )}

      <Group position="apart" mb="xs">
        <Text weight={500}>{question.title}</Text>
        <Badge color="pink" variant="light">
          {question.type} - {answer}
        </Badge>
      </Group>

      {question.hint && (
        <Text size="sm" color="dimmed">
          {question.hint}
        </Text>
      )}

      <Radio.Group
        value={answer}
        onChange={setAnswer}
        name="answer"
        withAsterisk
        display="flex"
        style={{ flexDirection: 'column', gap: '10px' }}
      >
        {question.options.map((option: Options) => (
          <Radio key={option.id} value={option.id} label={option.title} />
        ))}
      </Radio.Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Próxima
      </Button>
    </CardUI>
  )
}

export default Card
