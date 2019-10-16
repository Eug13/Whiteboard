import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Profile = (props) => (
  <div className='profile'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        </Head>
    {props.small ? 
    <div>
        <div className='row'>
            <h1>Hello profile!</h1>
        </div>
    </div>
    :
    <div>
        <Nav/>
            <div className='row'>
                <h1>Hello profile!</h1>
            </div>
   </div>
    }
    <style jsx>{`
    .profile{
        background-color:#ddd;
        color:white;
        padding:10px;
    }
      .row {
       width:400px;
      }
    `}</style>
  </div>
)

export default Profile