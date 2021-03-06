import React from 'react'
import { Pagination } from 'react-bootstrap';

const NewsPagination = ({setCurrentPage, currentPage, totalPage}) => {
  
    const handleFirst=() =>{
        setCurrentPage(1)
    }
    const handlePrev=() =>{
        setCurrentPage(currentPage-1)
    }
    const handleNext=() =>{
        setCurrentPage(currentPage+1)
    }
    const handleLast=() =>{
        setCurrentPage(totalPage)
    }
    const handleNumber=(number) =>{
        setCurrentPage(number)
    }
    return (
        
            <Pagination>
                <Pagination.First disabled={currentPage===1} onClick={handleFirst}/>
                <Pagination.Prev disabled={currentPage===1} onClick={handlePrev}/>
                <Pagination.Item active={currentPage===1} value={1} onClick={() => handleNumber(1)}>{1} </Pagination.Item>
                {currentPage>2? (
                    <>
                        <Pagination.Ellipsis />     
                    </>
                ):null}
                
                {currentPage<totalPage && currentPage>1?(
                    <Pagination.Item active onClick={handleNumber} value={currentPage}>{currentPage}</Pagination.Item>
                ):null}

                {totalPage > currentPage +1 ? <Pagination.Ellipsis />:null}
                  
                <Pagination.Item active = {currentPage===totalPage} onClick={() => handleNumber(totalPage)} value={totalPage}>{totalPage}</Pagination.Item>
                <Pagination.Next disabled={currentPage===totalPage} onClick={handleNext}/>
                <Pagination.Last disabled={currentPage===totalPage} onClick={handleLast}/>
            </Pagination>
    )
}

export default NewsPagination
