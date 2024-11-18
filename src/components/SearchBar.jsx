import React from 'react'
import { IoSearch } from "react-icons/io5"
const SearchBar = ({ onChange, value }) => {
  return (
    <div className="w-1/3 m-auto  h-[40px] border rounded-[50px] relative">
      <input type="text" placeholder="Search Products..." onChange={onChange} value={value} className="w-full h-full px-3 py-2 outline-none border-none text-xs rounded-[50px]" />
      <div className="absolute top-0 right-0 w-12 h-10 flex justify-center items-center text-xl text-gray-400">
        <IoSearch />
      </div>
    </div>
  )
}

export default SearchBar