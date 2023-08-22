'use client'

import { login } from '@/services'
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
  Flex,
  Box,
  Image,
  Loader,
  Text,
} from '@mantine/core'

import { useMemo, useState } from 'react'
import { isValidEmail, isValidPhoneNumber } from '@/lib/utils/string'
import { useAuthContext } from '@/providers/AuthProvider'
import { UserState, CredentialsState, CredentialsTypes } from '@/types'
import { useAppContext } from '@/providers/AppProvider'
import { IconLock, IconLogin } from '@tabler/icons-react'

function Login() {
  const { setUser } = useAuthContext()
  const { navigate, setError } = useAppContext()

  const [credentialsError, setCredentialsError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [credentials, setCredentials] = useState<CredentialsState>({
    type: CredentialsTypes.Name,
    value: '',
  })

  const isFormValid: boolean = useMemo(
    () =>
      !!credentials.value &&
      (credentials.type === CredentialsTypes.Name ||
        isValidEmail(credentials.value) ||
        isValidPhoneNumber(credentials.value)),
    [credentials]
  )

  // Magic login temporarily disabled
  // const magicLogin = async (credentials: CredentialsState): Promise<any> => {
  //   if (isValidEmail(credentials.value)) {
  //     setCredentials((state: CredentialsState) => ({
  //       ...state,
  //       type: CredentialsTypes.Email,
  //     }))

  //     return await magicClient.auth.loginWithEmailOTP({
  //       email: 'vcpablo@gmail.com',
  //     })
  //   } else if (isValidPhoneNumber(credentials.value)) {
  //     setCredentials((state: CredentialsState) => ({
  //       ...state,
  //       type: CredentialsTypes.Phone,
  //     }))

  //     return await magicClient.auth.loginWithEmailOTP({
  //       email: 'vcpablo@gmail.com',
  //     })
  //   }

  //   return null
  // }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      if (!isFormValid) {
        const error =
          credentials.type === CredentialsTypes.Name
            ? 'Informe o seu nome'
            : 'Informe um telefone ou um e-mail válido'
        setCredentialsError(error)
        return
      }

      setCredentialsError('')
      setIsLoading(true)

      const { token, user } = await login(credentials)

      if (window) {
        window.localStorage.setItem('wedding-quiz-token', token)
      }

      navigate('/')
    } catch (error: any) {
      console.error(error)
      if (error.code === 'ERR_NETWORK') {
        setError('Conexão de internet não disponível no momento')
      } else {
        setError(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleInput = (event: any) => {
    const value = event.currentTarget?.value

    setCredentials(() => {
      let type = CredentialsTypes.Name

      if (isValidEmail(value)) {
        type = CredentialsTypes.Email
      } else if (isValidPhoneNumber(value)) {
        type = CredentialsTypes.Phone
      }

      return {
        type,
        value,
      }
    })
  }

  return (
    <Container size={420} my={40}>
      <Flex justify="center" direction="column" mih="60vh">
        <Box w="100%">
          <Image src="/images/wedding-vibes.gif" alt="Noivos dançando" />
          <Flex align="center" justify="center" gap={10}>
            <Image src="/images/logo.png" width="48px" alt="Noivos dançando" />
            <Flex direction="column" align="flex-end">
              <Text size={10}>powered by</Text>
              <Title align="center" lh={0.7}>
                Quizzer
              </Title>
            </Flex>
          </Flex>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={handleSubmit}>
              <Flex direction="column" gap="sm">
                <TextInput
                  // label="Informe seu telefone ou email"
                  label="Informe seu nome e sobrenome"
                  // placeholder="Ex: 22999999999 ou joao@email.com"
                  placeholder="Ex: Joao da silva"
                  required
                  onInput={handleInput}
                  error={credentialsError}
                />
                {/* <Button variant="subtle">Entrar com nome</Button> */}
                <Button
                  type="submit"
                  fullWidth
                  disabled={!!credentialsError || isLoading}
                  leftIcon={
                    isLoading ? <Loader size="xs" /> : <IconLock size="1rem" />
                  }
                >
                  {isLoading ? 'Aguarde' : 'Entrar'}
                </Button>
              </Flex>
            </form>
          </Paper>
        </Box>
      </Flex>
    </Container>
  )
}

export default Login
