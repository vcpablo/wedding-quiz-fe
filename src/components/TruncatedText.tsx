import { Anchor, Box, Text, TextProps } from '@mantine/core'

const ComponentsMap = {
  Box,
  Text,
  Anchor,
}

type TruncatedTextProps = {
  id?: string
  as?: 'Text' | 'Anchor' | 'Box'
  onClick?: () => void
}

const TruncatedText: React.FC<TextProps & TruncatedTextProps> = ({
  id = '',
  as = 'Text',
  onClick,
  children,
  ...props
}) => {
  const Component = ComponentsMap[as]

  return (
    <Component
      {...props}
      id={id}
      style={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        lineHeight: 1.5,
      }}
      onClick={() => {
        if (!onClick) return
        onClick()
      }}
    >
      {children}
    </Component>
  )
}

export default TruncatedText
