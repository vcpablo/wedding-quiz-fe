'use client'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
dayjs.locale('pt-br')
import './globals.scss'

import { Inter } from 'next/font/google'
import RootStyleRegistry from './emotion'
import { GraphQLProvider } from '@/lib/apollo/graphqlProvider'
import { AuthProvider } from '@/providers/AuthProvider'
import { EventProvider } from '@/providers/EventProvider'
import { QuestionnaireProvider } from '@/providers/QuestionnaireProvider'
import { AppProvider } from '@/providers/AppProvider'
import { withUrqlClient } from 'next-urql'

import { cacheExchange, fetchExchange } from 'urql'

import AppShell from '@/components/AppShell'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html lang="en">
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <body className={inter.className}>
        <AppProvider>
          <AuthProvider>
            <GraphQLProvider>
              <EventProvider>
                <QuestionnaireProvider>
                  <RootStyleRegistry>
                    <AppShell>{children}</AppShell>
                  </RootStyleRegistry>
                </QuestionnaireProvider>
              </EventProvider>
            </GraphQLProvider>
          </AuthProvider>
        </AppProvider>
      </body>
    </html>
  )
}

export default withUrqlClient(() => ({
  url: String(process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL),
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      'X-Hasura-Admin-Secret': String(process.env.NEXT_PUBLIC_API_SECRET),
    },
  },
}))(RootLayout)
