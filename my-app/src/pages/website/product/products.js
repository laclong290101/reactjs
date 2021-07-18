import React, { useState, useEffect } from 'react'
// import Products from '../../../components/Products';
import { Link } from 'react-router-dom';
import CategoryApi from '../../../api/CategoryApi';


const ProductPage = (props) => {
    const [categories, setCategories] = useState([]); // 1
    // 3
    useEffect(() => {
        // didMount 
        const getCategories = async () => {
            try {
                // neu thanh cong
                const { data } = await CategoryApi.getAll();
                setCategories(data);
                // console.log(data);
            } catch (error) {
                //neu that bai
                console.log(error)
            }
        }
        getCategories();
    }, [])
    // const afterRender = () => {
    //     const dataRender = document.querySelector('.dataRender');

    //     const filter = props.sort((a, b) => a.price - b.price);
    //     dataRender.innerHTML = filter.map(item => {
    //         return (
    //             <div className="col-4">
    //                 <div className="card p-4">
    //                     <img src={item.photo}></img>
    //                     <div className="card-body">
    //                         <h3 className="card-title">{item.name} </h3>
    //                         <p className="card-text"> {item.price}</p>
    //                         <Link to={`/product/${item._id}`} className="btn btn-primary">Chi tiết</Link>
    //                     </div>
    //                 </div>
    //             </div>

    //         )
    //     })
    // }

    // console.log(categories)
    return (
        <div>
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="container-fluid">
                        <div className="navbar-brand">Danh mục</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="tw-inline-block">
                                    {categories.map((item, index) => (
                                        <li className="tw-inline-block" key={index}>
                                            <Link to={`/categories/${item._id}`}><h3 className="tw-p-2">{item.name}</h3>
                                            </Link>
                                        </li>
                                    ))}

                                </li>

                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="text" id="input" onclick="myFunction()">Search</button>
                            </form>
                            <p id="demo" />
                        </div>
                    </div>
                </nav>
                <select className="form-select my-2" aria-label="Default select example" id="filter">
                    <option value>Mức giá</option>
                    <option value="all">Tất cả</option>
                    <option value="asc">Thấp - Cao</option>
                    <option value="desc">Cao - Thấp</option>
                    <option value={200}>200-400</option>
                    <option value>400-600</option>
                    <option value>&gt;600 </option>
                </select>
            </div>

            <div className="row dataRender">
                {props.products.map((item, index) => (
                    <div className="col-4">
                        <div className="card p-4" key={index}>
                            <img src={item.photo}></img>
                            <div className="card-body">
                                <h3 className="card-title">{item.name} </h3>
                                <p className="card-text"> {item.price}</p>
                                <Link to={`/product/${item._id}`} className="btn btn-primary">Chi tiết</Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div >

    )
}

export default ProductPage
