import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1 className="dashboard-header">Welcome to Your Dashboard</h1>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <div className="card">
                            <h2>Upcoming Appointments</h2>
                            <p>You have 3 upcoming appointments.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <h2>Pending Prescriptions</h2>
                            <p>2 prescriptions need to be uploaded.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <h2>Surgery Bookings</h2>
                            <p>No surgeries booked for this week.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
