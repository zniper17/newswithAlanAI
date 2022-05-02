import React,{useEffect,useState} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import {GrLinkPrevious} from 'react-icons/gr'


const alanKey ='504d804ab166aa83bbfb71cad022b4682e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
const [newsArticles,setNewsArticles]=useState([])
const [activeArticle,setActiveArticle]=useState(-1)
function handleClick(){
   setNewsArticles([])
}



useEffect(() => {
    alanBtn({
        key:alanKey,
        onCommand: ({command,articles}) => {
            if(command === 'newHeadlines'){
           setNewsArticles(articles);
           setActiveArticle(-1)
            } else if(command === 'highlight'){
                setActiveArticle((prevActiveArticle) => prevActiveArticle +1)
                
            }
        }
    })
},[])

    return (
        <div>
      
     <GrLinkPrevious size={50} className="go-back" onClick={handleClick}></GrLinkPrevious>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App;