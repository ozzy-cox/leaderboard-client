import { columns } from '@/config/columns'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'

export const useTable = ({ data }: { data: any[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return { ...table }
}
