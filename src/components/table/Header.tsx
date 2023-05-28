import { User } from '@/config/columns'
import { HeaderGroup, flexRender } from '@tanstack/react-table'
import React from 'react'

export const Header = ({ headerGroups }: { headerGroups: HeaderGroup<User>[] }) => {
  return (
    <div>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </div>
  )
}
