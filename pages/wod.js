import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { fetchCircuits } from '../components/api'

class Wod extends React.Component{
    state ={
        wod:null
    }
    componentDidMount(){
        // const data = fetchCircuits();
        // data.then(res => {
        //     this.setState({wod:res})
        // })
    }
    render(){
        const wod = this.state.wod;
        console.log('wod => ',wod)
        return(
            <div className='wod'>
            <Head>
              <title>Home</title>
              <link rel='icon' href='/favicon.ico' />
              </Head>
          {this.props.small ? 
          <div>
              <div className='row'>
                  <h1>Hello wod!</h1>
                  <ul>
                  {/* {wod ? 
                   wod.map(i =>
                     (<li>{i.name}</li>)) 
                   : null } */}
                  </ul>
              </div>
          </div>
          :
          <div>
              <Nav/>
                  <div className='row'>
                      <h1>Hello wod!</h1>
                  </div>
         </div>
          }
          <style jsx>{`
          .wod{
              background-color:#ba0c2f;
              color:white;
              padding:10px;
          }
            .row {
             width:400px;
            }
          `}</style>
        </div>
      )
    }
}

export default Wod