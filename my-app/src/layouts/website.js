import React from 'react'
import Nav from '../components/Nav'
import Header from './header'

const LayoutWebsite = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default LayoutWebsite
