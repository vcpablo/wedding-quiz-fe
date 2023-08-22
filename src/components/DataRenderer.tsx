'use client'

import { PropsWithChildren, useEffect } from 'react'
import EmptyState from './EmptyState'
import { LoadingOverlay } from '@mantine/core'
import { useAppContext } from '@/providers/AppProvider'

type DataRendererProps = {
  isLoading?: boolean
  isEmpty?: boolean
  emptyText?: string
}

const DataRenderer: React.FC<DataRendererProps & PropsWithChildren> = ({
  isLoading,
  isEmpty,
  emptyText = 'Nenhum registro encontrado',
  children,
}) => {
  const { setIsLoading } = useAppContext()

  useEffect(() => {
    setIsLoading(!!isLoading)
  }, [isLoading])

  return <>{isEmpty ? <EmptyState text={emptyText} /> : <>{children}</>}</>
}

export default DataRenderer
