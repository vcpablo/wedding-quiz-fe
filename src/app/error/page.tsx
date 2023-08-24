'use client'

import { useAppContext } from '@/providers/AppProvider'
import { Button, Flex, Image, Text } from '@mantine/core'
import { IconBug } from '@tabler/icons-react'
import { IconExclamationCircle, IconHome, IconMail } from '@tabler/icons-react'

const Error: React.FC = () => {
  const { navigate } = useAppContext()

  return (
    <Flex direction="column" justify="space-between" h="100%" gap="10px">
      <Flex direction="column" align="center" style={{ flex: 1 }}>
        <Flex
          h="100%"
          direction="column"
          align="center"
          justify="center"
          gap="10px"
        >
          <IconBug size="50%" color="#bd081c" />
          <Text size="lg">Oops!</Text>
          <Text align="center">
            Algo deu errado.{' '}
            <a href="mailto:vcpablo@gmail.com" target="_blank">
              Clique aqui
            </a>{' '}
            para entrar em contato com o doido que construiu isso.
          </Text>
        </Flex>
      </Flex>
      <Flex w="100%" gap={16}>
        <Button
          color="blue"
          fullWidth
          radius="md"
          onClick={() => navigate('/')}
          leftIcon={<IconHome />}
        >
          voltar ao Início
        </Button>
      </Flex>
    </Flex>
  )
}

export default Error
