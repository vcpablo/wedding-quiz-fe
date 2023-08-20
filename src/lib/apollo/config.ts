'use client'

export const config = {
  // https://studio.apollographql.com/public/spacex-l4uc6p/
  uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
  headers: {
    'X-Hasura-Admin-Secret': String(process.env.NEXT_PUBLIC_API_SECRET),
  },
}
