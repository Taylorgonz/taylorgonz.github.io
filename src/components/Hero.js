import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    return(
        <Jumbotron className="jumbotron-fluid p-0"> 
            <Container className="homeHeader" fluid={true}>
                <Row className="heroRow">
                    <Col xs={12} sm={12} lg={12} xl={12}>
                       {props.title && <h1 className="homeText heroTitle display-2">{props.title}</h1> }
                       {props.subTitle && <h3 className="homeText heroSubtitle display-4 font-weight-light">{props.subTitle}</h3>}
                       {props.text && <h3 className="homeText lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;