import { User } from '@/config/columns'
import { Row, flexRender } from '@tanstack/react-table'
import React from 'react'

export const Body = ({ rows }: { rows: Row<User>[] }) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td className=" border-slate-600" key={cell.id}>
              {cell.getIsGrouped() ? (
                // If it's a grouped cell, add an expander and row count
                <>
                  <button
                    {...{
                      onClick: row.getToggleExpandedHandler(),
                      style: {
                        cursor: row.getCanExpand() ? 'pointer' : 'normal'
                      }
                    }}>
                    {row.getIsExpanded() ? '↖️' : '↘️'}{' '}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())} (
                    {row.subRows.length})
                  </button>
                </>
              ) : cell.getIsAggregated() ? (
                // If the cell is aggregated, use the Aggregated
                // renderer for cell
                flexRender(
                  cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
                  cell.getContext()
                )
              ) : cell.getIsPlaceholder() ? null : ( // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                flexRender(cell.column.columnDef.cell, cell.getContext())
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
