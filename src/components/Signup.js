
import React, { Component } from 'react'

class Signup extends Component {
    
    state = {
      username: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault()

        if (this.state.password === this.state.password_confirmation) {

            fetch('https://groundbreaker-backend-api.herokuapp.com/users', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => {
                return response.json()
            })
            .then(userObj => this.props.loginUser(userObj))
            // .then(investmentObj => this.props.addInvestment(investmentObj))
        } else {
            window.alert("password confirmation must match")
        }
    }
    
    
    render() {
        console.log(this.state)
        return (
            <div>
                <form className="signupForm" onSubmit={this.submitHandler}>
                    <input
                        type="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                    />

                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.onChange}
                        required
                    />

                    <button type="submit" style={{fontSize: "18px"}}>Register</button>
                </form>
            </div>
        )
    }
}

export default Signup
