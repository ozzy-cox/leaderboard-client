'use client'
import { Table } from '@/components/table/table'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: (): Promise<any> =>
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/leaderboard`).then((res) => res.data)
  })

  return isLoading ? <div>Loading</div> : <Table data={data} />
}
