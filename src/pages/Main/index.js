import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import api from '../../services/api'

import './styles.css'

export default class Main extends Component {

    state = {
        orders: []
    }

    async componentDidMount(){
        const response = await api.get('orders')
        this.setState( {orders: response.data} )
    }

  render() {
    let column = []
    return (
        <div className="content">
            <header className="header" >Meus Orçamentos</header>
            <div className="menu">
                <ul className="nav">
                    <li className="col-min">Abertos</li>
                    <li className="col-min">Finalizados </li>
                    <li className="col-min">Canecelados</li>
                </ul>
            </div>
            <Container fluid={true}>
            {this.state.orders.map( (order, key) => {
                column.push(
                    <Col sm key={key}>
                        <Card bsPrefix="card">
                            <Card.Body>
                                <Card.Title><b>{order.serviceName.toUpperCase()}</b></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Validade: 5 dias</Card.Subtitle>
                            </Card.Body>
                            {order.quotes.map( (quote, keyQuote) => (
                                <img key={keyQuote} className="avatar" src={quote.avatar} alt={quote.avatar}></img>
                            ))}
                            <Card.Body>
                                <Card.Subtitle bsPrefix="card-subtitle-bottom">{`Você tem ${order.quotes.length} orçamentos!`}</Card.Subtitle>
                                <Button bsPrefix="cardBtn">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
                if(column.length === 3){
                    let temp = column
                    column = []
                    return(
                        (<Row key={key} >{temp}</Row>)
                    )
                }
                return null
            })}
            </Container>
        </div>
    )
  }
}
