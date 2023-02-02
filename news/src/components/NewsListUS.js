import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItemUS } from '.'


const NewsListUS = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(` https://newsapi.org/v2/top-headlines?country=us&apiKey=c30ef10b8be541b1bb23a0e30865cac6`)
            setArticles(response.data.articles)
            console.log(response.data.articles)
        }

        getArticles()
    }, [])
    return (
        <div style={{ padding: 30 }}>
            <a style={{ fontSize: 50, textAlign: "center", display: "block"}}>Kumpulan Berita US</a>
            {articles.map(article => {
                return(
                    <NewsItemUS 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsListUS
