import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { btn } from '../styles/home.module.css';
const Home = () => {
    return (
        <Layout>
            <div className="home-page p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Home page</h2>
                            <Link to="/about" className={btn}>
                                Go
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Home;
