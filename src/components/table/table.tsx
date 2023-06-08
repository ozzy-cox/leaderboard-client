'use client'
import { SetStateAction, createContext, useEffect, useState } from 'react'
import { Body } from './body/Body'
import { Header } from './header/Header'
import { TableInstance, useTable } from './hooks/useTable'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SearchBar } from './search/SearchBar'
import { getUserPlacing, searchUsers } from '@/app/leaderboard/getLeaderboard'
import { useQuery } from '@tanstack/react-query'
import { Results } from './search/Results'

export const TableInstanceContext = createContext<TableInstance>({} as TableInstance)

export const Table = ({ data }: { data: any }) => {
  const [query, setQuery] = useState('')
  const [selectedUserId, setSelectedUserId] = useState('')

  const { data: usersResult, isLoading } = useQuery({
    queryKey: ['search-users', query],
    queryFn: () => searchUsers(query)
  })

  const { data: userPlacing, refetch } = useQuery({
    queryKey: ['user-placing', selectedUserId],
    queryFn: () => getUserPlacing(selectedUserId),
    enabled: selectedUserId !== ''
  })

  const table = useTable({ data })
  console.log(data)
  console.log(userPlacing?.range)

  const userPlacingTable = useTable({ data: userPlacing?.range || [] })
  useEffect(() => {
    console.log(userPlacingTable.core.getRowModel().rows)
  }, [userPlacing])

  // console.log(userPlacingTable.core.getRowModel().rows)
  const { core, resetOrder, toggleGroupByCountry } = table

  const handleSelection = (val: any) => {
    // TODO Select user and run the leaderboard query again
    setQuery(usersResult[val].username)
    setSelectedUserId(usersResult[val].id)
    refetch()
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <TableInstanceContext.Provider value={table}>
        <button onClick={() => resetOrder()} className="border p-1 m-2">
          Reset Order
        </button>
        <button onClick={() => toggleGroupByCountry()} className="border p-1 m-2">
          Group By Country
        </button>
        <SearchBar
          value={query}
          onChange={(event: { target: { value: SetStateAction<string> } }) => {
            setQuery(event.target.value)
          }}
          results={usersResult}
          handleSelection={handleSelection}
        />
        <table
          className="w-3/4 mx-auto border-spacing-50 border-collapse 
         border border-slate-700 bg-slate-700"
          style={{
            borderSpacing: `15px`,
            borderCollapse: 'collapse'
          }}>
          <Header headerGroups={core.getHeaderGroups()} />
          <Body rows={core.getRowModel().rows} />
          {userPlacing && <Body rows={userPlacingTable.core.getRowModel().rows}></Body>}
        </table>
        <table>
          {selectedUserId}
          <Results results={userPlacing?.range || []} />
        </table>
      </TableInstanceContext.Provider>
    </DndProvider>
  )
}
