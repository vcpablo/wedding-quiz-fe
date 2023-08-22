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
import { IconLogout } from '@tabler/icons-react'
import LoadingOverlay from './LoadingOverlay'
import ErrorAlert from './ErrorAlert'
import Footer from './Footer'
import DataRenderer from './DataRenderer'
import { usePathname } from 'next/navigation'

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
      },
    },
  }

  const isLoginPage = pathname === '/login'

  return isLoginPage ? (
    <>
      {children}
      {error && <ErrorAlert error={error} onClose={() => setError('')} />}
    </>
  ) : (
    <AppShellUI styles={styles} footer={<Footer />} header={<Header />}>
      <Container py={6} my="48px">
        <>{children}</>
      </Container>
    </AppShellUI>
  )
}

export default AppShell
