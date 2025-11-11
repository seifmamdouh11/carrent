import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from '../Search/Search'
import './SearchCars.css'
import car1 from '../../src/assets/images/car1.png'
import car2 from '../../src/assets/images/car2.png'
import car3 from '../../src/assets/images/car3.png'
import car4 from '../../src/assets/images/car4.png'
import { Link } from 'react-router-dom'
import CarCard from '../CarCard/CarCard'

export default function SearchCars() {
    let getCars = async () => {
        const response = await axios.get('https://myfakeapi.com/api/cars/')
        setCars(response.data.cars)
    }
    useEffect(() => {
        getCars()
        return () => {
            console.log('unmount')
        }
    }, [])
    let [cars, setCars] = useState([])
    let slicedCars = cars.slice(0, 4)
    let carImages = [car1, car2, car3, car4]
    let [filteredCars, setFilteredCars] = useState([])
    console.log(cars)
    return (
        <>
            <Search />
            <div className="container py-5">
                <h4 className="popularBtn mb-5">popular rental deals</h4>
                <h3 className="text-uppercase fw-bold fs-1 text-center mb-5">Most popular cars rental deals</h3>
                <div className="row g-5">
                    {
                        slicedCars.map((car, index) =>
                            <div className="col-md-3" key={index} data-aos="zoom-in">
                                <CarCard  car={car} image={carImages[index % carImages.length]} />
                            </div>
                        )
                    }
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Link className="btn btn-outline-secondary w-25 fw-bold fs-6" to="cars">
                        SHOW ALL CARS <i className="fa-solid fa-arrow-right" />
                    </Link>
                </div>

            </div>
        </>
    )
}
