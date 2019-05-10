import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from '../components/image'

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br /><br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br /><br /> <br />
            </div>
        ))}
        <Img />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
            edges {
                node {
                    id
                    frontmatter {
                    path
                    title
                    date
                    author
                    }
                }
            }
        }
        
    }
`

export default BlogPage
