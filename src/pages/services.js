import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
    <div>
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <h1>Services</h1>
            <p>Our services...</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            </div>
        </Layout>
    </div>
)

export default ServicesPage;
