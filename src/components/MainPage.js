import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import NewsPagination from './NewsPagination'

const MainPage = ({data, currentPage, setCurrentPage, totalPage}) => {

    return (
        
        <div> 
            <NewsPagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={totalPage}/> 
            {data.map((el) => 
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={el.urlToImage}/>
                <Card.Body>
                <Card.Title>Title: {el.title}</Card.Title>
                <Card.Text> Description: {el.description}
                </Card.Text>   
                <Card.Text> Content: {el.content}
                </Card.Text>
                <Card.Text>Date of publish: {el.publishedAt} </Card.Text>
                <Card.Text>Author: {el.author} </Card.Text>
                <Button variant="outline-success" size="sm" href="el.url">Link</Button>
                </Card.Body>
                </Card>
            )}
        </div>
        
    )
}

export default MainPage

