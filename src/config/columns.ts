import { createColumnHelper } from '@tanstack/react-table'

export type User = {
  money: number
  country: string
  username: string
  ranking: number
}

const columnHelper = createColumnHelper<User>()

export const columns = [
  columnHelper.accessor('ranking', {
    cell: (props) => props.row.index + 1
  }),
  columnHelper.accessor('username', {}),
  columnHelper.accessor('country', {}),
  columnHelper.accessor('money', {})
]
