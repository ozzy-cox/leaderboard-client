'use client'
import { Body } from './Body'
import { Header } from './Header'
import { useTable } from './hooks/useTable'

export const Table = ({ data }: { data: any }) => {
  const table = useTable({ data })

  return (
    <div>
      <Header headerGroups={table.getHeaderGroups()} />
      <Body rows={table.getRowModel().rows} />
    </div>
  )
}
