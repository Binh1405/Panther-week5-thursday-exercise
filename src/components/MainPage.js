import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'

const MainPage = () => {
    const [data, setData] = useState([])
    
    useEffect (() => {
        const getData = async () => {
            const apiKey = process.env.REACT_APP_API_KEY
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
            const res = await fetch (url)
            const data = await res.json()
            setData (data.articles)
            console.log(data)
        }
        getData()
    }, [])
    
    return (
        //The user can see a list of 20 news from the top headlines on the Main page!! => only see 19 news..??
        //The user can see a news title, description, image, date of published, author, & a button which allows me to see more information about the movie. => button not link to a new site
        <div> 
            {data.map((el) => 
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={el.urlToImage}/>
                <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                    {el.description}
                </Card.Text>   
                <Card.Text>
                 {el.content}
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

