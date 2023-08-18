import { SearchEventGuestsByNameDocument } from '@/lib/wedding/graphql'
import { gqlClient } from '@/lib/service/gqlClient'

const searchEventGuestsByName = async ({
  search,
  eventId,
}: {
  search: string
  eventId: number
}): Promise<any[]> => {
  const { search_guests_by_name } = await gqlClient.request(
    SearchEventGuestsByNameDocument,
    {
      args: {
        search: `%${search}%`,
        event_id: eventId,
      },
    }
  )

  return search_guests_by_name
}

export { searchEventGuestsByName }
