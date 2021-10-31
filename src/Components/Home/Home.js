import React, { useEffect, useState } from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';
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
        <div >
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

            <div className="mx-5 my-4">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Travel Blog 1</Accordion.Header>
                        <Accordion.Body className="text-success">
                            What I love about it: Anywhere We Roam may seem like a typical clean and minimal travel blog but this UK-based travel blog runs by Paul and Mark is a great example of how photos speaks a thousand words.

                            The layout of the travel blog merely serves as a white canvas to emphasize the atmospheric and immersive photography that Anywhere We Roam is a master at. Their photography and writings are top-notch and has the ability to transport you to the location in question.

                            A great example of this can be seen on articles like Impressions of Havana - A story from the streets where the duo takes you through the street of Havana exploring its culture and vibe through atmospheric photography and immersive writing that will make you feel like you are there yourself.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Travel Blog 2</Accordion.Header>
                        <Accordion.Body className="text-success">
                            What I love about it: As you know, I am a sucker for a well-designed website and one of the travel platform that have always been on my radar is Maptia, a platform for travelers and explorers to document and capture the world around them.

                            Maptia has not been updating as regularly as I had hope for but even then, the design they had come up with years ago is timeless and still stand as one of the best well-designed travel websites out there.

                            Its focus on world-changing photography accompanying the travel stories written by those who have lived their lives to the fullest is the sole reason why Maptia deserve a spot on this list.

                            The Gathering of Giants travel story by Tony Wu is an excellent example of Maptia's superior content that you can't get from any where else. Seeing the extremely detailed photos and reading the well-written story on this article is as close as you can get to being near these beautiful stunning whales.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Travel Blog 3</Accordion.Header>
                        <Accordion.Body className="text-success">
                            What I love about it: I first discovered about IFLY Magazine when I flew with KLM to Europe in 2018 and as they often send out newsletters to their fliers featuring several locations for them to travel to next, they introduced me to IFLY.

                            IFLY Magazine is an online travel magazine operated by the Dutch Airlines, KLM, that combines the professionally shot photographs you often come to expect from travel magazines on an airplane, the use of interactive media such as sound and videos, and travel tips and tricks that are universally useful to all types of travelers.

                            A great example of how IFLY excels at storytelling is in "The Wales Way" article. The article highlights a road trip itinerary that take us through the beautiful sceneries of Wales.

                            The moment you arrive on that page, you will see a full-screen video of drones flying around Wales together with many full-page photos of mountains and castles of Wales. If that doesn't create the best first impression for a travel website, I do not know what is.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Travel Blog 4</Accordion.Header>
                        <Accordion.Body className="text-success">
                            A crisp and clean colorful layout, water-colored headlines, a well-organized structure, and a ton of well-written travel guides, Indie Traveller is an excellent example of a travel blog that maintain its unique identity without sacrificing the usefulness of the content.

                            What I love about it: Indie Traveller is run by Marek Bron since 2012 and what I like most about the design is its play on the color palette, mixing contrast and subtle colors together in a way that made the travel blog stands out from the rest.

                            The layout is also uniquely framed and organized in a way that the moment you arrive on his blog, you know that he isn't using any generic Wordpress theme, which is a first impression that is hard to come by these days.

                            His content and writings are also the highlight of the travel blog. An article like "Where To Go Backpacking: Key Routes Around the World" is a great example of how organized and structured the content on Indie Traveller is.


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

            <div>
                <h3 className="text-warning">A L L _ S E V E N _ C O N T I N E N T S _ T O _ T R A V E L _ By _ MARS-TRAVEL</h3>
                <Container >
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col xs={12} md={8}>
                            <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Map_of_Asia_with_flags.svg" alt="" /> ASIA
                        </Col>
                        <Col xs={6} md={4}>
                            <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Map_of_Africa_with_flags.svg/300px-Map_of_Africa_with_flags.svg.png" alt="" /> Africa
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col xs={6} md={4}>
                            <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Map_of_North_America_with_flags.svg/1200px-Map_of_North_America_with_flags.svg.png" alt="" /> North America
                        </Col>
                        <Col xs={6} md={4}>
                            <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Map_of_South_America_with_flags.svg/1200px-Map_of_South_America_with_flags.svg.png" alt="" /> South America
                        </Col>
                        <Col xs={6} md={4}>
                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgN5x5MoxJVPkGvm8Mxr9qxJ4E8THcb3WuJuphnFsSXoSIEPsPLujniqgnpnMS3u0dOE&usqp=CAU" alt="" /> Antarctica
                        </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row>
                        <Col xs={6}><img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Map_of_Asia_with_flags.svg" alt="" /> Europe</Col>
                        <Col xs={6}><img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Map_of_Oceania_with_flags.svg/1200px-Map_of_Oceania_with_flags.svg.png" alt="" /> Australia </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;