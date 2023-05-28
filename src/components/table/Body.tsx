import { User } from '@/config/columns'
import { Row, flexRender } from '@tanstack/react-table'
import React from 'react'

export const Body = ({ rows }: { rows: Row<User>[] }) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
