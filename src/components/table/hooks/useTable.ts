import { User, columns as defaultColumns } from '@/config/columns'
import { ColumnOrderState, Table, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'

export type TableInstance = {
  core: Table<User>
  reorderColumn: (
    draggedColumnId: string,
    targetColumnId: string,
    columnOrder: string[]
  ) => ColumnOrderState
  resetOrder: () => void
}

export const useTable = ({ data }: { data: any[] }): TableInstance => {
  const [columns] = useState(() => [...defaultColumns])

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    columns.map((column) => column.id as string) //must start out with populated columnOrder so we can splice
  )
  const resetOrder = () => setColumnOrder(columns.map((column) => column.id as string))

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnOrder
    },
    onColumnOrderChange: setColumnOrder
  })

  const reorderColumn = (
    draggedColumnId: string,
    targetColumnId: string,
    columnOrder: string[]
  ): ColumnOrderState => {
    columnOrder.splice(
      columnOrder.indexOf(targetColumnId),
      0,
      columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0] as string
    )
    return [...columnOrder]
  }

  return { core: table, reorderColumn, resetOrder }
}
