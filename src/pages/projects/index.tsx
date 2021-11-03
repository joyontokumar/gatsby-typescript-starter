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
                            <Link to="/" className={btn}>
                                Home
                            </Link>
                            <div className="project-list mt-3">
                                <div className="row">
                                    {projects?.map((project) => (
                                        <Link
                                            className="col-lg-4"
                                            to={
                                                `/projects/` +
                                                project.frontmatter.slug
                                            }
                                            key={project.id}
                                        >
                                            <div>
                                                <img
                                                    className="d-block mb-4 w-100"
                                                    src="/2.png"
                                                    alt="result"
                                                />
                                                <h3>
                                                    {project.frontmatter.title}
                                                </h3>
                                                <p>
                                                    {project.frontmatter.stack}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
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
