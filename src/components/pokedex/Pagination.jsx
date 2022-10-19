import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, pagesLength, setPage}) => {

    const pagesPerBlock = 8 
    const currentBlock = Math.ceil(page / pagesPerBlock) //conjunto de paginas
    const blockLength = Math.ceil(pagesLength/pagesPerBlock)

    const arrayPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock

    for (let i = initialPage; i <= limitPage; i++) {
        arrayPages.push(i)
    }

    const handlePrev = () =>{
        setPage(page - 1)
    }
    const handleNext = () =>{
        setPage(page + 1)
    }

    const handlepage = currentPage => {
        setPage(currentPage)
    }

  return (
    <div className='pagination'>
        {
            page > 1 &&
            <div onClick={handlePrev} className='pagination__prev pagination__active'>&#60;</div>
            
        }
            <ul className='pagination__container'>
                {
                    arrayPages.map(e => (
                        <li 
                            key={e} 
                            className={`pagination__page ${page == e && 'pagination__active'}`}
                            onClick={() => handlepage(e)}
                        >
                        {e}
                        </li>
                    ))
                }
            </ul>
        {
            page < pagesLength &&
            <div onClick={handleNext} className='pagination__next pagination__active'>&#62;</div>
        }    
    </div>
  )
}

export default Pagination