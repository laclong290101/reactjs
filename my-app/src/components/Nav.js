import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { isAuthenticated, signOut } from '../api/auth'
import { useLocation } from 'react-router-dom'


const Nav = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false)
    const { user } = isAuthenticated();
    useEffect(() => {
        isAuthenticated() && setIsLogged(true)
    }, [pathname, isLogged])
    return (
        <div>
            <ul className="flex py-3">
                <li><NavLink to="/" className="px-4" activeClassName="font-bold">Home </NavLink></li>
                <li><NavLink to="/about" className="px-4" activeClassName="font-bold">Contact </NavLink></li>
                <li><NavLink to="/products" className="px-4" activeClassName="font-bold">Product  </NavLink></li>

                {!isLogged && (
                    <>


                        <li><NavLink to="/signin" className="px-4" activeClassName="font-bold">Sign In</NavLink></li>
                    </>
                )}
                {isLogged && (
                    <>
                        <li><NavLink to={user.role == 1 ? "/admin/dashboard" : "/user/dashboard"}
                            className="px-4" activeClassName="font-bold"> Dashboard</NavLink></li>
                        <li><a className="px-4" style={{ cursor: 'pointer' }} activeClassName="font-bold"
                            onClick={() => signOut(() => {
                                setIsLogged(false)
                                history.push('/');
                            })}
                        >Sign Out</a></li>
                    </>
                )}

            </ul>
        </div>
    )
}

export default Nav
