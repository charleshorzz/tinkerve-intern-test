import React from 'react'
import ManagerCard from '../components/ManagerCard.jsx'
import { Row, Col } from "react-bootstrap"
import CounterCard from '../components/CounterCard.jsx'
import Header from '../components/Header.jsx'
import counters from '../data/counter.js'
import { useSelector } from 'react-redux'

const ManagerScreen = () => {
    const newCounter = useSelector((state) => state.number)
    const { counter: newCounterAttribute } = newCounter;

  return (
    <>
     <Header isManager={true}/>
      <ManagerCard />
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

export default ManagerScreen
