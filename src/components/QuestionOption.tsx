'use client'

import { Option } from '@/types'
import { Box, Flex, MantineTheme, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

type QuestionOptionProps = {
  option: Option
  selectedOption?: number | null
  onClick?: (id: number) => void
}

const QuestionOption: React.FC<QuestionOptionProps> = ({
  option,
  selectedOption,
  onClick,
}) => {
  const sx = (theme: MantineTheme) => ({
    border: `1px solid ${theme.colors.blue[8]}`,
    borderRadius: theme.radius.md,
    background: selectedOption === option.id ? theme.colors.blue[0] : '',
  })

  const handleClick = () => {
    if (onClick) {
      onClick(option.id)
    }
  }

  return (
    <Flex sx={sx} onClick={handleClick} gap={15} p={10}>
      {selectedOption === option.id ? (
        <ThemeIcon color="blue" size={24}>
          <IconCheck size="1rem" />
        </ThemeIcon>
      ) : (
        <Box w={24} h={24} />
      )}
      {option.title}
    </Flex>
  )
}

export default QuestionOption
