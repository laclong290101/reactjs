import React from 'react'
import { Link } from 'react-router-dom'
const Products = (props) => {
    // props là 1 opbject chứa giá trị từ ngoài truyền vào
    const onHandleRemove = (id) => {
        props.onDelete(id);
    }
    return (
        <div>
            <ul>
                {props.products.map((item, index) => (
                    <li key={index}>
                        <Link to={`/product/${item._id}`}> {item.name} </Link>
                        <button onClick={() => onHandleRemove(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Products
