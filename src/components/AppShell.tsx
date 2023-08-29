import { useEffect, useState } from 'react'
import {
  AppShell as AppShellUI,
  useMantineTheme,
  Container,
  Box,
} from '@mantine/core'
import Header from './Header'

import { useAuthContext } from '@/providers/AuthProvider'
import { useAppContext } from '@/providers/AppProvider'
import ErrorAlert from './ErrorAlert'
import Footer from './Footer'

import { usePathname } from 'next/navigation'
import { useMediaQuery } from '@mantine/hooks'

const AppShell = ({ children }: { children: React.ReactElement }) => {
  const theme = useMantineTheme()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const { navigate } = useAppContext()
  const { isLoggedIn, user } = useAuthContext()
  const { error, setError } = useAppContext()

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
        paddingTop: '60px',
      },
      height: 'calc(100dvh - 30px)',
      overflow: 'auto',
    },
  }

  const isLoginPage = pathname === '/login'
  const matches = useMediaQuery('(max-width: 575px)')

  return isLoginPage ? (
    <>
      {children}
      {error && <ErrorAlert error={error} onClose={() => setError('')} />}
    </>
  ) : (
    <AppShellUI styles={styles} header={<Header />}>
      <Container h="90%">
        <Box w="100%" pb={50}>
          {children}
        </Box>
      </Container>
    </AppShellUI>
  )
}

export default AppShell
