import React from 'react'
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import { servingArray, servedArray } from '../data/number.js'
import { useDispatch, useSelector } from 'react-redux'
import { updateServingNumber, updateLastServingNumber, updateCounter} from '../slices/numberSlice.js'

const ManagerCard = () => {
    const dispatch = useDispatch();

    const number = useSelector((state) => state.number);
    const { servingNumber, lastServingNumber } = number;

    const updateHandler = async(num1, num2) => {
        servedArray.push(servingArray.shift());
        dispatch(updateServingNumber(servingArray[0]));
        dispatch(updateLastServingNumber(servedArray[servedArray.length - 1]));
        dispatch(updateCounter({
            availability: 'red',
            number: servingNumber
        }));
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
                    <Button className='btn-block btn-lg' variant='dark' type='button' onClick={updateHandler}>
                        Update a Number
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default ManagerCard;

