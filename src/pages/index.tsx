import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/Layout';
import { btn } from '../styles/home.module.css';
const Home = ({ data }) => {
    return (
        <Layout>
            <div className="home-page p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Home page</h2>
                            <Img
                                className="mb-5"
                                fluid={data.file.childImageSharp.fluid}
                            />
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
export const query = graphql`
    query Banner {
        file(relativePath: { eq: "joyonto.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
