import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from "../home/Signup";
import Login from "./Login";
import './auth.css';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <div><Signup setToken = {props.setToken}/></div>
                </Col>
                <Col md="6" className="login-col">
                    <div><Login setToken ={props.setToken} /></div>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;