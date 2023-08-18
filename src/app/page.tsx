'use client'
import {
  GetEventsByUserDocument,
  GetEventsByUserQuery,
  GetEventsByUserQueryVariables,
} from '@/lib/wedding/graphql'

import { useAuthContext } from '@/providers/AuthProvider'
import { useQuery } from '@apollo/client'

import { Flex, Title } from '@mantine/core'

import EventCard from '@/components/EventCard'

import { Event } from '@/types'
import { Masonry } from '@/components/Masonry'
import { useAppContext } from '@/providers/AppProvider'
import DataRenderer from '@/components/DataRenderer'
import { useMemo } from 'react'

const Home: React.FC = () => {
  const { user, isLoggedIn } = useAuthContext()
  const { navigate } = useAppContext()

  const { loading, data } = useQuery<
    GetEventsByUserQuery,
    GetEventsByUserQueryVariables
  >(GetEventsByUserDocument, {
    variables: {
      userId: user.data?.id,
    },
    skip: !user.data?.id,
  })

  const isLoading = useMemo(() => loading || !isLoggedIn, [loading, isLoggedIn])
  const isEmpty = useMemo(() => data?.events.length === 0, [data?.events])

  return (
    <Flex direction="column" gap={16}>
      <Title>Meus eventos</Title>
      <DataRenderer
        isLoading={isLoading}
        isEmpty={isEmpty}
        emptyText="Nenhum evento encontrado"
      >
        <Masonry>
          {data?.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Masonry>
      </DataRenderer>
    </Flex>
  )
}

export default Home
