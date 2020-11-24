import React, { Component } from 'react'
import "../Css/Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faLock} from "@fortawesome/free-solid-svg-icons";




class Login extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
    
    handleSubmit(event) {
        event.preventDefault();
        

    }

    render(){
        return (
            <div className="login">
                <div className="login-box">
                    <h2>Login</h2>
                    
                    <div className="textbox">
                        <FontAwesomeIcon icon={faUser} />
                        <input className="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}  placeholder="Username" required/>
                    </div>
                    
                    <div className="textbox">
                        <FontAwesomeIcon icon={faLock} />
                        <input className="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}  placeholder="Password" required/>
                    </div>
                        
                    <input className="submit" type="submit" onClick={this.handleSubmit} value="Sign In"/>
                
                </div>
            </div>

        )
    }
}

export default Login
