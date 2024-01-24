import React from 'react'
import { resetIDs } from './helperFuncs';

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
            <button
                onClick={handleDelete}
                type="submit"
                className="btn delete-all-btn">Delete List</button>
        </div>
    )
}

export default DeleteList