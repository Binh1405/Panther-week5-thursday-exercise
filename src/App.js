import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarNews from './components/NavbarNews'
import { Route, Switch } from 'react-router';
import BusinessPage from './pages/BusinessPage';
import SportsPage from './pages/SportsPage';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';


function App() {
  
// useEffect(() => {
//   const filter = data.filter((article) => article.title.includes(query))
//   setFilterData(filter)   
// }, [query, data])

  return (
    <div className="App">
      <NavbarNews/>
      <Switch>
        <Route path="/business" component={BusinessPage}></Route>
        <Route path="/sports" component={SportsPage}></Route>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/search/:search" component={SearchPage}></Route> 
        </Switch>
      
    </div>
  );
}

export default App;
