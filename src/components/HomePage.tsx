import React from 'react';
import { Button, ButtonGroup, Col, Container, Row, Table, Image } from 'react-bootstrap';
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class HomePage extends React.Component {
    render() {

        return (
            <div className="mb-2">
                <Container>
                    <Row>
                        <Col>

                        </Col>
                    </Row>

                </Container>

                <Container fluid="md">
                    {/* Fix buttons size and alignment*/}
                    <Row className="rounded-2">

                        <Col lg={4}>
                            <img className="logoImg" alt="LogoName" src="LogoName.png"></img>

                        </Col>

                        <Col lg={4}>
                            <Button  className="verticalCenter" variant="outline-danger" size="lg">
                                Levels
                            </Button>
                        </Col>

                        <Col lg={4}>
                            <ButtonGroup size="lg" className="mb-2">

                                <Button className="verticalCenter" variant="outline-danger" size="lg">
                                    Alarm
                                </Button>
                                <Button className="verticalCenter" variant="outline-danger" size="lg">
                                    Create Reminder
                                </Button>
                                <Button href="profile" className="verticalCenter" variant="outline-danger" size="lg">
                                    Profile
                                </Button>
                            </ButtonGroup>
                            {/** 
                            <Button variant="outline-danger" size="sm">
                                <img className="img100" alt="some stuff" src="logo192.png"></img>
                            </Button>

                            <Button variant="outline-danger" size="sm">
                                Create Reminder
                            </Button>

                            <Button variant="outline-danger" size="sm">
                                Profile
                            </Button>
                            */}
                        </Col>

                    </Row>
                </Container>

                <Table striped bordered hover size="lg">

                    <thead>
                        <tr>
                            <th> Sunday </th>
                            <th> Monday </th>
                            <th> Tuesday </th>
                            <th> Wednesday </th>
                            <th> Thursday </th>
                            <th> Friday </th>
                            <th> Saturday </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Insert link in body to next page! Import data (reminder)*/}
                        <tr>
                            <td>
                                <div className="calendar">
                                1
                                    </div></td>
                            <td>
                            <div className="calendar">
                                2
                                </div>
                                </td>
                            <td>
                            <div className="calendar">3 </div></td>
                            <td><div className="calendar">
                                4
                                </div></td>
                            <td><div className="calendar">5 </div></td>
                            <td><div className="calendar">6 </div></td>
                            <td><div className="calendar">7</div></td>
                        </tr>
                    </tbody>
                </Table>

                <Container>
                    <Row>
                        <Col>
                            <div>
                                <h1>
                                    TASK FOR TODAY
                                </h1>
                                <Table striped bordered hover size="lg">

                                    <thead>
                                        <tr>
                                            <th> # </th>
                                            <th> Different Tasks </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*Insert link in body to next page! Import data (reminder)*/}
                                        <tr>
                                            <td>1</td>
                                            <td>Goal 1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Goal 2</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Goal 3</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Goal 4</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Goal 5</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>

                        <Col>
                        <div>
                                <h1>
                                    DAILY METER
                                </h1>
                        </div>

                            <ButtonGroup vertical className="brderwidth" size="lg">
                            <span className="py-2"></span>
                                <Button variant="danger">
                                    Exercise Meter
                        </Button>
                        
                                <span className="py-2"></span>

                                <Button variant="warning">
                                    Hydration Meter
                        </Button>
                                <span className="py-2"></span>

                                <Button variant="success">
                                    Habit Meter
                        </Button>
                                <span className="py-2"></span>

                                <Button variant="primary">
                                    Caloric Meter
                        </Button>
                                <span className="py-1.5"></span>


                            </ButtonGroup>
                        </Col>
                    </Row>

                </Container>
                <Image src="bear.gif"/>
                <Image src="Candoit.gif"/>

            </div>
        );
    }
}