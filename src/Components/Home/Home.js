import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/c3.jpg'
import image2 from '../../images/c1.jpg'
import image3 from '../../images/c2.jpg'
import image4 from '../../images/c4.jpg'
import image5 from '../../images/c5.jpg'
import image6 from '../../images/c6.jpg'
import Body from './Body/Body';

const Home = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-plains-36328.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setTest(data))
    }, [])
    return (
        <div className="container">
            <div>
                <Carousel fade className="">
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image1}
                            alt="venice"
                            height="1080px"
                            img-fluid
                        />
                        <Carousel.Caption>
                            <h3 className="text-warning">Venice,ITALY</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image2}
                            alt="nafakhum"
                            height="1080px"
                            img-fluid
                        />

                        <Carousel.Caption>
                            <h3 className="text-primary">Bandarban,BANGLADESH</h3>
                            <p>Nafakhum is one of the most beautiful waterfall in Bandarban.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image3}
                            alt="santorini"
                            height="1080px"
                            img-fluid
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">Santorini,GREECE</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image4}
                            alt="tsongo"
                            height="1080px"
                            img-fluid
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">Tsongo Lake,SIKKIM</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image5}
                            alt="shimla"
                            height="1080px"
                            img-fluid
                        />

                        <Carousel.Caption>
                            <h3 className="text-warning">Shimla,Himachal Pradesh,INDIA</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image6}
                            alt="saint"
                            height="1080px"
                            img-fluid
                        />

                        <Carousel.Caption>
                            <h3 className="text-warning">Saint Martin,BAY of BENGAL</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1 className="text-primary">M A R S - T R A V E L - H E L P S - Y O U - W I T H</h1>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 ">

                {
                    test.map(tests => <Body
                        key={tests.id}
                        tests={tests}
                    ></Body>)
                }

            </div>
        </div>
    );
};

export default Home;