import { User } from '@/config/columns'
import { Column, Header, flexRender } from '@tanstack/react-table'
import { FC } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { TableInstance } from '../hooks/useTable'

export const DraggableColumnHeader: FC<{
  header: Header<User, unknown>
  table: TableInstance
}> = ({ header, table }) => {
  const {
    core: { getState, setColumnOrder },
    reorderColumn
  } = table
  const { columnOrder } = getState()
  const { column } = header

  const [, dropRef] = useDrop({
    accept: 'column',
    drop: (draggedColumn: Column<User>) => {
      const newColumnOrder = reorderColumn(draggedColumn.id, column.id, columnOrder)
      setColumnOrder(newColumnOrder)
    }
  })

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    item: () => column,
    type: 'column'
  })

  return (
    <th
      className="hover:bg-sky-700"
      ref={dropRef}
      colSpan={header.colSpan}
      style={{ opacity: isDragging ? 0.5 : 1, padding: 20 }}>
      <div ref={previewRef}>
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
        <button ref={dragRef}>🟰</button>
      </div>
    </th>
  )
}
