import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom" 

const Header = ({ isManager }) => {
  return (
    <Container>
      <Row> 
      <Col md={10}>
        <div className='text-center py-5'>
          <h1>Ticket Counter Challenge</h1>
        </div>
      </Col>
      <Col md={2} className='text-center py-5'>
        {!isManager ? (
          <Link to='/manager' className='btn btn-dark'>
            Switch to Manager
          </Link>
        ) : (
          <Link to='/' className='btn btn-dark'>
            Switch to Customer
          </Link>
        )}
      </Col>
      
    </Row>
    </Container>
  )
}

export default Header
