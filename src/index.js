import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Link} from 'react-scroll'

// import Home from './components/home'
// import About from './components/about'
import {Home, About, Portfolio, Footer, Nav} from './components'

const Main = (props) => {
    return(
        <>


        {/* <div> */}
            <Nav />
        {/* </div> */}

        <Home />

        <About />

        <Portfolio />
        
        {/* <Switch>
            <Route exact path = '/' component = {Home} /> 
            <Route path = '/about' component = {About} />
            <Route path = '/portfolio' component = {Portfolio} />

        </Switch> */}

        {/* <Footer /> */}

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
