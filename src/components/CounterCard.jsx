import React from 'react'
import { Card } from 'react-bootstrap'

const CounterCard = ({ counter }) => {
    return (
        <Card style={{ width: '17rem', height: '8rem', backgroundColor: `${counter.availability === 'grey' ? 'grey' : 'white'}`}} className='my-5 mx-2 text-center'>
            <Card.Title>
                <div style={{ height: '1rem', width: '1rem', backgroundColor: `${counter.availability}`, borderRadius: '50%', display: 'inline-block', marginLeft: '80%'}}></div>
                <h3>
                    Counter {counter.id}
                </h3>
            </Card.Title>
            <Card.Text>
                <h4><strong>{counter.number}</strong></h4>
            </Card.Text>
        </Card>
    )
}

export default CounterCard
