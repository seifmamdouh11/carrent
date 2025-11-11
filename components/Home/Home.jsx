import React from 'react'
import Navbar from '../Navbar/Navbar'
import mainImg from '../../src/assets/images/mainImg.png'
import firstCar from '../../src/assets/images/firstCar.png'
import google from '../../src/assets/images/google.png'
import apple from '../../src/assets/images/apple.png'
import './Home.css'
import SearchCars from '../SearchCars/SearchCars'
export default function Home() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="homeContainer position-relative overflow-hidden vh-100">
                    <img src={mainImg} alt="mainImg" className="img-fluid position-absolute top-0 end-0 absImg" />
                    <Navbar />
                    <div className="row home flex-column-reverse flex-md-row">
                        <div className="col-md-6 position-relative h-100" data-aos="fade-down-right">
                            <div className="homeContent mx-auto">
                                <h3 className='text-uppercase fw-bold fs-1'>Find, book and
                                    <br />rent a car  <span className="text-primary">Easily</span></h3>
                                <p>Get a car wherever and whenever you need it with your IOS and Android device</p>
                                <div className="storeBtns d-flex gap-4">
                                    <a href=""><img src={google} alt="google" width={150} /></a>
                                    <a href=""><img src={apple} alt="apple" width={150} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 h-100 position-relative h-100" data-aos="fade-down-left"
                            data-aos-anchor="top-center"
                            data-aos-offset="500"
                            data-aos-duration="1000">
                            <img src={firstCar} alt="firstCar" className="firstCar img-fluid " />
                        </div>
                    </div>
                </div>
            </div>
            <SearchCars />
        </>
    )
}
