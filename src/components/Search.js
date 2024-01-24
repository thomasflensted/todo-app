import React from 'react'

const Search = ({ setSearch }) => {

    return (
        <search className="fw">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    id='todo-search'
                    className='todo-search'
                    type='text'
                    placeholder="Search" />
                <label className="item-label" htmlFor="todo-search">Search todo list</label>
            </form>
        </search>
    )
}

export default Search