import React from 'react'

export const SearchBar = ({
  onChange,
  results,
  handleSelection,
  value
}: {
  onChange: any
  results: any[]
  handleSelection: any
  value: string
}) => {
  return (
    <form className="max-w-sm px-4">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          onChange={onChange}
          value={value}
        />
        {results && (
          <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
            {results.map((item, index) => {
              return (
                <div
                  key={index}
                  onMouseDown={() => handleSelection(index)}
                  style={{
                    color: 'black'
                    // backgroundColor: index === true ? 'rgba(0,0,0,0.1)' : ''
                  }}
                  className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2">
                  {/* {renderItem(item)} */}
                  {item.username}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </form>
  )
}
