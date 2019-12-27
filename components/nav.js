import React from 'react'
import Link from 'next/link'
import Logo from '../components/Logo'
import Burger from '../components/Burger'


const links = [
  { href: '/', label: 'Home' },
  { href: '/wod', label: 'Wod' },
  // { href: '/about', label: 'About' },
  { href: '/profile', label: 'Profile' },
  { href: '/login', label: 'Login' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})


const Nav = ( ) => {
  const [open, setOpen] = React.useState(false);

return (
  <nav>
    <ul>
    <Logo name="redline cft rivne"/>
      <Burger open={open} setOpen={setOpen}/>
    </ul>
    { open ? <div className='mobileMenu'>
      { links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </div> : null }
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background-color: #212529;
      }
      ul {
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        margin:0;
      }
      nav > ul {
        padding: 0 16px 7px 0;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        margin: 0 5px;
        padding: .55em 2em;
        color: rgba(255,255,255,.5);
        text-decoration: none;
        font-weight: 400;
        font-size: 1.0rem;
        text-transform:uppercase;
        border-left:2px solid transparent;
        border-right:2px solid transparent;
      }
      a:hover{
        border-left:2px solid #ba0c2f;
        border-right:2px solid #ba0c2f;
        color:#ba0c2f;
        border-radius:4px 4px 4px 4px;
      }

      .mobileMenu{
        border-top:1px solid rgba(255,255,255,.5);
        padding: 10px 0;
        z-index:1;
      }
      .mobileMenu li a{ 
        display:inline-block;
        text-align: center; 
        width: 100%; 
      }
      .mobileMenu li a:hover{ 
        cursor:pointer;
        color:white;
        background-color:#ba0c2f;
      }
    `}</style>
  </nav>
)}

export default Nav
