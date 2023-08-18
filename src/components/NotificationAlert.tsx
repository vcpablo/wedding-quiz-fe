'use client'

import { Alert } from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons-react'

type NotificationAlertProps = {
  notification: string
  style?: any
  onClose: () => void
}

const NotificationAlert: React.FC<NotificationAlertProps> = ({
  notification,
  style,
  onClose,
}) => {
  return (
    <Alert
      pos="absolute"
      w="99vw"
      left={0}
      right={0}
      m="auto"
      bottom="65px"
      icon={<IconCircleCheck size="1rem" />}
      color="green"
      variant="filled"
      withCloseButton
      onClose={onClose}
      {...style}
    >
      {notification}
    </Alert>
  )
}

export default NotificationAlert
