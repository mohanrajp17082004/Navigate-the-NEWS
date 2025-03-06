import React, { useEffect, useState } from 'react'
import '../styles/CategoryPage.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Pagination, Spinner } from 'react-bootstrap';

const CategoryPage = () => {

  const navigate = useNavigate();

  const [categoryNews, setCategoryNews] = useState([]);

  const {id} = useParams();
    useEffect(() => { 
      if (id){
        fetchNews(id) 
      }
      }, [window.location.pathname])
    
      const fetchNews = async (id) => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=${id}&apiKey=37306aca596542f0a8402978de3d4224`);
          setCategoryNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

      const [activePage, setActivePage] = useState(1);
      let items = [];
      for (let number = 1; number <= (categoryNews.length / 21); number++) {
        items.push(
          <Pagination.Item key={number} active={number === activePage} onClick={()=> setActivePage(number)} >
            {number}
          </Pagination.Item>,
        );
      }

  return (
    <div className='category-page'>
      
      <div className="category-header">
        <div>
          <p onClick={()=> navigate("/")} >Home</p>
          <p>/</p>
          <p>{id}</p>
        </div>
        <h3>{id}</h3>
      </div>

      {categoryNews && categoryNews.length > 0 ?
      
        <div className="category-articles">
          
          {categoryNews.map((article, index) => {
            return index >= (activePage * 21) - 21 && index < activePage * 21 &&
           (

            <div className="category-article"  key={index} onClick={()=> window.open(article.url, '_blank')}>  
                  <img src={article.urlToImage} alt="article " />
                  <p>{article.title.slice(0,40)}...</p>
                 
            </div>

          )})}

          
        </div>
      :
      <div className="spinners">
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
      </div>}

      <div className="pagination-container">
        <p>Page: </p>
        <Pagination>
          {items}
        </Pagination>
      </div>
    </div>
  )
}

export default CategoryPage