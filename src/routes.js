import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Main from './pages/Main'
import Services from './pages/Services'

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/services" component={Services} />
        </Switch>
    </BrowserRouter>
)

export default Routes