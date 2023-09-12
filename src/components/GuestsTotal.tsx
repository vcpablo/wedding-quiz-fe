import { Guests } from '@/lib/wedding/graphql'
import { Flex, Paper, Text } from '@mantine/core'
import { IconList, IconSearch, IconUser } from '@tabler/icons-react'
import { useMemo } from 'react'

type GuestsTotalProps = {
  guests: any[]
  filteredGuests: any[]
}

const GuestsTotal: React.FC<GuestsTotalProps> = ({
  guests,
  filteredGuests,
}) => {
  const loggedInGuests = useMemo(
    () => guests.filter((guest: Guests) => Boolean(guest.user)),
    [guests]
  )

  return (
    <Flex gap={30} align="center" justify="center">
      <Flex gap={10} align="center" justify="center">
        <Flex justify="space-between" align="center" gap={10}>
          <IconList size="1rem" /> {guests.length}
        </Flex>
        /
        <Flex justify="space-between" align="center" gap={10}>
          <IconUser size="1rem" /> {loggedInGuests.length}
        </Flex>
      </Flex>

      <Flex justify="space-between" align="center" gap={10}>
        <IconSearch size="1rem" /> {filteredGuests.length}
      </Flex>
    </Flex>
  )
}

export default GuestsTotal
