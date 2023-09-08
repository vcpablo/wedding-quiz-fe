import { useEffect, useMemo, useState } from 'react'
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

  const containerOverflow = useMemo(
    () => (matches ? 'auto' : 'initial'),
    [matches]
  )
  const boxMargin = useMemo(() => (matches ? 80 : 0), [matches])

  return isLoginPage ? (
    <>
      {children}
      {error && <ErrorAlert error={error} onClose={() => setError('')} />}
    </>
  ) : (
    <AppShellUI styles={styles} header={<Header />}>
      <Container h="100%" style={{ overflowY: containerOverflow }}>
        <Box w="100%" mt={boxMargin}>
          {children}
        </Box>
      </Container>
    </AppShellUI>
  )
}

export default AppShell
