import React from "react"

export default class Counter extends React.Component
{
    state = {
        count:0
    }
    
    styles = {
        padding:"10px",
        margin:"10px",
        border:"black solid 1px"
    }
    
    constructor(props) {
        super(props);
        
        // binding
        this.increaseCount = this.increaseCount.bind(this);
    }
    
    componentDidMount() {
         let number = Math.floor(Math.random() * 100 + 1);
         this.setState({
             count: number
         })
    }
    
    render() {
        return (
            <div>
                <div style={this.styles}>
                 {this.state.count}
                </div>
                <button onClick={this.increaseCount}>+</button>
            </div>
        )
    }
    
    increaseCount() {
        this.setState({
            count: this.state.count + 1
        })   
    }
}