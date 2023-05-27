'use client'
import { API_HOST } from '@/config/appConfig'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const Table = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: (): Promise<any> =>
      fetch(`${API_HOST}/leaderboard`).then((res) => console.log(res.json()))
  })

  return (
    <div>
      <div>{data}</div>
      <div>Row 1</div>
      <div>Row 2</div>
      <div>Row 3</div>
      <div>Row 4</div>
    </div>
  )
}
