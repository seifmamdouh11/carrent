import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Cars.css'
import car1 from '../../src/assets/images/car1.png'
import car2 from '../../src/assets/images/car2.png'
import car3 from '../../src/assets/images/car3.png'
import car4 from '../../src/assets/images/car4.png'
import star from '../../src/assets/images/star.png'
import passenger from '../../src/assets/images/passenger.png'
import auto from '../../src/assets/images/auto.png'
import AirConditioning from '../../src/assets/images/AirConditioning.png'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'


export default function Cars() {
    let [cars, setCars] = useState([])
    let [currentPage, setCurrentPage] = useState(1)
    let carImages = [car1, car2, car3, car4]

    let getCars = async () => {
        const response = await axios.get('https://myfakeapi.com/api/cars/')
        const availableCars = response.data.cars.filter(car => car.availability === true)
        setCars(availableCars)
    }
    useEffect(() => {
        getCars()
        return () => {
            console.log('unmount')
        }
    }, [])
    const itemsPerPage = 16
    const totalPages = Math.ceil(cars.length / itemsPerPage)
    const currentData = cars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    console.log('Current page:', currentPage)
    return (
        <>
            <div className="container py-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb  my-5 fs-5">
                        <Link className="breadcrumb-item" to="/">Home</Link>
                        <li className="breadcrumb-item active" aria-current="page">Cars</li>
                    </ol>
                </nav>
                <h4 className="popularBtn mb-5">popular rental deals</h4>
                <div className="row gy-5">
                    <h3 className="text-uppercase fw-bold fs-1 text-center mb-5">Most popular cars rental deals</h3>
                    {
                        currentData.map((car, index) =>
                            <div className="col-md-3" key={car.id}>
                                <div className="card p-3" >
                                    <img src={carImages[index % carImages.length]} alt={car.car} className="card-img-top" />
                                    <h2 className="card-title mt-4 text-uppercase fs-3">{car.car}</h2>
                                    <span className='d-flex align-items-center text-secondary'><img src={star} alt="" className='me-2 h-auto' />4.8 (2.436 reviews)</span>
                                    <div className="row mt-3 g-2">
                                        <div className="col-6 d-flex align-items-center">
                                            <img src={passenger} alt="" className="img-fluid me-2" width={20} />
                                            <span className="text-secondary">2 Passengers</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center">
                                            <img src={auto} alt="" className="img-fluid me-2" width={20} />
                                            <span className="text-secondary">Automatic</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center">
                                            <img src={AirConditioning} alt="" className="img-fluid me-2" width={20} />
                                            <span className="text-secondary">Air Condition</span>
                                        </div>
                                        <div className="col-6 d-flex align-items-center text-secondary">
                                            <i className="fa-solid fa-car " />
                                            <span className="text-secondary ms-2">Automatic</span>
                                        </div>
                                    </div>
                                    <hr className='my-3' />
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h6 className="text-secondary">Price</h6>
                                        </div>
                                        <div className="col-md-7">
                                            <h6 className="text-primary text-end">{car.price}<span className='ms-1 text-secondary'>/day</span></h6>

                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary w-100" type="button">View Details <i className="fa-solid fa-arrow-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
        </>
    )
}
