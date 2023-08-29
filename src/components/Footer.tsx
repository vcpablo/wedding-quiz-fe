'use client'

import { Footer as FooterUI, Flex, Text } from '@mantine/core'
import NotificationAlert from './NotificationAlert'
import { useAppContext } from '@/providers/AppProvider'
import ErrorAlert from './ErrorAlert'

const Footer = () => {
  const { error, setError, notification, setNotification } = useAppContext()

  const styles = {
    root: {
      position: 'absolute',
    },
  }

  return (
    <FooterUI height="auto" p="xs" styles={styles}>
      <Flex direction="column" gap={16}>
        {notification && (
          <NotificationAlert
            notification={notification}
            onClose={() => setNotification('')}
          />
        )}
        {error && <ErrorAlert error={error} onClose={() => setError('')} />}
        <Text align="center" size={12}>
          Quizzer &copy; 2023
        </Text>
      </Flex>
    </FooterUI>
  )
}

export default Footer
