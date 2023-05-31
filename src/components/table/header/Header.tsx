import { User } from '@/config/columns'
import { HeaderGroup, flexRender } from '@tanstack/react-table'
import React, { useContext } from 'react'
import { DraggableColumnHeader } from './HeaderCell'
import { TableInstanceContext } from '../table'

export const Header = ({ headerGroups }: { headerGroups: HeaderGroup<User>[] }) => {
  const table = useContext(TableInstanceContext)
  return (
    <thead
      style={{
        textAlign: 'left'
      }}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <DraggableColumnHeader key={header.id} header={header} table={table} />
          ))}
        </tr>
      ))}
    </thead>
  )
}
