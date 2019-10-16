import React from 'react'
import Head from 'next/head'
import Wod from '../pages/Wod'
import Profile from '../pages/Profile'
import Nav from '../components/nav'
import Stat from '../components/Stat'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='container'>
      <div className='row'>
       <Wod small />
       <Stat />
       <Profile small />
      </div>
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        color: #333;
      }
      .row {
        margin: 5px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top:1px solid #ddd;
      }
    `}</style>
  </div>
)

export default Home
