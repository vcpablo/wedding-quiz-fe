'use client'

import { LoadingOverlay as LoadingOverlayUI } from '@mantine/core'

interface LoadingOverlayProps {
  visible: boolean
  children: React.ReactElement
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  visible,
  children,
}) => (
  <>
    <LoadingOverlayUI
      visible={visible}
      overlayBlur={2}
      loaderProps={{ variant: 'dots' }}
    />
    {children}
  </>
)

export default LoadingOverlay
