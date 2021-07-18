import React from 'react'
import { Link, useParams } from 'react-router-dom';

const CategoryPage = (props) => {
    const { id } = useParams();
    return (
        <div>
            <div>
            </div>
            <div className="row">
                {props.products.filter(products =>
                    products.categoryId == id).map(product => (
                        <div className="col-4">
                            <div className="card p-4">
                                <img src={product.photo}></img>
                                <div className="card-body">
                                    <h3 className="card-title">{product.name} </h3>
                                    <p className="card-text"> {product.price}</p>
                                    <Link to={`/product/${product._id}`} className="btn btn-primary">Chi tiết</Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    )
}

export default CategoryPage
