'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, createContext, useContext, useEffect } from 'react'

interface AppContextValue {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  navigate: (route: string) => void
  error: string
  setError: (error: string) => void
  notification: string
  setNotification: (error: string) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export const AppProvider = ({ children }: any) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, _setError] = useState<string>('')
  const [notification, _setNotification] = useState<string>('')

  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  useEffect(() => {
    const body = document.querySelector('body')
    if (!body) return

    body.style.overflow = isLoading ? 'hidden' : 'initial'
  }, [isLoading])

  const navigate = (route: string) => {
    const queryString =
      Array.from(searchParams).length > 0 ? `?${searchParams.toString()}` : ''
    const url = `${pathname}${queryString}`

    setIsLoading(route !== url)
    router.push(route)
  }

  const setNotification = (notification: string) => {
    _setNotification(notification)
    setTimeout(() => _setNotification(''), 3000)
  }

  const setError = (error: string) => {
    _setError(error)
    setTimeout(() => _setError(''), 3000)
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        notification,
        setNotification,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const Context = useContext(AppContext)

  if (Context === undefined) {
    throw new Error('useAppContext must be inside an AppProvider')
  }

  return Context
}
