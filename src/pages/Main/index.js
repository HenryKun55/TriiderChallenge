import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import StarRatings from 'react-star-ratings';

import { LinkContainer } from 'react-router-bootstrap'

import api from '../../services/api'

import './styles.css'

export default class Main extends Component {

    state = {
        orders: [],
        status: 'aberto'
    }

    async componentDidMount(){
        const response = await api.get('orders')
        this.countStatus(response.data)
    }

    countStatus(orders)
    {
        let aberto = 0
        let finalizado = 0
        let cancelado = 0

        orders.map(order => {
            if(order.status.trim() === "" || order.status === "contratado"){
                aberto += 1
            }
    
            if(order.status === "cancelado"){
                cancelado += 1
            }
    
            if(order.status === "finalizado"){
                finalizado += 1
            }
            return null
        })
        this.setState({orders, aberto, cancelado, finalizado})
        
    }

    handleStatus = event => {
        this.setState({status: event.target.getAttribute('chave')})
    }

    hired = (quote, keyQuote) => {
        return (
            <div className="cardHired">
                <img key={keyQuote} className="avatar" src={quote.avatar} alt={quote.avatar}></img>
                <div className="cardHiredContent">
                    <div className="cardHiredName">{quote.name}</div>
                    <StarRatings
                        rating={quote.stars}
                        starDimension='12px'
                        starSpacing='0'
                        starRatedColor='e8c95c'
                        numberOfStars={5}
                        name='rating'
                    />
                    ({quote.ratings})
                </div>
            </div>
        )
    }

    col = (order, key, color) => {
        let quotes = []
        let images = []
        const replaceTitle = order.serviceName.split ('-').map (
            (item, i) => {
                if(i > 0){
                   return <span className="title" key={i}>&#8209;{item}</span>
                }else{
                    return <span key={i}>{item}</span>
                }
            }
        )
        return (
            <Col md={4} key={key}>
                <Card bsPrefix="card">
                    <Card.Body>
                        <Card.Title>{replaceTitle}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                        {order.status.trim() === "" ? 
                            (
                                `Validade: 5 dias`
                            ) 
                            :
                            (<Badge pill variant="primary" style={{background: color}} > {order.status.toUpperCase()} </Badge>) 
                        }
                        </Card.Subtitle>
                    </Card.Body>
                            {order.quotes.map( (quote, keyQuote) => {
                                if(quote.hired) {
                                    quotes.push(this.hired(quote, keyQuote))
                                    return quotes
                                }   
                                if(quotes.length < 1 ){
                                    images.push(<img key={keyQuote} className="avatar" src={quote.avatar} alt={quote.avatar}></img>)
                                }
                                if(order.quotes.length === (quotes.length + images.length)){
                                    return (
                                    <div key={keyQuote} className="cardHiredAlternative">
                                        {images}
                                        <Card.Subtitle bsPrefix="card-subtitle-bottom">{`Você já tem ${order.quotes.length} orçamentos!`}</Card.Subtitle>
                                    </div>
                                    )
                                }
                                return null
                            })}
                        <Card.Body bsPrefix="cardBottom">
                        <LinkContainer to={{
                                pathname: `/services/${order.id}`,
                                order: order
                            }}>
                            <Button bsPrefix="cardBtn">Ver Orçamentos</Button>
                            </LinkContainer>
                        </Card.Body>
                </Card>
            </Col>
        )
    }

    render() {
        return (
            <div className="content">
                <header className="header" >Meus Orçamentos</header>
                <div className="menu">
                    <ul className="nav">
                        <a href="#a" onClick={this.handleStatus} chave="aberto" className="col-min" >Abertos({this.state.aberto})</a>
                        <a href="#a" onClick={this.handleStatus} chave="finalizado" className="col-min">Finalizados({this.state.finalizado})</a>
                        <a href="#a" onClick={this.handleStatus} chave="cancelado" className="col-min">Cancelados({this.state.cancelado})</a>
                    </ul>
                </div>
                <Container fluid={true}>
                    <Row noGutters={false}>
                        {this.state.orders.map( (order, key) => {
                            if(this.state.status === 'aberto' ) {
                                if(order.status === 'contratado' || order.status === ''){ 
                                    return this.col(order, key, 'royalblue')
                                }
                            }else{
                                if(this.state.status === order.status && this.state.status === 'finalizado'){
                                    return this.col(order, key, 'seagreen')
                                }
                                if(this.state.status === order.status && this.state.status === 'cancelado'){
                                    return this.col(order, key, 'red')
                                }
                            }
                            
                        return null
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}
