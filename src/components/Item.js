import { GrCheckbox } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";

const Item = ({ id, item, checked, handleCheckClick, handleDelete }) => {

    const checkedStyle = { color: "gray", textDecoration: "line-through" };

    return (
        <li key={id} className='fw item'>
            <label className="item-content content-left">
                {checked
                    ? <GrCheckboxSelected className='checkbox' onClick={() => handleCheckClick(id)} />
                    : <GrCheckbox className='checkbox' onClick={() => handleCheckClick(id)} />}
                <input type="checkbox" />
                <h3
                    onClick={() => handleCheckClick(id)}
                    className="item-text"
                    style={checked ? checkedStyle : null}>{item}</h3>
            </label>
            <div className="item-content">
                <FiTrash className="delete-icon" onClick={() => handleDelete(id)} />
            </div>
        </li >
    )
}

export default Item