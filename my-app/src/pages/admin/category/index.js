import React from 'react'
import { Link } from 'react-router-dom'


const CategoryManagerPage = (props) => {
    const onHandleRemove = (id) => {
        props.onDeleteCate(id);
    }
    return (
        <div>

            <header className="tw-bg-white tw-shadow">
                <div className="tw-max-w-7xl tw-mx-auto tw-py-6 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                    <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">
                        CategoryManager
      </h1>

                </div>
            </header>
            <main>
                <div className="tw-max-w-7xl tw-mx-auto tw-py-6 sm:tw-px-6 lg:tw-px-8">
                    <div>
                        <div className="btn btn-primary">
                            <Link to="/admin/categories/add">Add Category</Link>
                        </div>
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>

                                    <th width={200}>Action</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {props.categories.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td> {item.name}  </td>
                                        <td>
                                            <Link to={`/admin/categories/${item._id}`} className="btn btn-primary"> Update </Link>
                                            <button className="btn btn-danger btn-remove" onClick={() => onHandleRemove(item._id)}>Delete</button>

                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>

                    </div>
                    {/* /End replace */}
                </div>
            </main>

        </div>
    )
}

export default CategoryManagerPage
