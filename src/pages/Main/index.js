import React, { Component } from 'react';

export default class Main extends Component {

async componentDidMount(){
    this.handleProps()
}

handleProps() {
    console.log(this.props)
}

  render() {
      return (
          <div>Main</div>
      )
  }
}
