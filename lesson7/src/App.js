import React from 'react'

import Index from './pages/Index'
import Second from './pages/Second'

// import router stuff
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

class App extends React.Component {
  
  render() {
    return  <div className='container content'>
    
      <Router>
        <Link to='/'>Index</Link> | <Link to='/second'>Second</Link>
        <Switch>
          
          <Route exact path='/'>
            <Index/>
          </Route>
     
          <Route exact path='/second'>
            <Second/>
          </Route>
      
        </Switch>
      </Router>
    
    </div>
  }
 
}

export default App;
