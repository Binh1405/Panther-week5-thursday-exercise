import React, { useEffect, useState } from 'react'
import MainPage from '../components/MainPage'
import Loader from '../components/Loader'

const BusinessPage = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect (() => {
        const getData = async () => {
            const apiKey = process.env.REACT_APP_API_KEY
            let url = `https://newsapi.org/v2/top-headlines?category=business&page=${currentPage}&apiKey=${apiKey}`
            const res = await fetch (url)
            const data = await res.json()
            setData (data.articles)
            setTotalPage(Math.ceil(data.totalResults/20));
            // setFilterData(data.articles)
            console.log(data)
            setLoading(false)
        }
        getData()    
    }, [currentPage])

    return (
        <div>
            {
            loading ? <Loader loading={loading} setLoading={setLoading}/> : <MainPage data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
        }
        </div>
    )
}

export default BusinessPage
