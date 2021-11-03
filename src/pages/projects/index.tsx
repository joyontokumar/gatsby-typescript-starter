import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { btn } from '../../styles/home.module.css';
const Projects = ({ data }) => {
    console.log('data', data);
    const projects = data.allMarkdownRemark.nodes;
    return (
        <Layout>
            <div className="home-page p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Portfolio Page</h2>
                            <img
                                className="d-block mb-4"
                                src="/joyonto.jpeg"
                                alt="result"
                            />
                            <Link to="/" className={btn}>
                                Home
                            </Link>
                            <div className="project-list">
                                {projects?.map((project) => (
                                    <Link to="/">{project?.title}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
// export page query
export const query = graphql`
    query ProjectsPage {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    slug
                    stack
                }
            }
        }
    }
`;
