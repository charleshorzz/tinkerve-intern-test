import React from 'react'
import { Row, Col } from "react-bootstrap"
import NumberCard from '../components/NumberCard.jsx'
import CounterCard from '../components/CounterCard.jsx'
import Header from '../components/Header.jsx'
import counters from '../data/counter.js'
import { useSelector } from 'react-redux'

const CustomerScreen = () => {
    const newCounter = useSelector((state) => state.number)
    const { counter: newCounterAttribute } = newCounter;

  return (
    <>
        <Header isManager={false}/>
        <NumberCard />
        <Row>
            {counters.map((counter) => (
                counter.availability === 'green' ? 
                    <Col key={counter.id}>
                        <CounterCard counter={newCounterAttribute}/>
                    </Col>
                :
                    <Col key={counter.id}>
                        <CounterCard counter={counter}/>
                    </Col>
            ))}
        </Row>
    </>
  )
}

export default CustomerScreen
