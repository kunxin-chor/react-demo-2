import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  url = "https://86e9567679d949f98dbfc1e0b8d659ce.vfs.cloud9.ap-southeast-1.amazonaws.com/"
  
  state = {
    animals:[]
  }
  
  componentDidMount(){
   
    axios.get(this.url)
      .then( (response, settings) => {
        this.setState({
          animals:response.data
        })
      })
  }
  
  render(){
    return (
       <div>
        <h1>Hello</h1>
       
       
       </div>
      );
  }
}

export default App;
