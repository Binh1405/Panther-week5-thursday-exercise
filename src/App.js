import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState, useEffect} from "react"
import MainPage from './components/MainPage'
import NavbarNews from './components/NavbarNews'
import SideBar from './components/SideBar'

function App() {
  const [category, setCategory] =useState("business")
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [query, setQuery] = useState("")
  const [filterData, setFilterData] = useState([])
  
  useEffect (() => {
    const getData = async () => {
        const apiKey = process.env.REACT_APP_API_KEY
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&page=${currentPage}&apiKey=${apiKey}`
        const res = await fetch (url)
        const data = await res.json()
        setData (data.articles)
        setTotalPage(Math.ceil(data.totalResults/20));
        setFilterData(data.articles)
        console.log(data)
    }
    getData()    
}, [category, currentPage])
console.log("query", query)

useEffect(() => {
  const filter = data.filter((article) => article.title.includes(query))
  setFilterData(filter)   
}, [query, data])

  return (
    <div className="App">
      <NavbarNews query={query} setQuery={setQuery}/>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <SideBar category={category} setCategory={setCategory}/>
          </div>
          <div className="col-9">
          <MainPage data={filterData} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
