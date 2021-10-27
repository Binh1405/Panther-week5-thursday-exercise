import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState, useEffect} from "react"
import MainPage from './components/MainPage'
import NavbarNews from './components/NavbarNews'
import SideBar from './components/SideBar'
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <NavbarNews/>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <SideBar/>
          </div>
          <div className="col-9">
          <MainPage/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
