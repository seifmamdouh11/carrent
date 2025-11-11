import React from 'react'
import './Search.css'
export default function Search() {
    return (
        <>
            <div className="container" data-aos="fade-down">
                <div className="input-group mx-auto w-75 ">
                    <input type="text" className="form-control" placeholder="Search For Car" />
                    <button className="btn btn-outline-dark" type="button" id="searchBtn">Search</button>
                </div>
            </div>
        </>
    )
}
