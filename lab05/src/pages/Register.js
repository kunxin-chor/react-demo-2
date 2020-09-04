import React from "react"

export default class Register extends React.Component {
    
    state = {
        username:"",
        email:"",
        gender:'m'
    }
    
    register = () => {
        this.props.updateUserCallback({
            username: this.state.username,
            email: this.state.email,
            gender: this.state.gender
        })
        this.props.history.push('/summary');
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render() {
        return (<div>
            <h1>Register</h1>
            <div>
                <label>Username</label>
                <input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name='email' onChange={this.handleChange} value={this.state.email}/>
            </div>
            <div>
                <input type='radio' value='m' name='gender' onChange={this.handleChange} checked={this.state.gender==='m'}/>Male
                <input type='radio' value='f' name='gender' onChange={this.handleChange} checked={this.state.gender==='f'}/>Female
            </div>
            <button onClick={this.register}>Register</button>
            
        </div>)
    }
}