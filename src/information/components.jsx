import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css'

import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import icon6 from '../assets/icon6.svg';
import sotrudnik from '../assets/sotrudnik.png'

class components extends Component {
    render() {
        return (
            <Container style={{ marginTop: "200px", marginBottom: "60px" }}>
                <h1 className="name-inform">Почему выбирают нас?</h1>
                <img src={sotrudnik} className="sotr-img" style={{ width: "314px", height: "493px", marginTop: "0px", float: "right" }} alt="sotrudnik" />

                <Row>
                    <Col>
                        <img src={icon1} className="imag-icon" alt="icon" />
                        <p className="text-inform">Качество изготовляемой продукции</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={icon2} className="imag-icon" alt="icon" />
                        <p className="text-inform" style={{marginTop: "20px"}}>Чистота сделки</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={icon3} className="imag-icon" alt="icon" />
                        <p className="text-inform">От заявки до исполнения 30 минут</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={icon4} className="imag-icon" alt="icon" />
                        <p className="text-inform">Более 10 лет на рынке благоустройства</p>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <img src={icon5} className="imag-icon" alt="icon" />
                        <p className="text-inform">Более тысячи довольных клиентов</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={icon6} className="imag-icon" alt="icon" />
                        <p className="text-inform" style={{marginTop: "17px"}}>Быстрая доставка</p>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default components;