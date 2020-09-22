/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import '../assets/scss/layout.scss';
// import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <>
            <div className="scrollbar scrollbar-primary">
                {children}
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Layout