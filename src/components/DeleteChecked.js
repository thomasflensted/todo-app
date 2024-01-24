import React from 'react'

const DeleteChecked = ({ handleDeleteChecked }) => {
    return (
        <div className="fw">
            <button onClick={() => handleDeleteChecked()} type="submit" className="btn delete-all-btn">Delete All Checked</button>
        </div>
    )
}

export default DeleteChecked