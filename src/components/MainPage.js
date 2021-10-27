import Button from '@restart/ui/esm/Button'
import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap'

const MainPage = () => {
    const [data, setData] = useState([])
    
    useEffect (() => {
        const getData = async () => {
            const apiKey = process.env.REACT_APP_API_KEY
            let url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${apiKey}`
            const res = await fetch (url)
            const data = await res.json()
            setData (data.articles)
        }
        getData()
    }, [])
    
    return (
        //The user can see a list of 20 news from the top headlines on the Main page.
        <div> 
            {data.map((el) => 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>data.title</Card.Title>
                <Card.Text>
                 Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            )}
        </div>
        
    )
}

export default MainPage

