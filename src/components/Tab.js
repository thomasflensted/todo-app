import React from 'react'

const Tab = ({ id, heading, currentTab, setCurrentTab }) => {

    const selected = currentTab === id - 1;

    return (
        <li className="tab" onClick={() => setCurrentTab(id - 1)}>
            <h2 style={selected ? { fontWeight: "600" } : null} className='tab-title'>{heading}</h2>
            <div className="divider"></div>
        </li>
    )
}

export default Tab