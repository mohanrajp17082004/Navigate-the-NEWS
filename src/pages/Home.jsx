import React from 'react'
import '../styles/Home.css'
import Hero from '../components/Hero'
import TopStories from '../components/TopStories'
import HomeArticles from '../components/HomeArticles'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className="Home">
      <Hero />

      <div className="home-components">
          <TopStories />
          <HomeArticles />
      </div>

      <NewsLetter />

    </div>
  )
}

export default Home