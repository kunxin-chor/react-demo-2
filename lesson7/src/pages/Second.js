import React from "react"

import axios from "axios"
import 'bulma/css/bulma.css'

export default class Second extends React.Component {
    state = {
        data:[]
    }
    
    // lifecycle function
    componentDidMount()
    {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( (response) => {
                this.setState({
                    data: response.data
                })
            })
        
    }
    
    render() {
        return <div className='content'>
            <h1 className='title'>Page 2</h1>
            <ul>
            {
                
                this.state.data.map( (d)=> {
                    return <li>{d.name}</li>
                })
            }
            </ul>
        </div>
    }
}