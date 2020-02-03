import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      password: null
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      login:btoa(e.target.value)
    });
  }

  handlePassword = (e) => {
    e.preventDefault();
    this.setState({
      password:btoa(e.target.value)
    });
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="login">Enter your card number:</label>
          <input type="text" name="login" id="login" onChange={(e) => this.handleLogin(e)} />
          <br />
          <label htmlFor="password">Enter your password:</label>
          <input type="password" name="password" id="password" onChange={(e) => this.handlePassword(e)} />
          <br />
          <button onClick={() => this.handleSubmit()}>Login</button>
        </div>

        <style jsx>{`
        div{
          }
          
          input:focus {
            outline: none;
          }

        `}</style>
      </div>
    )
  }
}

export default Login;