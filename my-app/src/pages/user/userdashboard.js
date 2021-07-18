import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../api/auth'

const UserDashboard = () => {
    const { user } = isAuthenticated();
    return (
        <div>


            <header className="tw-bg-white tw-shadow">
                <div className="tw-max-w-7xl tw-mx-auto tw-py-6 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                    <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">
                        User Dashboard
  </h1>

                </div>
            </header>
            <main>
                <div className="tw-max-w-7xl tw-mx-auto tw-py-6 sm:tw-px-6 lg:tw-px-8">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">Total</div>
                                <ul className=" list-group">
                                    <li className="list-group-item">
                                        <Link to="/cart">Cart</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">User</div>
                                <ul className=" list-group">
                                    <li className="list-group-item">
                                        Name : {user.name}
                                    </li>
                                    <li className="list-group-item">
                                        Email : {user.email}
                                    </li>
                                    <li className="list-group-item">
                                        {user.role == 1 ? "Admin" : "Register user"}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UserDashboard
