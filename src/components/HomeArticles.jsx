import React, { useContext } from 'react'
import '../styles/HomeArticles.css'
import { GeneralContext } from '../context/GeneralContext'
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const HomeArticles = () => {

  const navigate = useNavigate();

  const {businessNews, technologyNews, politicsNews} = useContext(GeneralContext)

  return (

    <div className='home-articles-container'> 

      <div className='home-articles-body'>

            <div className="home-articles-head">
              <h2>Business</h2>
              <p onClick={()=> navigate('/category/business')} >View all</p>
            </div>

            {businessNews.length > 0 ?
            
              <div className="home-articles">
                  
                  {businessNews.map((news, index)=>{
                    return index < 3 && (

                      <div className="home-article" onClick={()=> window.open(news.url, '_blank')}>
                          <img src={news.urlToImage} alt="placeholder" />
                          <p>{news.title}</p>
                      </div>
                    )
                  })}
                  
              </div>
            :
            
          <div className="spinners">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
        </div>
        }
      </div>


      <div className='home-articles-body'>

            <div className="home-articles-head">
              <h2>Technology</h2>
              <p onClick={()=> navigate('/category/technology')}>View all</p>
            </div>
            {technologyNews.length > 0 ?
            
            <div className="home-articles">
                
                {technologyNews.map((news, index)=>{
                  return index < 3 && (

                    <div className="home-article" onClick={()=> window.open(news.url, '_blank')}>
                        <img src={news.urlToImage} alt="placeholder" />
                        <p>{news.title}</p>
                    </div>
                  )
                })}
                
            </div>
          :
          
          <div className="spinners">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
          </div>
          }
      </div>


      <div className='home-articles-body'>

            <div className="home-articles-head">
              <h2>Politics</h2>
              <p onClick={()=> navigate('/category/politics')}>View all</p>
            </div>
            {politicsNews.length > 0 ?
            
            <div className="home-articles">
                
                {politicsNews.map((news, index)=>{
                  return index < 3 && (

                    <div className="home-article" onClick={()=> window.open(news.url, '_blank')}>
                        <img src={news.urlToImage} alt="placeholder" />
                        <p>{news.title}</p>
                    </div>
                  )
                })}
                
            </div>
          :
          <div className="spinners">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
          </div>
          }
      </div>


    </div>
  )
}

export default HomeArticles