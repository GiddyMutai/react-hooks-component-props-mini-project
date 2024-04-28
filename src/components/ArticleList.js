import React from 'react'
import Article from './Article'

function ArticleList({articles}) {
    console.log(articles)
  return (
    <main>
        {articles.map((article, index) => {
            return (
                <Article key= {index} title={article.title} date={article.date} preview={article.preview}/>
            )
        })}
    </main>
  )
}

export default ArticleList