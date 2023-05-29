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
    id: 'ranking',
    cell: (props) => props.row.index + 1
  }),
  columnHelper.accessor('username', {
    id: 'username'
  }),
  columnHelper.accessor('country', {
    id: 'country'
  }),
  columnHelper.accessor('money', { id: 'money' })
]
