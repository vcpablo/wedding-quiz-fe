'use client'

import { useAuthContext } from '@/providers/AuthProvider'
import { Alert } from '@mantine/core'
import { IconAlertTriangle } from '@tabler/icons-react'

type ErrorAlertProps = {
  error: string
  style?: any
  onClose: () => void
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ style, error, onClose }) => {
  const { isLoggedIn } = useAuthContext()
  return (
    <Alert
      pos="absolute"
      w="99vw"
      left={0}
      right={0}
      m="auto"
      bottom={isLoggedIn ? '65px' : 6}
      icon={<IconAlertTriangle size="1rem" />}
      title="Algo estranho aconteceu"
      color="red"
      variant="filled"
      withCloseButton
      onClose={onClose}
      {...style}
    >
      {error}
    </Alert>
  )
}

export default ErrorAlert
