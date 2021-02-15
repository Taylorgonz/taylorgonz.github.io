import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import instagramB from '../Images/social-icons/instagram-b.png';
import youtubeB from '../Images/social-icons/youtube-b.png';
import linkedinB from '../Images/social-icons/linkedin-b.png'
import gitHubB from '../Images/social-icons/github-b.png'

function Footer() {

    return (
        <footer>
            <Container fluid={true}>
                <Row className="border-top justify-content-between align-items-center p-3">
                    <Col className="p-0 md={3} sm={12}">
                    <a href="https://www.instagram.com/taylorgonz/" target="_blank"><img className="footer-navIcons" src={instagramB} alt="instagram icon."/></a>

                    <a href="https://www.youtube.com/channel/UC7b6cmjQUEORq91I9f1sJWw?view_as=subscriber" target="_blank"><img className="footer-navIcons" src={youtubeB} alt="youtube icon."/></a>

                    <a href="https://www.linkedin.com/in/taylorgonz/" target="_blank"><img className="footer-navIcons" src={linkedinB}  alt="linkedin icon."/></a>

                    <a href="https://github.com/Taylorgonz" target="_blank"><img className="footer-navIcons" src={gitHubB}  alt="github icon."/></a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end font-weight-light md={3}">
                        This site was made by Taylor Gonzales.
                    </Col>
                </Row>
            </Container>

        </footer>
    )

}

export default Footer;