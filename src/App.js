import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Global from './Components/Global'
import Indonesia from './Components/Indonesia'
import Province from './Components/Province'


const App = () =>{
    return (
        <center>
        <Router>
            <div>
              <h1> Covid Tracker </h1>
                <nav>
                    <tr>
                            <Link to="/Global">
                                Global
                            </Link>
                        </tr>
                    <tr>
                            <Link to="/Indonesia">
                                Indonesia
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Province">
                                Province
                            </Link>
                        </tr>
                </nav>
            </div>
            <Switch>
                <Route path="/Global">
                    <Global />
                </Route>
                <Route path="/indonesia">
                    <Indonesia />
                </Route>
                <Route path="/Province">
                    <Province />
                </Route>
            </Switch>
        </Router>
        </center>
    )
  
}

export default App;