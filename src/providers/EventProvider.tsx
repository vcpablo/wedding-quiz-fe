'use client'

import { useParams } from 'next/navigation'
import { useState, createContext, useContext, useEffect, Dispatch } from 'react'
import {
  GetEventDocument,
  GetEventQuery,
  GetEventQueryVariables,
} from '@/lib/wedding/graphql'
import { ApolloError, useQuery } from '@apollo/client'
import { useAppContext } from './AppProvider'

interface EventContextValue {
  loading: boolean
  event?: any | null
  setEvent: Dispatch<any>
  error?: ApolloError
}

const EventContext = createContext<EventContextValue | undefined>(undefined)

export const EventProvider = ({ children }: any) => {
  const [event, setEvent] = useState<any | null>(null)
  const params = useParams()
  const { setIsLoading } = useAppContext()

  const { eventId } = params

  const { loading, data, error, refetch } = useQuery<
    GetEventQuery,
    GetEventQueryVariables
  >(GetEventDocument, {
    variables: {
      id: Number(eventId),
    },
    skip: !eventId || !!event,
  })

  useEffect(() => {
    // const refetchEvent = async () => {
    //   console.log({ eventId })
    //   if (eventId) {
    //     await
    //   }
    // }

    if (eventId) {
      refetch().then(({ data }) => {
        setEvent(data?.events_by_pk)
      })
    } else {
      setEvent(null)
    }

    // refetchEvent()
  }, [eventId])

  useEffect(() => setIsLoading(loading), [loading])

  // useEffect(() => {
  //   console.log('set event')
  //   if (data?.events_by_pk) {
  //     setEvent(data?.events_by_pk)
  //   }
  // }, [data])

  return (
    <EventContext.Provider value={{ loading, event, error, setEvent }}>
      {children}
    </EventContext.Provider>
  )
}

export const useEventContext = () => {
  const Context = useContext(EventContext)

  if (Context === undefined) {
    throw new Error('useEventContext must be inside an EventProvider')
  }

  return Context
}
