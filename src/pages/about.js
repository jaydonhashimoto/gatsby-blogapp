import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <div>
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <h1>About</h1>
            <p>This is my about page!!</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            </div>
        </Layout>
    </div>
)

export default AboutPage;
