import { User } from '@/config/columns'
import React from 'react'

export const Results = ({ results = [] }: { results: User[] }) => {
  return (
    <>
      {results.map((result) => (
        <div key={result.id}>{JSON.stringify(result)}</div>
      ))}
    </>
  )
}
