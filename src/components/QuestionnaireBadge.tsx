import { getQuestionnaireBadgeColor } from '@/helpers/questionnaire'
import { QuestionnaireStatus } from '@/types'
import { Badge } from '@mantine/core'

type QuestionnaireBadgeProps = {
  status: QuestionnaireStatus
}

const QuestionnaireBadge: React.FC<QuestionnaireBadgeProps> = ({ status }) => {
  const color = getQuestionnaireBadgeColor(status)

  return (
    <Badge color={color} variant="light" pos="absolute" top={10} right={10}>
      <>{status}</>
    </Badge>
  )
}

export default QuestionnaireBadge
