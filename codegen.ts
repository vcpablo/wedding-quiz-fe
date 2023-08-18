import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!]: {
        headers: {
          // If you have an admin secret set
          'x-hasura-admin-secret': process.env.NEXT_PUBLIC_API_SECRET!,
        },
      },
    },
  ],
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: 'number',
    },
  },
  documents: ['src/lib/schema.graphql'],
  generates: {
    'src/lib/wedding/': {
      preset: 'client',
      config: {},
      plugins: [],
    },
  },
}

export default config

// import { CodegenConfig } from '@graphql-codegen/cli'

// const config: CodegenConfig = {
//   schema: {
//     'https://welcomed-swan-33.hasura.app/v1/graphql': {
//       headers: {
//         'x-hasura-admin-secret':
//           '8riM6T17JlhBf433Z4Y10MeYGo0JoUTfYEoo36p2OkLW8f0dH2S1QODpRwMpw54C',
//       },
//     },
//   },
//   // schema: './schema.graphql',
// documents: ['src/**/*.graphql'],
//   generates: {
//     './src/graphql/_schema.generated.json': {
//       plugins: ['urql-introspection'],
//     },

//     './src/graphql/_types.generated.ts': {
//       plugins: ['typescript'],
//     },

//     './src/graphql/_api.generated.ts': {
//       preset: 'import-types',
//       presetConfig: { typesPath: './_types.generated' },
//       documents: ['src/graphql/**/*.graphql'],
//       plugins: ['typescript-operations', 'typescript-urql'],
//     },
//   },
// }

// export default config
