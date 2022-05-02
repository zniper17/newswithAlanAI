import React from 'react'

import NewsCard from '../NewsCard/NewsCard.js'


const NewsCards = ({articles,activeArticle}) => {

   

    const infoCards = [
        { color: '#FFFFE0', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#8FBC8F', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { color: '#6495ED', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
      ];
    if (!articles.length){
        return (
            <div>
             <div className="top-container">
            <h1>NEWS APPLICATION USING ALAN AI</h1>
            <h2>Hi! Welcome the world of News</h2>
            <p>Get into the world of news using your voice,press the blue button and see it yourself!</p>

            </div>
  <div className='intro'>
            
            {
                infoCards.map(data => {
                    return  (
                           
                        <div className="intro-box" style={{backgroundColor:data.color}}>
                        <h2 className="intro-box-title">{data.title}</h2>
                          <h3 className='intro-box-info'>{data.info}</h3>
                          
                          <h3 className='intro-box-text'>Try Saying : <br></br>
                          <br></br>
                          {data.text}</h3>
                        </div>
                    )
                })
            }
                </div>
            </div>
          
        )
    }
    return (
      <>

        <div className='all__news'>
        
         {articles.map((article,i) => (
         <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                ))}
                     
        </div>
        </>
    )
}

export default NewsCards