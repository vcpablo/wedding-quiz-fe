'use client'

import { Option } from '@/types'
import { Popover, Progress, Text } from '@mantine/core'

import { useMemo } from 'react'

type QuestionOptionAnswersProps = {
  option: Option
  maxAnswers: number
}

const QuestionOptionAnswers: React.FC<QuestionOptionAnswersProps> = ({
  option,
  maxAnswers,
}) => {
  const percent = useMemo(
    () => (Number(option.answers?.length) * 100) / maxAnswers,
    [option, maxAnswers]
  )

  const users = useMemo(
    () =>
      option.answers?.length === 0 ? (
        <Text size={12}>Nenhuma resposta</Text>
      ) : (
        option.answers?.map((answer, index) => (
          <Text key={index} size={12}>
            {answer.user?.name}
          </Text>
        ))
      ),
    [option]
  )

  return (
    <>
      <Text size="xs">{option.title}</Text>
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Progress
            value={percent}
            size={30}
            label={String(option?.answers?.length)}
          />
        </Popover.Target>

        <Popover.Dropdown>{users}</Popover.Dropdown>
      </Popover>
    </>
  )
}

export default QuestionOptionAnswers
