import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';
const SpecialProduct = () => {
  return (
    <div className='col-6 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Havels</h5>
                    <h6 className='title'>
                    Đồng hồ Bruno sohnle 17-53172-291 Diamond
                    </h6>
                    <ReactStars 
                    count={5} 
                    size={24} 
                    activeColor="#ffd700"
                    value={4}
                    edit={false}
                    />,
                    <p className='price'>
                        <span className='red-p'>2.000.000đ</span>
                        &nbsp; <strike>2.790.000đ</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5 </b>ngày
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>
                        </div>
                    </div>
                    <div className='prod-count m-3'>
                        <p>Products: 5</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <Link className='button'>MUA HÀNG</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct