'use client'
import { Table } from '@/components/table/table'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getLeaderboard } from './getLeaderboard'

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: getLeaderboard
  })

  return isLoading ? <div>Loading</div> : <Table data={data} />
}
