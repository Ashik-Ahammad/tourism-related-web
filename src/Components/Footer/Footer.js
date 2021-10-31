import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer from '../../images/footer.png'

const Footer = () => {
    return (
        <div className="mt-5 pt-5">
            <hr />
            <Container className="mt-5">
                <Row justify-content-center >

                    <Col>
                        <h3 className="text-success">For your queries</h3>
                        <h5 className="text-success">Email: mars2021travel@tourism.com</h5>
                        <h5 className="text-success">Call <small>0424511</small></h5>
                    </Col>
                    <Col><img className=" mb-5 " height="200px" src={footer} alt="Footer" /></Col>
                    <Col>
                        <h3 className="text-success">Download Our App</h3>
                        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="btncheck1">Play Store</label>

                            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                            <label class="btn btn-outline-secondary" for="btncheck2">Apple Store</label>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;