'use client'

import { getRanking } from '@/helpers/questionnaire'
import { Questionnaire } from '@/lib/wedding/graphql'
import { Prize } from '@/types'
import { Badge, Card, Flex, Group, Image, Text } from '@mantine/core'
import { useMemo } from 'react'

type PrizeCardProps = {
  prize: Prize
  prizes: Prize[]
}

const PrizeCard: React.FC<PrizeCardProps> = ({ prize, prizes }) => {
  const ranking = useMemo(
    () => getRanking({ position: prize.ranking, prizes }),
    [prize.ranking, prizes]
  )

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {prize.image && (
        <Card.Section>
          <Image src={prize.image} height={160} alt="Norway" />
        </Card.Section>
      )}

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{prize.name}</Text>
      </Group>

      <Flex justify="space-between" align="center">
        <Text size="sm" color="dimmed">
          Prêmio para o {prize.ranking}º lugar
        </Text>
        {ranking && <Badge variant="light">{ranking}</Badge>}
      </Flex>
    </Card>
  )
}

export default PrizeCard
