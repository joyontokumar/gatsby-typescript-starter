import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { btn } from '../../styles/home.module.css';
const Projects = () => {
    return (
        <Layout>
            <div className="home-page p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Portfolio Page</h2>
                            <Link to="/" className={btn}>
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
