import React, { useEffect, useState } from 'react'
import '../styles/TopStories.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import { Spinner } from 'react-bootstrap';

const TopStories = () => {

  const navigate = useNavigate();

  const {topNews} = React.useContext(GeneralContext)


  return (
    <div className="top-stories-container">

      <h3>Top Stories</h3>

      {topNews && topNews.length > 0 ? 
      
      <div className="top-stories">

            {topNews.map((article, index) => {
                return index > 5 && index < 16 && (
                    <div className="top-story" key={index} onClick={()=> window.open(article.url, '_blank')} >
                        <img src={article.urlToImage} alt="placeholder" />
                        <p>{article.title.slice(0,40)}...</p>
                    </div>
                )
            }

            )}
          
          <button onClick={()=> navigate('/category/trending')} >View more</button>

      </div>

       :
       <div className="spinners">
         <Spinner animation="grow" size="sm" />
         <Spinner animation="grow" size="sm" />
         <Spinner animation="grow" size="sm" />
       </div>}

    </div>
  )
}

export default TopStories