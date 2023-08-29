'use client'
import { useAppContext } from '@/providers/AppProvider'
import { useAuthContext } from '@/providers/AuthProvider'
import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Header as HeaderUI,
  Image,
  Modal,
  Text,
} from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'
import { useState } from 'react'

const Header: React.FC = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false)

  const { user, logout, isLoggedIn } = useAuthContext()
  const { navigate } = useAppContext()

  const handleOpenLogoutModal = () => setIsLogoutModalOpen(true)
  const handleCloseLogoutModal = () => setIsLogoutModalOpen(false)
  const handleLogout = () => {
    logout()
    setIsLogoutModalOpen(false)
  }

  return (
    <>
      <HeaderUI height="auto" styles={{ root: { position: 'absolute' } }}>
        <Container>
          <Flex align="center" h="100%" p="xs">
            <Flex align="center" justify="space-between" w="100%">
              <Flex align="center" gap={10}>
                <Image src="/images/logo.png" width="24px" alt="Logo Quizzer" />
                <Text
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/')}
                >
                  Quizzer
                </Text>
              </Flex>
              {isLoggedIn && (
                <Flex align="center" gap={10}>
                  {user.data?.name}
                  <ActionIcon
                    variant="light"
                    color="red"
                    onClick={handleOpenLogoutModal}
                  >
                    <IconLogout size="1rem" />
                  </ActionIcon>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Container>
      </HeaderUI>
      <Modal
        opened={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        title="Deseja realmente sair?"
      >
        <Flex justify="end" gap={10}>
          <Button
            variant="outline"
            color="gray"
            onClick={handleCloseLogoutModal}
          >
            Não
          </Button>
          <Button onClick={handleLogout}>Sim</Button>
        </Flex>
      </Modal>
    </>
  )
}

export default Header
