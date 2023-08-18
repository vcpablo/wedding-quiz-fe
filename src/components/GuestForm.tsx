'use client'

import { isValidEmail, isValidPhoneNumber } from '@/lib/utils/string'
import { Button, Card, Flex, Group, Loader, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export type GuestFormValue = {
  id: number | null
  name: string
  phone: string
  email: string
}

type GuestFormProps = {
  value: GuestFormValue
  isLoading?: boolean
  onSubmit: (guest: GuestFormValue) => void
}

const GuestForm: React.FC<GuestFormProps> = ({
  value = {
    id: null,
    name: '',
    email: '',
    phone: '',
  },
  isLoading,
  onSubmit,
}) => {
  const form = useForm({
    initialValues: value,

    validate: {
      name: (value: string) => (!!value ? null : 'Informe um nome'),
      email: (value: string) =>
        !value || (value && isValidEmail(value))
          ? null
          : 'Informe um e-mail válido',
      phone: (value: string) =>
        !value || (value && isValidPhoneNumber(value))
          ? null
          : 'Informe um telefone válido',
    },
  })

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          label="Nome"
          placeholder="Informe o nome"
          disabled={isLoading}
          {...form.getInputProps('name')}
        />

        <TextInput
          type="email"
          label="E-mail"
          placeholder="Informe o email"
          disabled={isLoading}
          {...form.getInputProps('email')}
        />

        <TextInput
          type="phone"
          label="Telefone"
          placeholder="Informe o telefone"
          disabled={isLoading}
          {...form.getInputProps('phone')}
        />

        <Group position="right" mt="md">
          <Button fullWidth type="submit" disabled={isLoading}>
            {isLoading ? (
              <Flex align="center" gap={10}>
                <Loader size="sm" /> Aguarde...
              </Flex>
            ) : (
              'Salvar'
            )}
          </Button>
        </Group>
      </form>
    </Card>
  )
}

export default GuestForm
