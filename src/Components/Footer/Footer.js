import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer from '../../images/footer.png'

const Footer = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row justify-content-center >

                    <Col>
                        <h3>For your queries</h3>
                        <h5>email: mars2021travel@tourism.com</h5>
                        <h5>Call <small>0424511</small></h5>
                    </Col>
                    <Col><img className=" mb-5 " height="200px" src={footer} alt="Footer" /></Col>
                    <Col>
                        <h3>Download Our App</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;