import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Login from '../components/login'

const Profile = (props) => (
  <div className='profile'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        </Head>
    {props.small ? 
    <div className={props.box}>
        <div className='card'>
            <h1>Hello profile there!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
           <br/>
           <Login login={props.login} />
        </div>
    </div>
    :
    <div>
        <Nav/>
            <div className='row'>
            <h1>Hello profile there!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
           <br/>
           <Login/>

            </div>
   </div>
    }
    <style jsx>{`
    h1{
        margin:0;
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
    `}</style>
  </div>
)

export default Profile