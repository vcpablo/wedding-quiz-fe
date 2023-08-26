export interface BaseTimestamps {
  created_at?: Date
}

export interface Guest extends BaseTimestamps {
  id: number
  name: string
  email?: string
  phone?: string
  logged_at?: Date
}

export enum EventType {
  Wedding = 'WEDDING',
}

export enum QuestionType {
  MultipleChoice = 'multiple_choice',
}

export interface Option extends BaseTimestamps {
  id: number
  title: string
}

export interface Answer extends BaseTimestamps {
  user_id: number
  option_id?: number | null | undefined
  updated_at: any
  question_id: number
}

export interface Question extends BaseTimestamps {
  id: number
  title: string
  type: string
  hint?: string | null | undefined
  image?: string | null | undefined
  options: {
    id: number
    title: string
  }[]
  answers: Answer[]
}

export interface Questionnaire extends BaseTimestamps {
  id: number
  title?: string | null
  description?: string | null
  image: string
  questions: Question[]
  prizes: Prize[]
  event_id: number
}

export interface Prize extends BaseTimestamps {
  id: number
  name: string
  image?: string | null
  ranking: number
  questionnaire_id: number
}

export interface Event extends BaseTimestamps {
  id: number
  name: string
  image: string
  location: string
  type: EventType
  datetime: Date
  guests: Partial<Guest>[]
  questionnaires: Questionnaire[]
}

export enum QuestionnaireStatus {
  NotStarted = 'Não iniciado',
  InProgress = 'Em andamento',
  Completed = 'Concluído',
}

export interface User extends BaseTimestamps {
  id: number
  name: string
  email: string
  phone: string
  role: UserRoles
}

export enum CredentialsTypes {
  Phone = 'phone',
  Email = 'email',
  Name = 'name',
}

export type CredentialsState = {
  type?: CredentialsTypes
  value: string
}

export type ServiceMagicLoginParams = {
  didToken: string
  credentials: CredentialsState
}

export type UserState = { loading: boolean; data?: any }

export enum UserRoles {
  Admin = 'admin',
  Guest = 'guest',
}

export type QuestionnaireProgress = {
  totalQuestions: number
  totalAnswers: number
  progress: number
}
