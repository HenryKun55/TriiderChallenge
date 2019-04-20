import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import { LinkContainer } from 'react-router-bootstrap'

import StarRatings from 'react-star-ratings';

import './styles.css'

export default class Services extends Component {

  state = {
    quotes: [],
    type: ''
  }

  componentDidMount(){
    this.quotes(this.props.location.order)
    window.scrollTo(0, 0)
  }

  col = (order, quote, type) => (
    <Col md={4}>
      <Card bsPrefix="card">
        {quote.hired ? (<Badge pill variant="primary" className="badgeService">{ order.status.charAt(0).toUpperCase() + order.status.slice(1)}</Badge>) : null}
        <div className="cardHiredService">
        <img className="avatar" src={quote.avatar} alt={quote.avatar}></img>
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
            <div className="closeBusiness">{quote.servicesDone} negócios fechados</div>
          </div>
          </div>
          <Card.Body bsPrefix="cardBottomsService">
            {quote.hired ? (
              <div>
                <Card.Title className="price">R$ {quote.servicesDone},00</Card.Title>
                <Button bsPrefix="cardBtnService">VER PERFIL</Button>
              </div> 
            ) : 
            <Button bsPrefix="cardBtnService">{type === 'out' ? `VER PERFIL` : `CONTRATAR`}</Button>}
          </Card.Body>
      </Card>
    </Col>
  )

  quotes = (order) => {
    let quotesIn = []
    let quotesOut = []
    let type = (order.status.trim() === '') ? 'in' : 'out'
    console.log(type)
    order.quotes.map( (quote, keyQuote) => {
      if(quote.hired){
        quotesIn.push(
          this.col(order, quote, type)
        )
      }else{
        quotesOut.push(
          this.col(order, quote, type)
        )
      }
      return null
    })
    this.setState({quotes: {
      quotesIn: [...quotesIn], 
      quotesOut: [...quotesOut]
    }})
  }

  renderQuotes(){
    let order = this.props.location.order
    console.log(this.state.quotes)
    if(order.status.trim() !== "") {
      return (
        <div>
          <header className="headerContentService" >{order.status.trim() !== "" ? order.status.toUpperCase()+`:` : ''}</header>
          <Row noGutters={false}>
            {this.state.quotes.quotesIn}
          </Row>
          <header className="headerContentService" > RECEBIDOS</header>
          <Row style={{opacity: 0.5}} noGutters={false}>
            {this.state.quotes.quotesOut}
          </Row>
        </div>
      )
    } else {
      return (
        <div>
        <header className="headerContentService" >ORÇAMENTOS RECEBIDOS</header>
        <Row noGutters={false}>
          {this.state.quotes.quotesOut}
        </Row>
        </div>
      )
    }
  }

  render() {
    const quotes = this.renderQuotes()
    return (
        <div className="contentService">
          <div className="headerService">
            <LinkContainer to="/"><a href="_blank" className="backButton">{`<`}</a></LinkContainer>
            <div className="titleService">
              <div>{this.props.location.order.serviceName.split(' ')[0]}</div>
              <div className="details">VER DETALHES</div>
            </div>

            <div className="help">CENTRAL DE AJUDA</div>
          </div>
          <Container fluid={true}>
            {quotes}
          </Container>
        </div>
    )
  }
}
