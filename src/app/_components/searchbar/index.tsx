'use client'

import { useQueryString } from "@/app/_hooks/useQueryString";
import {  useState } from "react";

export const SearchBar = () => {
    const [search, setSearch] = useState('')
    const {onChangeQuery} = useQueryString();

      const onSearch = (event: any) => {
        setSearch(event.target.value)
      }

      const onSubmit = (event: any) => {
        event.preventDefault();
        onChangeQuery("q", search)
      }

    return (
        <form onSubmit={onSubmit}>
            <input value={search} onChange={onSearch} type="text" placeholder="Search books" className="input input-bordered w-full max-w-xs" />
        </form>
    )
}