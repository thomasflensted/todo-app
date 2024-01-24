import React from 'react'
import Item from './Item';
import NoItems from './NoItems';

const Items = ({ items, handleCheckClick, handleDelete }) => {
    return (
        <ul>
            {items.length === 0
                ? <NoItems />
                : items.map(item =>
                    <Item
                        id={item.id}
                        key={item.id}
                        item={item.item}
                        checked={item.checked}
                        handleCheckClick={handleCheckClick}
                        handleDelete={handleDelete} />
                )}
        </ul>
    )
}

export default Items