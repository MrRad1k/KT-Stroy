import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';

import './style.css'

import headerplitka from '../assets/headerplitka.png'

class components extends Component {
    render() {
        return (
            <Container className="mxst">
                <h1 className="text-header">Тротуарная плитка с доставкой до вашего объекта.</h1>
                <p className="text-header-mag">Онлайн-магазин тротуарной плитки от производителя.</p>

                <button className="btn">Заказать звонок</button>
                
                <Image className="header-fon" src={headerplitka} alt='plitka' />
            </Container>
        );
    }
}

export default components;