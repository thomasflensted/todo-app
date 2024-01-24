import React from 'react'

const Tab = ({ id, heading, currentTab, setCurrentTab }) => {

    return (
        <li className="tab-list-item">
            <div className='tab' onClick={() => setCurrentTab(id - 1)}>
                <h2 className='tab-title'>{heading}</h2>
            </div>
            {currentTab === id - 1
                ? <div className="divider"></div>
                : null
            }
        </li >
    )
}

export default Tab