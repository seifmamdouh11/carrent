import React from 'react'

export default function Pagination({ totalPages, currentPage, onPageChange }) {
    let middlePage = Math.floor(totalPages / 2)
    let pages = [1,2,3,4,middlePage,totalPages]
    console.log('Current page:', currentPage)
    return (
        <>
        <div className="container">
        <div className="d-flex justify-content-center gap-3 mt-5">
            <button className="btn btn-outline-primary fs-5" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            {
                pages.map((page, index) =>
                    <button className={`btn fs-5 ${currentPage === page ? 'btn-primary' : 'btn-outline-primary'}`} key={index} onClick={() => onPageChange(page)}>{page}</button>
                )
            }
            <button className="btn btn-outline-primary fs-5" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
        </div>
        </>
    )
}
