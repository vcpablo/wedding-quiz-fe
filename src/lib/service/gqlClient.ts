import { GraphQLClient } from 'graphql-request'

export const gqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!,
  {
    headers: {
      'X-Hasura-Admin-Secret': String(process.env.NEXT_PUBLIC_API_SECRET!),
    },
    fetch,
  }
)
