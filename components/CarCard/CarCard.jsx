import React from 'react'
import star from "../../src/assets/images/star.png"
import AirConditioning from "../../src/assets/images/AirConditioning.png"
import auto from "../../src/assets/images/auto.png"
import passenger from "../../src/assets/images/passenger.png"

export default function CarCard({ car, image }) {
    return (
        <>
            <div className="card p-3">
                <img src={image} alt={car.car} className="card-img-top" />
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
        </>
    )
}
