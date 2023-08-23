'use client'

import { useMediaQuery } from '@mantine/hooks'
import { Button, Flex, Modal, Text } from '@mantine/core'

type ConfirmationModalProps = {
  title: string
  message: string
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  message,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const isMobile = useMediaQuery('(max-width: 50em)')

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title={title}
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <Flex direction="column" gap={10}>
        <Text>{message}</Text>
        <Flex justify="end" gap={10}>
          <Button variant="outline" color="gray" onClick={onClose}>
            Não
          </Button>
          <Button onClick={onConfirm}>Sim</Button>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default ConfirmationModal
