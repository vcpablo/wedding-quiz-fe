import { Flex, Text } from '@mantine/core'
import { IconThumbDown } from '@tabler/icons-react'

type EmptyStateProps = {
  text?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({
  text = 'Nenhum registro encontrado',
}) => (
  <Flex align="center" gap={5}>
    <IconThumbDown size="1rem" color="gray" />
    <Text color="gray">{text}</Text>
  </Flex>
)

export default EmptyState
