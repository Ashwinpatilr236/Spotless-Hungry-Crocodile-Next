import React from 'react'
import Head from 'next/head'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - Spotless Hungry Crocodile</title>
          <meta
            property="og:title"
            content="About-Us - Spotless Hungry Crocodile"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
