import React from 'react'
import { Card, Button } from 'react-bootstrap'
import NewsPagination from './NewsPagination'

const MainPage = ({data, setData, currentPage, setCurrentPage, totalPage, setTotalPage}) => {
    console.log("data", data)

    return (
        
        <div className="news-display">  

            {/* <NewsPagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={totalPage}/>  */}

            <div>
        {data.map((article) => (
          <div key={article.title} className="news-card">
            <h3>{article.title}</h3>
          </div>
        ))}
      </div> 
            
{/* //                  <Card style={{ width: '40rem' }}>
//                 <Card.Img variant="top" src={el.urlToImage}/>
//                 <Card.Body>
//                 <Card.Title>Title: {el.title}</Card.Title>
//                 <Card.Text> Description: {el.description}
//                 </Card.Text>   
//                 <Card.Text> Content: {el.content}
//                 </Card.Text>
//                 <Card.Text>Date of publish: {el.publishedAt} </Card.Text>
//                 <Card.Text>Author: {el.author} </Card.Text>
//                 <Button variant="outline-success" size="sm" href="el.url">Link</Button>
//                 </Card.Body>
//                 </Card> */}
        </div>   
    )
}

export default MainPage

