import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Login from '../components/login'

const today = new Date().toLocaleDateString().split('/');

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGYMcheck = (e) => {
    this.props.handleGYM(e.target.innerText.toLowerCase());
    console.log(e.target.innerText.toLowerCase());
  }
  render() {
    return (
      <div className='profile'>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {this.props.small ?
          <div className={this.props.box}>
            <div className='card'>
              <h1>{this.props.txt.login}</h1>
              <p>
                <span className='date'><b>{today[0]}/{today[1]}</b><br /><b>{today[2]}</b></span><br />
                {!this.props.isChosen ?this.props.txt.login_msg : null}</p>
            { !this.props.isChosen ?
              <div className='card_menu'>
                <span className='card logo_btn' onClick={(e) => this.handleGYMcheck(e)}>CrossFit Rivne</span>
                <span className='card logo_btn' onClick={(e) => this.handleGYMcheck(e)}>ZAWOD</span>
              </div>
              : null}
              <br />
              <Login login={this.props.login} txt={this.props.txt} />
            </div>
          </div>
          :
          <div>
            <Nav />
            <div className='row'>
              <h1>Hello profile there!</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <br />
              <Login txt={props.txt} />

            </div>
          </div>
        }
        <style jsx>{`
    h1{
        margin:0;
        text-transform:uppercase;
        text-align:right;
        font-weight:800;
    }
    p{
      color:#737373;
    }
    b{
      color:#a0a0a04f;
      font-weight:900;
      font-size: 30px;
      position: relative;
      top: -38px;
    }
    .profile{
        color:#333333;
        padding:10px;
    }
      .boxw {
        width:450px;
      }
      .box {
        width:100%;
      }
      .card{
        background-color:white;
        border-radius:4px 4px 4px 4px;
        box-shadow: 0px 0px 5px 1px #99999966;
        padding:20px;
        font-size:14px;
        line-height:24px;
      }
      .card_menu{
        margin:20px 0;
        display:flex;
        justify-content:space-between;
      }
      .logo_btn{
        width:34%;
      }
      .logo_btn:hover{
        cursor:pointer;
        background-color:#ba0c2f;
        color:white;
      }
    `}</style>
      </div>
    );
  }
}
export default Profile