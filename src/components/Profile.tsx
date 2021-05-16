import React from 'react';
import { Button, ButtonGroup, Col, Container, Row, Image, ListGroup, Card } from 'react-bootstrap';
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Profile extends React.Component {
    render() {

        return (
            <div className="mb-2">
         

                <Container fluid="md">
                    {/* Fix buttons size and alignment*/}
                    <Row className="rounded-2">

                        <Col lg={4}>
                            <img className="logoImg" alt="LogoName" src="LogoName.png"></img>

                        </Col>

                        <Col lg={4}>
                            <ButtonGroup size="lg" className="mb-2">

                                <Button className="verticalCenter" variant="outline-danger" size="lg">
                                    Alarm
                        </Button>
                                <Button className="verticalCenter" variant="outline-danger" size="lg">
                                    Create Reminder
                        </Button>
                                <Button href="home" className="verticalCenter" variant="outline-danger" size="lg">
                                    Home
                        </Button>
                            </ButtonGroup>
                        </Col>

                        <Col lg={4}>
                            <img className="logoImg" alt="LogoName" src="LogoName.png"></img>

                        </Col>

                    </Row>
                </Container>
                <thead></thead>
                <thead></thead>
                <h1>
                    Welcome to the Profile Page!
                </h1>
                <thead></thead>
                <thead></thead>

                <span className="py-2"></span>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <div>
                                <h3> Profile Picture</h3>
                            </div>

                            <Image width={150} height={150} src="frog.gif" roundedCircle />
                            <span className="py-3"></span>
                            <ListGroup >
                                <span className="py-3"></span>
                                <ListGroup.Item variant="primary">
                                    NAME</ListGroup.Item>
                                <ListGroup.Item variant="warning">BIRTHDAY</ListGroup.Item>
                                <ListGroup.Item variant="success">THEME</ListGroup.Item>
                                <ListGroup.Item variant="warning">BIRTHDAY</ListGroup.Item>
                                <ListGroup.Item variant="success">THEME</ListGroup.Item>
                                <ListGroup.Item variant="warning">BIRTHDAY</ListGroup.Item>
                                <ListGroup.Item variant="success">THEME</ListGroup.Item>
                            </ListGroup>
                            <span className="py-2"></span>
                        </Col>

                        <Col lg={4}>
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src="Artwork.gif" />
                                <Card.Body>
                                    <Card.Title>Statistics</Card.Title>
                                    <Card.Text>
                                        Here are the daily and weekly data(s).</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src="Artwork.gif" />
                                <Card.Body>
                                    <Card.Title>Improvement</Card.Title>
                                    <Card.Text>
                                        This is what you can do!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
                <span className="py-2"></span>
                <Image src="bear.gif"/>
                <Image src="Candoit.gif"/>

            </div>
            
        );
    }
}