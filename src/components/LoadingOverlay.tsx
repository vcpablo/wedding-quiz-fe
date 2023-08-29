'use client'

import { Flex, Loader } from '@mantine/core'
import { useMemo } from 'react'

interface LoadingOverlayProps {
  visible: boolean
  children: React.ReactElement
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  visible,
  children,
}) => {
  return (
    <>
      {visible && (
        <Flex
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: ' blur(0.125rem)',
            zIndex: 1,
            display: 'flex',
            width: '100vw',
            height: '100dvh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader variant="dots" />
        </Flex>
      )}
      {children}
    </>
  )
}

export default LoadingOverlay
