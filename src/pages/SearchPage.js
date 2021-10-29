import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainPage from '../components/MainPage'

const SearchPage = () => {
    const params=useParams()
    const {search} = params
    const [data, setData] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    console.log("search", search)

    useEffect(() => {
        const fetchData = async () =>{
            const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
            console.log("url", url)
            const res = await fetch(url)
            const data = await res.json()
            setData(data.articles)
        };
         fetchData()
    }, [search])
    return (
        <div>
            this is search page
        <MainPage data={data} setData={setData} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} setTotalPage={setTotalPage}/>
        </div>
    )
}

export default SearchPage
