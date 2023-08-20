'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import GuestForm, { GuestFormValue } from '@/components/GuestForm'
import {
  InsertGuestDocument,
  InsertGuestMutation,
  InsertGuestMutationVariables,
} from '@/lib/wedding/graphql'
import { useAppContext } from '@/providers/AppProvider'
import { useEventContext } from '@/providers/EventProvider'
import { useMutation } from '@apollo/client'
import { Flex, Title } from '@mantine/core'
import { useState } from 'react'

const GuestCreate: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { event } = useEventContext()
  const { navigate, setError, setNotification } = useAppContext()

  const breadcrumbs = [
    { title: `Convidados - ${event?.name}`, href: `/${event?.id}/guests` },
  ]

  const [insertGuest] = useMutation<
    InsertGuestMutation,
    InsertGuestMutationVariables
  >(InsertGuestDocument)

  const handleSubmit = async (guest: GuestFormValue) => {
    try {
      await insertGuest({
        variables: {
          ...guest,
          eventId: event.id,
        },
      })

      setNotification('Convidado criado com sucesso')

      navigate(`/${event.id}/guests`)
    } catch (error: any) {
      console.error(error)
      setError('Erro ao criar convidado')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Flex direction="column" gap={16}>
      <Breadcrumbs items={breadcrumbs} />
      <Title>Novo convidado</Title>
      <GuestForm
        value={{
          id: null,
          name: '',
          email: '',
          phone: '',
        }}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Flex>
  )
}

export default GuestCreate
