import React from 'react'
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'

import Home from './views/Home/Home'
import Reviews from './views/Reviews/Reviews'

export const Routes = props => (
    <Router>
        <div className='app'>
            <Route 
            path='/' exact
            component={Home}
            />
            <Route 
            path='/reviews' 
            component={Reviews}
            // render={(renderProps) => {
            //     <Reviews {...props} {...renderProps} />
            // }}
            />
        </div>
    </Router >
)

export default Routes