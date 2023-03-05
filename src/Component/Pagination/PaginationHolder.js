import React from 'react'
// import Pagination from 'react-bootstrap/Pagination';
import { Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const PaginationHolder = ({getPage,page}) => {

  const handlePageClick=(data)=>{
    console.log(data.selected + 1)
    getPage(data.selected + 1)
  }

  return (
    <Row className='justify-content-center text-center' >
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={page}
        previousLabel="< previous"
        // renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center p-3 '}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        breakClassName={'page-link'}
        breakLinkClassName={'page-item'}
        previousClassName={'page-item'}
        nextClassName={'page-link'}
        previousLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </Row>
  )
}

export default PaginationHolder