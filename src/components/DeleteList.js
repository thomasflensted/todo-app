import React from 'react'
import { resetIDs } from './helperFuncs';
import * as Dialog from '@radix-ui/react-dialog';

const DeleteList = ({ data, setData, currentTab, setCurrentTab }) => {

    const handleDelete = () => {
        if (data.length === 1) {
            setData([{ name: "My List", id: 1, items: [] }])
            setCurrentTab(0);
        } else {
            var updatedData = data.filter(list => list.id !== data[currentTab].id)
            updatedData = resetIDs(updatedData);
            const tabShift = currentTab === 0 ? 0 : currentTab - 1;
            setCurrentTab(tabShift);
            setData(updatedData);
        }
    }

    return (
        <div className="fw">
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button
                        type="submit"
                        className="btn delete-all-btn">Delete List
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                        <Dialog.Title className="DialogTitle">Delete List?</Dialog.Title>
                        <Dialog.Description className="DialogDescription">
                            Are you sure you want to delete this list? All content will be lost.
                        </Dialog.Description>
                        <div className='btn-container'>
                            <Dialog.Close asChild>
                                <button className="btn delete-list-btn">Cancel</button>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <button className="btn delete-list-btn" onClick={handleDelete}>Confirm</button>
                            </Dialog.Close>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default DeleteList