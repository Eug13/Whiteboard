import React from 'react'
import Link from 'next/link'
import Logo from '../components/Logo'

const links = [
  { href: '/wod', label: 'Wod' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Login' },
  { href: '/profile', label: 'Profile' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
    <Logo name="whiteboard crossfit rivne"/>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        margin: 0 5px;
        padding: .55em 2em;
        color: #282828;
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
    `}</style>
  </nav>
)

export default Nav
