import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
const Navbar = () => {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    const { title } = data.site.siteMetadata;
    return (
        <div className="navbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <Link to="/">{title}</Link>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="link">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Portfolios</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
