'use client'

import { Flex, Loader } from '@mantine/core'

const Loading: React.FC = () => (
  <Flex w="100%" h="100%" justify="center" align="center" gap="10px">
    <Loader /> Aguarde...
  </Flex>
)

export default Loading
