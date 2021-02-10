import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0"> 
            <Container className="homeHeader" fluid={true}>
                <Row className="d-flex justify-content-center align-items-start">
                    <Col  sm={12}>
                       {props.title && <h1 className=" homeText display-1 font-weight-bolder">{props.title}</h1> }
                       {props.subTitle && <h3 className="homeText display-4 font-weight-light">{props.subTitle}</h3>}
                       {props.text && <h3 className="homeText lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;