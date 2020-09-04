import React from 'react';
import axios from 'axios';

import TodoList from './TodoList'
import Counter from './Counter'

class  App extends React.Component {
  state = {
    todos:[], // an empty array inside our state
    currentPage:0,
    numberPerPage:100
  }
  
  componentDidMount() {
    this.loadTodos()
  }
  
  loadTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => {
        this.setState({
          todos:response.data
        })
      })
  }
  
  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }
  
  prevPage = () => {
      this.setState({
      currentPage: this.state.currentPage -1
    })
  }
  
  render() {
    return (
      <div className="App">
        <Counter/>
        <button onClick={this.loadTodos}>Load</button>
        <TodoList todos={this.state.todos}
                  currentPage={this.state.currentPage}
                  numberPerPage={this.state.numberPerPage}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
        />
      </div>
    );
  }
}

export default App;
