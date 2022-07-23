import React, {useState, useEffect} from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from "axios";

import { ListDiv, ListItem } from "../Style/ListCSS.js";



function Most() {

    const [mostList, setMostList] = useState([]);

    useEffect(() => {
        console.log('main')
        axios
            .get("/api/lotto/mostFrequent",)
            .then((response) => {
                // console.log('list ', response);
                console.log('data ', response.data);
                setMostList([...response.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <ListDiv>
            <h2> 가장 많이 뽑힌 번호 </h2>
            <Row className='lotto-row'>
                <Col className='lotto-col' ></Col>
                <Col className='lotto-col' lg={2}>번호</Col>
                <Col className='lotto-col'  >중복 횟수</Col>
            </Row>
            {mostList.map((most, idx) => {
                return (
                    <Row  key={idx}>
                        <Col className='lotto-col'>{idx +1}</Col>
                        <Col className='lotto-col' lg={2}>{most.number}</Col>
                        <Col className='lotto-col' >{most.duplication}</Col>
                    </Row>
                );
            })}
        </ListDiv>
    );
}

export default Most;