'use client'
import * as React from 'react'
import Appbar from '../../components/appBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <Appbar />
        {children}
      </div>
    </QueryClientProvider>
  )
}
