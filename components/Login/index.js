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
        <div className="login_box">
          <label htmlFor="login">{this.props.txt.entr_card}</label>
          <input type="text" name="login" id="login" onChange={(e) => this.handleLogin(e)} />
          <br />
          <label htmlFor="password">{this.props.txt.entr_pass}</label>
          <input type="password" name="password" id="password" onChange={(e) => this.handlePassword(e)} />
          <br />
          <button className="butt" onClick={() => this.handleSubmit()}>{this.props.txt.login}</button>
        </div>

        <style jsx>{`
        .login_box{
          background-color:white;
          border-radius:4px 4px 4px 4px;
          box-shadow: 0px 0px 5px 1px #99999966;
          padding:20px;
          font-size:14px;
          line-height:24px;
          }
          label{
            font-size: 11px;
            padding-left: 2px;
            color: #999999;
          }
          input{
            background-color:white;
            border:1px solid #fff;
            border-radius:4px 4px 4px 4px;
            box-shadow: 0px 0px 5px 1px #99999966;
            padding:10px 10px;
            width:92%;
            margin-bottom:20px;
          }
          input:focus {
            outline: none;
          }
          .butt{
            text-transform:uppercase;
            background-color:#fff;
            border:1px solid #fff;
            text-align:center;
            border-radius:4px 4px 4px 4px;
            box-shadow: 0px 0px 5px 1px #ba0c2f55;
            padding:10px 10px;
            width:100%;
            color:#ba0c2f;
            margin-top:20px;
          }
          .butt:hover{
            background-color:#ba0c2f;
            border:1px solid #ba0c2f;
            color:#fff;
            cursor:pointer;
          }

        `}</style>
      </div>
    )
  }
}

export default Login;