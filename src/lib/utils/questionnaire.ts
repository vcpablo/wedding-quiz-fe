import { Answer, Question } from '@/types'

export const reduceAnswers = (questions: Question[]): Answer[] =>
  questions.reduce(
    (acc: any[], question: Question) => [
      ...acc,
      ...question.answers.map((answer) => answer),
    ],
    []
  )
