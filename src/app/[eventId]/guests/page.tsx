'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import ConfirmationModal from '@/components/ConfirmationModal'
import DataRenderer from '@/components/DataRenderer'
import GuestsTotal from '@/components/GuestsTotal'
import {
  DeleteGuestDocument,
  DeleteGuestMutation,
  DeleteGuestMutationVariables,
  GetGuestsByEventsDocument,
  GetGuestsByEventsQuery,
  GetGuestsByEventsQueryVariables,
} from '@/lib/wedding/graphql'
import { useAppContext } from '@/providers/AppProvider'

import { useEventContext } from '@/providers/EventProvider'
import { Guest } from '@/types'
import { useMutation, useQuery } from '@apollo/client'
import { Box, Button, Flex, Input, Table, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconCheck,
  IconEdit,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUser,
  IconX,
} from '@tabler/icons-react'
import { SyntheticEvent, useMemo, useState } from 'react'

type SelectedGuest = {
  id: number
  name: string
}

const Guests: React.FC = () => {
  const { event } = useEventContext()
  const { navigate, setIsLoading, setNotification, setError } = useAppContext()
  const [selectedGuest, setSelectedGuest] = useState<SelectedGuest | null>(null)
  const [search, setSearch] = useState<string>('')

  const [
    isConfirmationModalOpen,
    { open: openConfirmationModal, close: closeConfirmationModal },
  ] = useDisclosure(false)

  const { data, loading, refetch } = useQuery<
    GetGuestsByEventsQuery,
    GetGuestsByEventsQueryVariables
  >(GetGuestsByEventsDocument, {
    variables: {
      eventId: event?.id,
    },
    fetchPolicy: 'no-cache',
    skip: !event?.id,
  })

  const [deleteGuest] = useMutation<
    DeleteGuestMutation,
    DeleteGuestMutationVariables
  >(DeleteGuestDocument)

  const breadcrumbs = [
    { title: 'Meus eventos', href: '/' },
    { title: event?.name, active: true },
  ]

  const isEmpty = useMemo(() => data?.guests?.length === 0, [data?.guests])

  const filteredGuests = useMemo(() => {
    if (!search) return data?.guests

    return data?.guests?.filter(({ name }) =>
      name?.toLowerCase().includes(search.toLowerCase())
    )
  }, [data?.guests, search])

  const handleNewGuest = () => navigate(`/${event.id}/guests/create`)

  const handleEditGuest = (id: number) => navigate(`/${event.id}/guests/${id}`)

  const handleRemoveGuest = (guest: SelectedGuest) => {
    setSelectedGuest(guest)
    openConfirmationModal()
  }

  const handleConfirmRemoveGuest = async () => {
    try {
      setIsLoading(true)
      await deleteGuest({
        variables: {
          id: Number(selectedGuest?.id),
        },
      })

      setNotification('Convidado removido com sucesso')

      refetch()
      setSelectedGuest(null)
      closeConfirmationModal()
    } catch (error: any) {
      console.error(error)
      setError('Erro ao remover convidado')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (event: any): void => {
    setSearch(event.target.value)
  }

  const handleClearSearch = (): void => {
    setSearch('')
  }

  return (
    <>
      <Flex direction="column" gap={16}>
        <Breadcrumbs items={breadcrumbs} />
        <Flex justify="space-between" align="center">
          <Title>Convidados</Title>
          <Button
            size="xs"
            leftIcon={<IconPlus size="1rem" />}
            onClick={handleNewGuest}
          >
            Novo
          </Button>
        </Flex>
        <Input
          icon={<IconSearch />}
          rightSection={<IconX size="1rem" onClick={handleClearSearch} />}
          placeholder="Buscar convidados"
          value={search}
          onChange={handleSearch}
        />
        <DataRenderer
          isLoading={loading}
          isEmpty={isEmpty}
          emptyText="Nenhum convidado encontrado"
        >
          {!loading && (
            <GuestsTotal
              guests={data?.guests || []}
              filteredGuests={filteredGuests || []}
            />
          )}
          <Box style={{ overflowX: 'auto' }} mah="calc(100dvh - 215px)">
            <Table
              striped
              captionSide="bottom"
              style={{ overflowX: 'auto' }}
              mah="100%"
            >
              <thead>
                <tr>
                  <th>
                    <Box ta="center">#</Box>
                  </th>
                  <th>Nome</th>
                  <th>
                    <Box ta="center">
                      <IconUser size="1rem" />
                    </Box>
                  </th>
                  <th>
                    <Box ta="center">
                      <IconSettings size="1rem" />
                    </Box>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredGuests?.map(({ id, name, user }) => (
                  <tr key={id}>
                    <td>
                      <Box ta="center">{id}</Box>
                    </td>
                    <td>{name || 'Convidado desconhecido'}</td>
                    <td>
                      <Box ta="center">
                        {user && <IconCheck size="1rem" color="green" />}
                      </Box>
                    </td>
                    <td>
                      <Flex justify="center" align="center" gap={16}>
                        <IconEdit
                          size="1rem"
                          onClick={() => handleEditGuest(id)}
                        />
                        <IconTrash
                          size="1rem"
                          color="red"
                          onClick={() =>
                            handleRemoveGuest({ id, name: String(name) })
                          }
                        />
                      </Flex>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
        </DataRenderer>
      </Flex>
      <ConfirmationModal
        title="Confirmar exclusão"
        message={`Deseja realmente excluir o convidado ${selectedGuest?.name}?`}
        isOpen={isConfirmationModalOpen}
        onClose={close}
        onConfirm={handleConfirmRemoveGuest}
      />
    </>
  )
}

export default Guests
