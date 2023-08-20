'use client'

import { useState, createContext, useContext, useEffect, useMemo } from 'react'
import magicClient from '@/lib/magic/client'
import { usePathname } from 'next/navigation'

import { me } from '@/services'
import { useAppContext } from './AppProvider'
import { UserRoles, UserState } from '@/types'

import LoadingOverlay from '@/components/LoadingOverlay'

interface AuthContextValue {
  token: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
  user: UserState
  setUser: React.Dispatch<React.SetStateAction<any>>
  isLoggedIn: boolean
  isAdmin: boolean
  logout: () => void
  magicLogout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<UserState>({
    loading: true,
  })
  const pathname = usePathname()
  const { navigate, setIsLoading, setError } = useAppContext()

  const checkAuthentication = async (pathname: string) => {
    try {
      setIsLoading(true)
      setUser((state) => ({
        ...state,
        loading: true,
      }))

      const data = await me()

      setUser((state: UserState) => ({
        ...state,
        data,
      }))

      if (pathname === '/login') {
        navigate('/')
      }
    } catch (error: any) {
      console.error(error)

      if (error.code === 'ERR_NETWORK') {
        setError('Conexão de internet não disponível no momento')
      } else if (error?.response?.status === 401) {
        navigate(`/login?returnUrl=${pathname}`)
      }
    } finally {
      setUser((state) => ({
        ...state,
        loading: false,
      }))
    }
  }

  const logout = async () => {
    setIsLoading(true)

    if (window) {
      window.localStorage.removeItem('wedding-quiz-token')
    }

    navigate('/login')
    setUser((state) => ({
      ...state,
      data: null,
    }))
  }

  const magicLogout = async () => {
    setUser((state) => ({
      ...state,
      data: null,
    }))

    if (window) {
      window.localStorage.removeItem('wedding-quiz-token')
    }

    if (await magicClient.user.isLoggedIn()) {
      await magicClient.user.logout()
    }
    navigate('/login')
  }

  useEffect(() => {
    checkAuthentication(pathname)
  }, [pathname])

  useEffect(() => {
    setIsLoggedIn(!!user.data)
  }, [user.data])

  const isAdmin = useMemo(() => user.data?.role === UserRoles.Admin, [user])

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        isLoggedIn,
        isAdmin,
        logout,
        magicLogout,
      }}
    >
      <LoadingOverlay visible={user.loading}>{children}</LoadingOverlay>
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const Context = useContext(AuthContext)

  if (Context === undefined) {
    throw new Error('useAuthContext must be inside an AuthProvider')
  }

  return Context
}
