import React from 'react'
import { Link, graphql } from 'gatsby'
import {
    Container,
    Col,
    Row,
    Button
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Template({ data }) {
    const post = data.markdownRemark;
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Link to="/blog">Go Back</Link>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{post.frontmatter.title}</h1>
                        <h4>Posted By: {post.frontmatter.author} on {post.frontmatter.date}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </Col>
                </Row>
                <Button color="primary">Hello</Button>
            </Container>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) 
    {
        markdownRemark
        (
            frontmatter: 
            { 
                path: {eq: $path}
            }
        ) 
        {
            html
            frontmatter 
            {
                path
                title
                author
                date
                cover_image
                {
                    childImageSharp 
                    {
                        fluid(maxWidth: 1000) 
                        {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

