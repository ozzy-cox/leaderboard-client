import { User } from '@/config/columns'
import { Row as TRow, flexRender } from '@tanstack/react-table'
import React, { CSSProperties } from 'react'
import { Row } from './Row'

export const Body = ({ rows, style }: { rows: TRow<User>[]; style?: CSSProperties }) => {
  return (
    <tbody style={style}>
      {rows.map((row, idx) => (
        <Row key={row.id} row={row}></Row>
      ))}
    </tbody>
  )
}
