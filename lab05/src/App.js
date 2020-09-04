import React from 'react';

// import router stuff
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

import Register from './pages/Register'
import Summary from './pages/Summary'

class App extends React.Component {
  
  state = {
    user: {
      username: "",
      email:"",
      gender:'m'
    }
    
  }
  
  // we expect user to be an object with username, email and gender
  updateUser = (user) => {
    this.setState({
      user:user
    })
  }
  
  render() {
    return (
    <Router>
    
      <Link to='/'>
        Register
      </Link>
      
      <Switch>
        <Route
         exact path='/'
         render={
          (props) =><Register { ...props} updateUserCallback={this.updateUser}/> 
         }
        />
        <Route path='/summary'>
          <Summary user={this.state.user}/>
        </Route>
      </Switch>
    
    </Router>
  );  
  }
  
}

export default App;
