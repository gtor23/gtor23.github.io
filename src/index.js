import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Home, About, Portfolio, Footer, Nav} from './components'

const Main = () => {
    return(
        <>


        <Nav />
        <Home />
        <About />
        <Portfolio />
        
        {/* <Switch>
            <Route exact path = '/' component = {Home} /> 
            <Route path = '/about' component = {About} />
            <Route path = '/portfolio' component = {Portfolio} />

        </Switch> */}
        </>

    )
}


const app = document.getElementById('app')

ReactDOM.render(
  <Router>
    <Main />
  </Router>, 
  
  app

)
