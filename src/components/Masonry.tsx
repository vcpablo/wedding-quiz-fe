import React, { useRef, useEffect, MutableRefObject, useMemo } from 'react'
import { Box, createStyles } from '@mantine/core'
import Macy from 'macy'

export const useMasonry = (
  containerRef: MutableRefObject<any>,
  childCount: number
) => {
  const macyRef = useRef() as MutableRefObject<{
    remove: () => void
    reInit: () => void
  }>

  const options = useMemo(
    () => ({
      columns: 4,
      margin: 20,
      breakAt: {
        1200: 3,
        820: 2,
        768: 1,
      },
    }),
    []
  )

  useEffect(() => {
    const macyOptions = {
      container: containerRef.current,
      ...options,
    }

    macyRef.current = Macy(macyOptions)

    return () => {
      macyRef?.current
    }
  }, [options, containerRef])

  useEffect(() => {
    macyRef.current.reInit()
  }, [childCount])

  return { macy: macyRef.current }
}

interface MasonryProps {
  children: React.ReactNode
  className?: string
}

const AppStyles = createStyles((theme, {}) => ({
  root: {
    textAlign: 'center',
    background: theme.colors.gray[4],
    boxSizing: 'border-box',
    padding: 20,
  },
  item: {
    minWidth: 100,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .3s ease-out',
  },
  container: {
    width: '100%',
    position: 'relative',
  },
}))

export const Masonry = ({ children }: MasonryProps) => {
  const containerRef = useRef()
  const childCount = React.Children.count(children)
  const { macy } = useMasonry(containerRef, childCount)

  const { classes } = AppStyles({}, { name: 'App' })

  return (
    <Box ref={containerRef} className={classes.container}>
      {children}
    </Box>
  )
}
