import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Second Hand Blank Goose</title>
        <meta property="og:title" content="Second Hand Blank Goose" />
      </Helmet>
      <div className="home-container2">
        <span className="home-text10">
          <span>YellowGaming</span>
          <br></br>
        </span>
      </div>
      <div className="home-container3">
        <div className="home-container4">
          <div className="home-container5">
            <img alt="image" src="/assets/rbs.png" className="home-image1" />
            <a
              href="https://yellowgaming.github.io/game1"
              className="home-link1"
            >
              Retro Bowl Standard
            </a>
            <a
              href="https://yellowgaming.github.io/game1"
              className="home-link2 button"
            >
              <span className="home-text13">
                <span>Play</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="home-container6">
            <img alt="image" src="/assets/rbc.png" className="home-image2" />
            <a
              href="https://yellowgaming.github.io/game1"
              className="home-link3"
            >
              <span>
                Retro
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                Bowl
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>College</span>
            </a>
            <a
              href="https://yellowgaming.github.io/game2"
              className="home-link4 button"
            >
              <span className="home-text19">
                <span>Play</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="home-container7">
            <img alt="image" src="/assets/sls.png" className="home-image3" />
            <a
              href="https://yellowgaming.github.io/game3"
              className="home-link5"
            >
              Super Liquid Soccer
            </a>
            <a
              href="https://yellowgaming.github.io/game3"
              className="home-link6 button"
            >
              <span className="home-text22">
                <span>Play</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="home-container8">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd5_S33ZmJkpWp2wahe6uJqMBh9SOOa1mNtqnsd4RbIz7JxYg/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link7"
        >
          Request a game
        </a>
      </div>
      <img src="/assets/gta.webp" alt="image" className="home-image4" />
    </div>
  )
}

export default Home
