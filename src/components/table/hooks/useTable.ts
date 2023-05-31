import { User, columns as defaultColumns } from '@/config/columns'
import {
  ColumnOrderState,
  GroupingState,
  Table,
  getCoreRowModel,
  getExpandedRowModel,
  getGroupedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'

export type TableInstance = {
  core: Table<User>
  reorderColumn: (
    draggedColumnId: string,
    targetColumnId: string,
    columnOrder: string[]
  ) => ColumnOrderState
  resetOrder: () => void
  toggleGroupByCountry: () => void
}

export const useTable = ({ data }: { data: any[] }): TableInstance => {
  const [columns] = useState(() => [...defaultColumns])
  const [grouping, setGrouping] = useState<GroupingState>([])

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    columns.map((column) => column.id as string) //must start out with populated columnOrder so we can splice
  )
  const resetOrder = () => setColumnOrder(columns.map((column) => column.id as string))

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnOrder,
      grouping
    },
    onGroupingChange: setGrouping,
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
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

  const toggleGroupByCountry = () => {
    if (grouping.includes('country')) {
      setGrouping([])
    } else {
      setGrouping(['country'])
    }
  }

  return { core: table, reorderColumn, resetOrder, toggleGroupByCountry }
}
