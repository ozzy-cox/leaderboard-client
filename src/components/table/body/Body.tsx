import { User } from '@/config/columns'
import { Row as TRow, flexRender } from '@tanstack/react-table'
import React from 'react'
import { Row } from './Row'

export const Body = ({ rows }: { rows: TRow<User>[] }) => {
  return (
    <tbody>
      {rows.map((row, idx) => (
        <Row key={row.id} row={row}></Row>
      ))}
    </tbody>
  )
}
