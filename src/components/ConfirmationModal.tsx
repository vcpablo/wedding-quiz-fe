import { useMediaQuery } from '@mantine/hooks'
import { Modal } from '@mantine/core'

type ConfirmationModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const isMobile = useMediaQuery('(max-width: 50em)')

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="This is a fullscreen modal"
      fullScreen={isMobile}
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      The Modal will be full screen only on mobile
    </Modal>
  )
}

export default ConfirmationModal
