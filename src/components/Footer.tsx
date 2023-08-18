'use client'
import { Footer as FooterUI, Flex } from '@mantine/core'
import NotificationAlert from './NotificationAlert'
import { useAppContext } from '@/providers/AppProvider'
import ErrorAlert from './ErrorAlert'

const Footer = () => {
  const { error, setError, notification, setNotification } = useAppContext()
  return (
    <FooterUI height={60} p="md">
      <Flex direction="column" gap={16}>
        {notification && (
          <NotificationAlert
            notification={notification}
            onClose={() => setNotification('')}
          />
        )}
        {error && <ErrorAlert error={error} onClose={() => setError('')} />}
        <Flex justify="center">Wedding Quiz &copy; 2023</Flex>
      </Flex>
    </FooterUI>
  )
}

export default Footer
