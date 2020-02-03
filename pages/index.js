import React from 'react'
import Head from 'next/head'
import Wod from '../pages/Wod'
import Profile from '../pages/profile'
import Nav from '../components/nav'
import Stat from '../components/stat'
import Burger from '../components/Burger'

class Home extends React.Component{

  state = {
    screenWidth:null,
    boxOrder:'box',
    lang:'ua',
    gym:null
  }
   
   txt = require(`../components/Dict/${this.state.lang}/${this.state.lang}.json`);
  componentDidMount(){
    if(window){
      let box = 'boxw';
      window.innerWidth <= 576 ? box = 'box' : box = 'boxw';
      this.setState({
        screenWidth:window.innerWidth,
        boxOrder: box
      });
    }
  }

  handleLogin(){
   console.log('login is handled!')
  }

  handleGYM=(g)=>{
    this.setState({
      gym:g
    });
console.log('gym ', g);
  }

render(){
return(
  <div>
    <Head>
      <title>REDLINE</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav txt = {this.txt} gym={this.state.gym}/>
    <div className='container'>
      <div className='row'>
        <div className={`${this.state.boxOrder}1`}>
         <Wod 
            small 
            screen = {this.state.screenWidth}
            box = {this.state.boxOrder}
         />
        </div>
        <div className={`${this.state.boxOrder}2`}>
         <Stat 
            screen = {this.state.screenWidth} 
            box = {this.state.boxOrder}
         />
        </div>
        <div className={`${this.state.boxOrder}3`}>
          <Profile 
            small 
            screen = {this.state.screenWidth} 
            box = {this.state.boxOrder}
            login = {this.handleLogin.bind(this)}
            txt = {this.txt}
            handleGYM = {this.handleGYM}
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
      }

      .box1 { order: 2; }
      .box2 { order: 3; }
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
