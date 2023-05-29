'use client'
import { createContext } from 'react'
import { Body } from './Body'
import { Header } from './header/Header'
import { TableInstance, useTable } from './hooks/useTable'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const TableInstanceContext = createContext<TableInstance>({} as TableInstance)

export const Table = ({ data }: { data: any }) => {
  const table = useTable({ data })

  const { core, resetOrder } = table

  return (
    <DndProvider backend={HTML5Backend}>
      <TableInstanceContext.Provider value={table}>
        <button onClick={() => resetOrder()} className="border p-1">
          Reset Order
        </button>

        <pre>{JSON.stringify(table.core.getState().columnOrder, null, 2)}</pre>
        <table className="table-auto">
          <Header headerGroups={core.getHeaderGroups()} />
          <Body rows={core.getRowModel().rows} />
        </table>
      </TableInstanceContext.Provider>
    </DndProvider>
  )
}
