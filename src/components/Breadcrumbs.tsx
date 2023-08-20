'use client'

import { useAppContext } from '@/providers/AppProvider'
import { Anchor, Flex, Text } from '@mantine/core'
import TruncatedText from './TruncatedText'
import { useEffect, useMemo } from 'react'
import { IconArrowLeft } from '@tabler/icons-react'

type BreadcrumbItem = {
  title?: string
  href?: string
  active?: boolean
}

type BreadcrumbsProps = {
  separator?: string
  items?: BreadcrumbItem[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items = [] }) => {
  const { navigate } = useAppContext()

  const handleClick = (breadcrumbItem: BreadcrumbItem) => {
    if (breadcrumbItem.active) return

    navigate(String(breadcrumbItem.href))
  }

  const firstItem = useMemo(() => items[0], [items])
  const lastItem = useMemo(() => items[items.length - 1], [items])

  return (
    <Flex align="center" gap={5}>
      <IconArrowLeft size="1rem" />
      <TruncatedText as="Anchor" onClick={() => handleClick(firstItem)}>
        {firstItem.title}
      </TruncatedText>
      <Anchor></Anchor>
      {items.length > 1 && (
        <>
          /
          {lastItem?.href ? (
            <TruncatedText as="Anchor" onClick={() => handleClick(lastItem)}>
              {lastItem.title}
            </TruncatedText>
          ) : (
            <TruncatedText>{lastItem.title}</TruncatedText>
          )}
        </>
      )}
    </Flex>
  )
}

export default Breadcrumbs
