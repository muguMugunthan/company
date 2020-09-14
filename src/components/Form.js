import React, { Component } from 'react'
import './css/todo.css'
import logo2 from './css/logo2.jpg'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div >
                <img src={logo2} alt="wev"  align="left"/>
                <form onSubmit={this.handleSubmit}>
                    <h1>Be A Volunteer Today</h1>
                    <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="Enter Your name" /><br />
                    <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Enter Your email" /><br />
                     <input type="message" value={this.state.message} onChange={this.messagehandler} placeholder="Write Your message" /><br />
                    
                    
                    <button type="submit" > SEND </button>
                </form>

            </div>
            
        )
    }
}

export default Form