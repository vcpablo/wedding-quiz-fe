import { CredentialsState, ServiceMagicLoginParams, User } from '@/types'
import api from './api'

const login = (
  credentials: CredentialsState
): Promise<{ token: string; user: any }> =>
  api.post('/auth/login', { credentials })

const magicLogin = ({
  didToken,
  credentials,
}: ServiceMagicLoginParams): Promise<{ token: string; user: any }> =>
  api.post('/auth/magic-login', { didToken, credentials })

const magicLogout = (): Promise<void> => api.post('/auth/magic-logout')

const me = (): Promise<User> => api.get('/auth/me')

export { login, magicLogin, magicLogout, me }
