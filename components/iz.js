import fetch from 'isomorphic-fetch'

function Page({ stars }) {
  return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  return { stars: json }
}

export default Page