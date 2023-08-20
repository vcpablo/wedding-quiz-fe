'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import DataRenderer from '@/components/DataRenderer'
import PrizeCard from '@/components/PrizeCard'
import { useAppContext } from '@/providers/AppProvider'
import { useEventContext } from '@/providers/EventProvider'
import { useQuestionnaireContext } from '@/providers/QuestionnaireProvider'
import { Prize } from '@/types'
import { Button, Flex, Title } from '@mantine/core'
import { IconListNumbers } from '@tabler/icons-react'

interface QuestionnairePrizesProps {}

const QuestionnairePrizes: React.FC<QuestionnairePrizesProps> = () => {
  const { event } = useEventContext()
  const { questionnaire, hasPrizes } = useQuestionnaireContext()
  const { navigate } = useAppContext()

  const handleViewRanking = () =>
    navigate(`/${event?.id}/quizzes/${questionnaire?.id}/ranking`)

  const breadcrumbs = [
    {
      title: String(event?.name),
      href: `/${event?.id}/quizzes`,
    },
    {
      title: String(questionnaire?.title),
      active: true,
    },
  ]

  return (
    <Flex h="100%" direction="column" gap={16}>
      <Breadcrumbs items={breadcrumbs} />

      <Title>Prêmios</Title>

      <Flex h="100%" direction="column" justify="space-between">
        <DataRenderer isEmpty={!hasPrizes} emptyText="Nenhum prêmio encontrado">
          <Flex direction="column" gap={16}>
            {questionnaire?.prizes?.map((prize: Prize, index: number) => (
              <PrizeCard key={index} prize={prize} />
            ))}
          </Flex>
        </DataRenderer>
      </Flex>

      <Flex w="100%">
        {hasPrizes && (
          <Button
            fullWidth
            radius="md"
            leftIcon={<IconListNumbers size="1rem" />}
            onClick={handleViewRanking}
          >
            Ver ranking
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

export default QuestionnairePrizes
