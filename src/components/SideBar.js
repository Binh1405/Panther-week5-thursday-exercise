import React from 'react'
import {useState, useEffect} from "react"
import { Button } from 'react-bootstrap'

const SideBar = ({category, setCategory}) => {
    
    const categoryArr = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    const handleCategory = (e) => {
        setCategory (e.target.value)
    }
  
    return (
        <div className="d-flex flex-column">
                {categoryArr.map((el) => (
                <Button className="mt-4" key={el} value={el} onClick={handleCategory}> {el} </Button>))}
        </div>
    )
}

export default SideBar
