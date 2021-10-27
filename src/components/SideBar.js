import React from 'react'
import {useState, useEffect} from "react"
import { Button } from 'react-bootstrap'

const SideBar = () => {
    const [category, setCategory] = useState([])
    const [news, setNews] = useState("")
    
    useEffect(() => {
        const getData = async () => {
            const apiKey = process.env.REACT_APP_API_KEY
            const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
            const res = await fetch(url)
            const data = await res.json()
            console.log("news on side bar", data)
            setNews(data.articles)
            console.log("news", news)
        }
        getData()
        }, [category])

    const handleQuery = (event) =>{
        setCategory(event.target.value)
    }

    return (
        <div>
            <div> {news} </div>
            <Button variant="outline-primary" onClick={handleQuery} value="business" >Business</Button>
            <Button variant="outline-secondary" onClick={handleQuery} value="entertainment" >Entertainment</Button>
            <Button variant="outline-success" onClick={handleQuery} value="general" >General</Button>
            <Button variant="outline-warning" onClick={handleQuery} value="health" >Health</Button>
            <Button variant="outline-danger" onClick={handleQuery} value="Science" >Science</Button>
            <Button variant="outline-info" onClick={handleQuery} value="Sports" >Sports</Button>
            <Button variant="outline-light" onClick={handleQuery} value="Technology" >Technology</Button>
        </div>
    )
}

export default SideBar
