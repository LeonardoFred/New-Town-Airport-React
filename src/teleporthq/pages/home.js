import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Gray Lavish Shark</title>
        <meta property="og:title" content="Gray Lavish Shark" />
      </Helmet>
    </div>
  )
}

export default Home
