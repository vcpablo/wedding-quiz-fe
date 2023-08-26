'use client'
export const runtime = 'edge'

import {
  GetEventsByUserDocument,
  GetEventsByUserQuery,
  GetEventsByUserQueryVariables,
} from '@/lib/wedding/graphql'

import { useAuthContext } from '@/providers/AuthProvider'
import { useQuery } from '@apollo/client'

import { Flex, Grid, Text, Title } from '@mantine/core'

import EventCard from '@/components/EventCard'

import DataRenderer from '@/components/DataRenderer'
import { useMemo } from 'react'

const Home: React.FC = () => {
  const { user, isLoggedIn } = useAuthContext()

  const { loading, data } = useQuery<
    GetEventsByUserQuery,
    GetEventsByUserQueryVariables
  >(GetEventsByUserDocument, {
    variables: {
      userId: user.data?.id,
    },
    skip: !user.data?.id,
  })

  const isEmpty = useMemo(() => data?.events.length === 0, [data?.events])

  return (
    <Flex direction="column" gap={16}>
      <DataRenderer
        isLoading={loading}
        isEmpty={isEmpty}
        emptyText="Nenhum evento encontrado"
      >
        <Title>Meus eventos</Title>
        <Text size="sm" color="dimmed">
          Olá, {user.data?.name}, estes são os eventos para os quais você foi
          convidado.
        </Text>
        <Grid>
          {data?.events?.map((event, index) => (
            <Grid.Col key={index} xs={6} sm={4} md={4} lg={4}>
              <EventCard key={index} event={event} />
            </Grid.Col>
          ))}
        </Grid>
      </DataRenderer>
    </Flex>
  )
}

export default Home
