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
        const screen = this.props.screen;
        const boxStyle = this.props.box;
        console.log('wod => ',wod)
        return(
            <div className='wod'>
            <Head>
              <title>Home</title>
              <link rel='icon' href='/favicon.ico' />
              </Head>
          {this.props.small ? 
          <div>
              <div className={boxStyle}>
                  <h1>Hello wod!</h1>
                  <ul>
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
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
                  <div className='row1'>
                      <h1>Hello wod!</h1>
                  </div>
         </div>
          }
          <style jsx>{`
          .wod{
              background-color:#ba0c2f;
              color:white;
              border-radius:4px 4px 4px 4px;
              box-shadow: 0px 0px 5px 1px #99999966;
              padding:20px;
              font-size:14px;
              line-height:24px;
              margin:10px;
          }
            .box{
             width:100%;
            }
            .boxw {
                width:450px;
               }
          `}</style>
        </div>
      )
    }
}

export default Wod