import * as React from 'react'
import Appbar from '../../components/appBar'
import { Hydrate, QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query'
import getQueryClient from '../getQueryClient'
import { getLeaderboard } from './getLeaderboard'

export default async function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['leaderboard'], getLeaderboard)
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="container mx-auto">
      <Appbar />
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </div>
  )
}
