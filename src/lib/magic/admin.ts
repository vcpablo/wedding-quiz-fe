'use client'

import { Magic } from '@magic-sdk/admin'

// initiating Magic instance for server-side methods
export const magic = new Magic(process.env.MAGIC_SECRET_KEY)
