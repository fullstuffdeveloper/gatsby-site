import React from 'react'
import profile from '../images/image.jpg'
import indexStyle from './index.module.scss';


import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello.</h1>
            <h2>I'm Abhishek</h2>
            <img style={indexStyle.img} src={profile} alt="profile pic" width="100%" height="500px"></img>
        </Layout>
    )
}

export default IndexPage