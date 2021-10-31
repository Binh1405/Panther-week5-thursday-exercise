import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainPage from '../components/MainPage'
import Loader from '../components/Loader'

const SearchPage = () => {
    const params=useParams()
    const {search} = params
    const [data, setData] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [loading, setLoading] = useState(true)
    
    console.log("search", search)

    useEffect(() => {
        const fetchData = async () =>{
            const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
            console.log("url", url)
            const res = await fetch(url)
            const data = await res.json()
            setData(data.articles)
            setLoading(false)
        };
         fetchData()
    }, [search])
    return (
        <div>
        {
        loading ? <Loader loading={loading} setLoading={setLoading}/> : <MainPage data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
    }
    </div>
    )
}

export default SearchPage
