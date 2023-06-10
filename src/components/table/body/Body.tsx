import { User } from '@/config/columns'
import { Row as TRow, flexRender } from '@tanstack/react-table'
import React, { CSSProperties } from 'react'
import { Row } from './Row'

export const Body = ({
  rows,
  highlightedRowId
}: {
  rows: TRow<User>[]
  highlightedRowId?: string
}) => {
  return (
    <tbody>
      {rows.map((row, idx) => {
        if (row.original.id === highlightedRowId) {
          return (
            <Row
              key={row.id}
              row={row}
              style={{
                border: '10px solid purple'
              }}></Row>
          )
        }
        return <Row key={row.id} row={row}></Row>
      })}
    </tbody>
  )
}
