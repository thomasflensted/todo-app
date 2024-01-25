import React from 'react'
import { FaPlus } from "react-icons/fa";
import Tab from './Tab';

const NavBar = ({ data, currentTab, setCurrentTab, setData }) => {

    const createNewTab = () => {
        const nextId = data.length + 1;
        const newList = {
            name: "My List",
            id: nextId,
            items: []
        }
        const newData = [...data, newList];
        setData(newData);
        setCurrentTab(nextId - 1)
    }

    return (
        <nav className="navbar">
            <ul className="tabs">
                {data.map(category =>
                    <Tab
                        key={category.id}
                        id={category.id}
                        heading={category.name}
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab} />
                )}
                <li className="tab center" onClick={createNewTab}>
                    <FaPlus className='tab-title' />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
