import React from 'react'
import Head from 'next/head'
import Wod from '../pages/Wod'
import Profile from '../pages/Profile'
import Nav from '../components/nav'
import Stat from '../components/Stat'
import Burger from '../components/Burger'

class Home extends React.Component{

  state = {
    screenWidth:null,
    boxOrder:'boxw'
  }

  componentDidMount(){
    if(window){
      console.log('width',window.innerWidth)
      let box = 'boxw';
      window.innerWidth <= 576 ? box = 'box' : box = 'boxw';
      this.setState({
        screenWidth:window.innerWidth,
        boxOrder: box
      });
    }
  }
render(){
return(
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='container'>
      <div className='row'>
        <div className={`${this.state.boxOrder}1`}>
         <Wod 
            small 
            screen = {this.state.screenWidth} 
         />
        </div>
        <div className={`${this.state.boxOrder}2`}>
         <Stat 
            screen = {this.state.screenWidth} 
         />
        </div>
        <div className={`${this.state.boxOrder}3`}>
          <Profile 
            small 
            screen = {this.state.screenWidth} 
          />
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

      .box1 { order: 3; }
      .box2 { order: 2; }
      .box3 { order: 1; }

      .boxw1 { order: 1; }
      .boxw2 { order: 2; }
      .boxw3 { order: 3; }
    `}</style>
  </div>
  ) 
 }
}

export default Home
