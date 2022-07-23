import React from 'react';

import { ListDiv, ListItem } from "../Style/ListCSS.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function List(props) {

    return (
        <ListDiv>
            <h2> 최근 로또 </h2>
            <Row className='lotto-row'>
                <Col className='lotto-col'>회차</Col>
                <Col className='lotto-col' >1</Col>
                <Col className='lotto-col'>2</Col>
                <Col className='lotto-col'>3</Col>
                <Col className='lotto-col'>4</Col>
                <Col className='lotto-col'>5</Col>
                <Col className='lotto-col'>6</Col>
                <Col className='lotto-col'>보너스</Col>
            </Row>
            {props.lottoList.map((lotto, idx) => {
                return (
                    <Row  key={idx}>
                        <Col className='lotto-col' >{lotto.round}</Col>
                        <Col className='lotto-col' >{lotto.first}</Col>
                        <Col className='lotto-col' >{lotto.second}</Col>
                        <Col className='lotto-col' >{lotto.third}</Col>
                        <Col className='lotto-col' >{lotto.fourth}</Col>
                        <Col className='lotto-col' >{lotto.fifth}</Col>
                        <Col className='lotto-col' >{lotto.sixth}</Col>
                        <Col className='lotto-col' >{lotto.bonus}</Col>
                    </Row>
                );
            })}
        </ListDiv>
    );
}

export default List;