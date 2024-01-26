import React from 'react'
import { FaPlus } from "react-icons/fa";
import Tab from './Tab';
import * as Dialog from '@radix-ui/react-dialog';

const NavBar = ({ data, currentTab, setCurrentTab, setData }) => {

    var newName = "";
    const createNewTab = (newName) => {
        const nextId = data.length + 1;
        const newList = {
            name: newName ? newName : "My New List",
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

                <Dialog.Root>

                    <Dialog.Trigger asChild>
                        <li className="tab center">
                            <FaPlus className='tab-title' />
                        </li>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className='DialogContent'>
                            <Dialog.Title className='DialogTitle'>Provide A Name For Your List</Dialog.Title>
                            <form action="submit" onSubmit={(e) => e.preventDefault()}>
                                <input placeholder='My New List' className="todo-search" autoFocus onChange={(e) => newName = e.target.value} />
                                <Dialog.Close asChild>
                                    <button type='submit' onClick={() => createNewTab(newName)} className="btn confirm-btn">Confirm</button>
                                </Dialog.Close>
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </ul>
        </nav >
    )
}

export default NavBar
