'use client'

import { Magic } from 'magic-sdk'

const magicClient = new Magic(
  String(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY),
  {
    locale: 'pt',
  }
)

export default magicClient
