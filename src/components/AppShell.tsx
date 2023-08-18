import { useEffect, useState } from 'react'
import {
  AppShell as AppShellUI,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Flex,
  Alert,
} from '@mantine/core'

import Navbar from './Navbar'
import Footer from './Footer'
import { useAuthContext } from '@/providers/AuthProvider'
import { useAppContext } from '@/providers/AppProvider'
import LoadingOverlay from './LoadingOverlay'
import { IconAlertTriangle } from '@tabler/icons-react'
import ErrorAlert from './ErrorAlert'
import NotificationAlert from './NotificationAlert'

const AppShell = ({ children }: { children: React.ReactElement }) => {
  const theme = useMantineTheme()

  const [isOpen, setIsOpen] = useState(false)

  const { navigate } = useAppContext()
  const { isLoggedIn } = useAuthContext()
  const { isLoading, error, setError, notification, setNotification } =
    useAppContext()

  useEffect(() => {
    console.log({ notification })
  }, [notification])

  useEffect(() => {
    if (!isLoggedIn && isOpen) {
      setIsOpen(false)
    }
  }, [isLoggedIn])

  const styles = {
    main: {
      background:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
      [theme.fn.smallerThan('md')]: {
        paddingLeft: `1rem`,
      },
    },
  }

  return isLoggedIn ? (
    <AppShellUI
      styles={styles}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Navbar isOpen={isOpen} onClick={() => setIsOpen(false)} />}
      footer={<Footer />}
      header={
        <Header height={{ base: 50, md: 70 }}>
          <Flex align="center" h="100%" p="md">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={isOpen}
                onClick={() => setIsOpen((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              Wedding Quiz
            </Text>
          </Flex>
        </Header>
      }
    >
      <LoadingOverlay visible={isLoading || !isLoggedIn}>
        <>{children}</>
      </LoadingOverlay>
    </AppShellUI>
  ) : (
    <>
      {children}
      {error && <ErrorAlert error={error} onClose={() => setError('')} />}
    </>
  )
}

export default AppShell
