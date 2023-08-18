import { Title as TitleUI } from '@mantine/core'

interface TitleProps {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleUI order={1}>{text}</TitleUI>
}

export default Title
