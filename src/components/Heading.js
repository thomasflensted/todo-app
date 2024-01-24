import React, { useState, useRef, useEffect } from 'react'
import { CiEdit } from "react-icons/ci";

const Heading = ({ currentTab, setData, data }) => {

    const [isHovering, setIsHovering] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(data[currentTab].name);

    const handleChange = (val) => {
        setInputValue(val);
    }

    const handleBlur = (id) => {
        setIsEditing(false);
        const val = inputValue ? inputValue : "My list";
        const updatedData = data.map(list =>
            list.id === id ? { ...list, name: val } : list
        )
        setData(updatedData);
    }

    const handlekeyDown = (e) => {
        if (e.key === "Enter") handleBlur(data[currentTab].id);
    }

    const handleClick = () => {
        setIsEditing(true)
        setInputValue(data[currentTab].name);
    }

    const ref = useRef();
    useEffect(() => {
        if (isEditing) ref.current.focus();
    }, [isEditing])

    return (
        <header>
            <div className="heading" onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                {!isEditing
                    ? <h1 className="todo-heading">{data[currentTab].name}</h1>
                    : <input
                        ref={ref}
                        className="todo-heading heading-input"
                        type="text"
                        onChange={(e) => handleChange(e.target.value)}
                        onKeyDown={(e) => handlekeyDown(e)}
                        onBlur={() => handleBlur(data[currentTab].id)}
                        value={inputValue}></input>
                }
                {isHovering && <CiEdit className='editing-icon' onClick={handleClick} />}
            </div>
        </header>
    )
}

export default Heading