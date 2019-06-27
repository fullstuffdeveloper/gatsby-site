import React from 'react'


import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            {/* <Head title="Home" /> */}
            <div className={indexStyles.content}>
                
            <h1>Hello.</h1>
            <h2>I'm Abhishek</h2>
            </div>
        </Layout>
    )
}

export default IndexPage