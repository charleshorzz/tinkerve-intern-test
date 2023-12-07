import React from 'react'
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import { servingArray } from '../data/number.js';
import {useSelector} from 'react-redux';

const NumberCard = () => {

    const number = useSelector((state) => state.number);
    const { servingNumber, lastServingNumber } = number

    const NumberHandler = () => {
        // Button clicked, number is added into the array
        const takeNumber = () => {
            let randomNumber = Math.floor(Math.random() * 9999);
            if (randomNumber < 1000) {
                randomNumber += 1000;
            }
            while (servingArray.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 9999);
                if (randomNumber < 1000) {
                    randomNumber += 1000;
            }}
            servingArray.push(randomNumber);
            alert(`Your ticket number is ${randomNumber}`)
        }

        takeNumber();
    }

    return (
        <Card>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <Row>
                        <Col>
                            <h5>Now Serving: </h5>
                        </Col>
                        <Col>
                            <h4><strong>{servingNumber}</strong></h4>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>
                            <h5>Last Number: </h5>
                        </Col>
                        <Col>
                            <h4><strong>{lastServingNumber}</strong></h4>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem className='text-center'>
                    <Button className='btn-block btn-lg' variant='dark' type='button' onClick={NumberHandler}>
                        Take a Number
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default NumberCard;
