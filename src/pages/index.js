import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p style={{color:`blue`}}>Welcome to your new Gatsby site.</p>
    <p style={{color:`tomato`}}>Now go build something great.</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <Link to="/page-2/">Go to page 2</Link>
    <div>
     <Link to="/counter/">Counter</Link>
    </div>
  </div>
)

export default IndexPage
