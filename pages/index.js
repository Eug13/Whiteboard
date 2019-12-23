import React from 'react'
import Head from 'next/head'
import Wod from '../pages/Wod'
import Profile from '../pages/Profile'
import Nav from '../components/nav'
import Stat from '../components/Stat'
import Burger from '../components/Burger'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='container'>
      <div className='row'>
        <div className='box1'>
         <Wod small />
        </div>
        <div className='box2'>
         <Stat />
        </div>
        <div className='box3'>
          <Profile small />
        </div>
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
        flex-wrap:wrap;
        justify-content: space-between;
        border-top:1px solid #ddd;
      }
      .box1 { order: 2; }
      .box2 { order: 1; }
      .box3 { order: 3; }
    `}</style>
  </div>
)

export default Home
