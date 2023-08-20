'use client'

import { PropsWithChildren } from 'react'
import LoadingOverlay from './LoadingOverlay'
import EmptyState from './EmptyState'

type DataRendererProps = {
  isLoading?: boolean
  isEmpty: boolean
  emptyText?: string
}

const DataRenderer: React.FC<DataRendererProps & PropsWithChildren> = ({
  isLoading,
  isEmpty,
  emptyText = 'Nenhum registro encontrado',
  children,
}) => {
  return (
    <LoadingOverlay visible={!!isLoading}>
      {isEmpty ? <EmptyState text={emptyText} /> : <>{children}</>}
    </LoadingOverlay>
  )
}

export default DataRenderer
