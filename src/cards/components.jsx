import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './style.css';

import plitka1 from '../assets/plitka1.png';

class components extends Component {
    render() {
        return (
            <Container style={{ marginTop: "650px" }}>
                <h1 className="name-card">Продукция</h1>
                <Row>
                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col >

                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col>

                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col>

                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col>
  
                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col>

                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col>

                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col>

                    <Col className="col-ots" sm={3}>
                        <Card className="mb-3 font-card">
                            <img className="img-card" src={plitka1} alt="plitka" />
                            <p className="text-card">Брусчатка кирпичная </p>
                            <button className="btn-card">Подробнее</button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default components;