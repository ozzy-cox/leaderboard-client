'use client'
import { createContext } from 'react'
import { Body } from './body/Body'
import { Header } from './header/Header'
import { TableInstance, useTable } from './hooks/useTable'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const TableInstanceContext = createContext<TableInstance>({} as TableInstance)

export const Table = ({ data }: { data: any }) => {
  const table = useTable({ data })

  const { core, resetOrder, toggleGroupByCountry } = table

  return (
    <DndProvider backend={HTML5Backend}>
      <TableInstanceContext.Provider value={table}>
        <button onClick={() => resetOrder()} className="border p-1">
          Reset Order
        </button>
        <button onClick={() => toggleGroupByCountry()} className="border p-1">
          Group By Country
        </button>
        <table
          className="w-3/4 mx-auto border-spacing-50 border-collapse 
         border border-slate-700 bg-slate-700"
          style={{
            borderSpacing: `15px`,
            borderCollapse: 'collapse'
          }}>
          <Header headerGroups={core.getHeaderGroups()} />
          <Body rows={core.getRowModel().rows} />
        </table>
      </TableInstanceContext.Provider>
    </DndProvider>
  )
}
