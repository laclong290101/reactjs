import React from 'react'
import "../css/style.css"
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="d-flex tw-flex-column flex-md-row align-items-center tw-p-3 px-md-4 tw-mb-3 bg-body tw-border-bottom tw-shadow-sm">
                <div className="container">
                    <div className="logo">
                        <span>TH</span>
                        <strong>Travels</strong>
                    </div>
                    <div className="mainTop">
                        <div className="contactTop">
                            <ul>
                                <li><i className="tw-mx-2 fa fa-phone" /> +34 266 0413</li>
                                <li><i className="fa fa-envelope" /> Nguyentruonghai@gmail.com</li>
                            </ul>
                        </div>
                        <div className="navTop">
                            <ul className="socialTop">
                                <li><Link to><i className="fab fa-google-plus" /></Link></li>
                                <li><Link to><i className="fab fa-linkedin" /></Link></li>
                                <li><Link to><i className="fab fa-twitter" /></Link></li>
                                <li><Link to><i className="fab fa-facebook-f" /></Link></li>
                            </ul>
                            <nav>
                                <Nav />
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
