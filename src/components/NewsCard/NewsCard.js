
import React from 'react';
import "./newscard.css"

const NewsCard = ({article: { description , publishedAt,source, title, url, urlToImage,author},i,activeArticle}) => {
  return (

    <div className={`news ${activeArticle===i? `activeCard` : ''}`}>
    <img className='news-img' src={urlToImage} ></img>
    <h1 className="news__title">{title}</h1>
    <p className="news__desc">{description}</p>
    <span className="news__author">{author}</span> <br />
    <span className="news__published">{(new Date(publishedAt)).toDateString()}</span>
    <span className="news__source">{source.name}</span>
    <br></br>
    
    <a class="btn" role="button" href={url} target="_blank">Learn More</a>
  </div>
  )
}

export default NewsCard


