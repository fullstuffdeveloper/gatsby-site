import React from 'react'
// import profile from '../images/image.jpg'
// import indexStyle from './index.module.scss';
// import {Container, Row, Col} from 'react-bootstrap';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Profilepic from '../images/profile.jpeg'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


import Layout from '../components/layout';
// import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            {/* <Head title="Home" /> */}
            {/* <Container>
                <Row>
                     <Col className={indexStyles.col} lg={4}>
                         1
                     </Col>
                            
                     <Col className={indexStyles.col} lg={4}>
                     2
                     </Col>
                     
                     <Col className={indexStyles.col} lg={4}>
                     3
                     </Col>
                </Row>
                
            </Container> */}
            <div className={indexStyles.content}>
             <img src={Profilepic} alt="profile image" className={indexStyles.pimg}/>   
            <h1 className={indexStyles.hello}>Hello.</h1>
            <h2 className={indexStyles.name}>I'm Abhishek</h2>
           
            </div>
            
            
            

        </Layout>
        
    )
}

export default IndexPage