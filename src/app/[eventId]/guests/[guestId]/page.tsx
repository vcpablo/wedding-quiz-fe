'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import GuestForm, { GuestFormValue } from '@/components/GuestForm'
import {
  GetGuestByIdDocument,
  GetGuestByIdQuery,
  GetGuestByIdQueryVariables,
  UpdateGuestDocument,
  UpdateGuestMutation,
  UpdateGuestMutationVariables,
} from '@/lib/wedding/graphql'
import { useAppContext } from '@/providers/AppProvider'
import { useEventContext } from '@/providers/EventProvider'
import { useMutation, useQuery } from '@apollo/client'
import { Flex, Title } from '@mantine/core'
import { useParams } from 'next/navigation'
import { useMemo, useState } from 'react'

const GuestUpdate: React.FC = () => {
  const { event } = useEventContext()
  const { navigate, setError, setNotification } = useAppContext()

  const params = useParams()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const breadcrumbs = [
    { title: `Convidados - ${event?.name}`, href: `/${event?.id}/guests` },
  ]

  const { data, loading } = useQuery<
    GetGuestByIdQuery,
    GetGuestByIdQueryVariables
  >(GetGuestByIdDocument, {
    variables: {
      id: Number(params?.guestId),
    },
    fetchPolicy: 'no-cache',
    skip: !params?.guestId,
  })

  const [updateGuest] = useMutation<
    UpdateGuestMutation,
    UpdateGuestMutationVariables
  >(UpdateGuestDocument)

  const isEmpty = useMemo(() => data?.guests?.length === 0, [data])

  const guest = useMemo(() => {
    const guest = data?.guests?.[0]

    return guest
      ? {
          id: guest.id,
          name: guest.name || '',
          email: guest.email || '',
          phone: guest.phone || '',
        }
      : null
  }, [data])

  const handleSubmit = async (guest: GuestFormValue) => {
    try {
      await updateGuest({
        variables: {
          ...guest,
          id: Number(guest.id),
        },
      })

      setNotification('Convidado atualizado com sucesso')

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
      <Title>Editar convidado</Title>
      <DataRenderer
        isLoading={loading}
        isEmpty={isEmpty}
        emptyText="Convidado não encontrado"
      >
        {guest && <GuestForm value={guest} onSubmit={handleSubmit} />}
      </DataRenderer>
    </Flex>
  )
}

export default GuestUpdate
