import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CaretDown }from 'react-bootstrap-icons';


function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0"> 
            <Container fluid={true}>
                <Row className="border-bottom border-3 justify-content-center py-5">
                    <Col   md={8} sm={12}>
                       {props.title && <h1 className="heroTitle display-2 font-weight-bolder">{props.title}</h1> }
                       {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                       {props.text && <p className="lead font-weight-light">{props.text}</p>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;