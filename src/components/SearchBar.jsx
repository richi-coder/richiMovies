'use client'
import { useState } from "react";

function getPlaceHolder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('WRITE HERE!')
        }, 5000)
    })
}

async function SearchBar() {
    const [search, setSearch] = useState('')
    const placeholder = await getPlaceHolder()


    function onSubmit(e) {
        alert(search);
    }
    function onChange(e) {
        setSearch(e.target.value)
    }

  return (
    <div className=" fixed left-0 top-0 flex flex-row items-center w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 px-10">
        <p className="">
            Search&nbsp;
        </p>
        <form onSubmit={e => onSubmit(e)}>
            <input
                placeholder={placeholder}
                value={search}
                onChange={e => onChange(e)}
                type="text"
                className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" />
            <button
                className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                type="submit">
                    Go!
            </button>
        </form>
    </div>
  )
}

export default SearchBar