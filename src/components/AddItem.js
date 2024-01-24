import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

const AddItem = ({ addNewItem }) => {


    const [newItem, setnewItem] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addNewItem(newItem);
        setnewItem("");
    }

    return (
        <div className="fw">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input id='todo-add' className='todo-search' value={newItem} type="text" placeholder="Add Item" onChange={(e) => setnewItem(e.target.value)} />
                <label className="item-label" htmlFor="todo-search">Add Item</label>
            </form>
            <button htmlFor="todo-add" className="btn" type="submit" onClick={(e) => handleSubmit(e)}>
                <FaPlus />
            </button>
        </div>
    )
}

export default AddItem