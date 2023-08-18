import {
  // GetEventGuestQuestionnaireAnswersDocument,
  GetEventQuestionnairesDocument,
} from '@/lib/wedding/graphql'
import { gqlClient } from '@/lib/service/gqlClient'

const getEventQuestionnaires = async (eventId: number) => {
  const { questionnaire } = await gqlClient.request(
    GetEventQuestionnairesDocument,
    {
      eventId,
    }
  )

  return questionnaire
}

// const getEventGuestQuestionnaireAnswers = async ({
//   eventId,
//   guestId,
// }: {
//   eventId: number
//   guestId: number
// }) => {
//   const { questionnaire } = await gqlClient.request(
//     GetEventGuestQuestionnaireAnswersDocument,
//     {
//       eventId,
//       guestId,
//     }
//   )

//   return questionnaire
// }

export { getEventQuestionnaires }
