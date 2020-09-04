import React from "react"
import axios from "axios"
import 'bulma/css/bulma.css'

export default class Index extends React.Component{

  state = {
    data:[]
  }
  
  loadData = () => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
        
        this.setState({
          data: response.data
        })
        
      })
  }
  
  // most straightforward but lots of code way
  renderList() {
    let final = [];
    for (let d of this.state.data) {
      final.push(<li>{d.title}</li>)
    }
    return final;
  }
  
  // slightly more advanced syntax
  renderList2() {
    return this.state.data.map(function(d){
      return <li>{d.title}</li>
    })
    
  }
  
  render() {
    return (
     <div className='container content'>
       <h1 className='title'>Hello World</h1>
       <button className='button' onClick={this.loadData}>Fetch</button>
       <div>
        Total number of posts: {this.state.data.length}
       </div>
       <ul>
         { this.state.data.map( d => <li>{d.title}</li>) }
       </ul>
     
     </div>
    );
  }
}