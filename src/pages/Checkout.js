import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import watch from '../images/watch.jpg'
import Container from '../components/Container'
const Checkout = () => {
  return (
   <>
    <Container class1='checkout-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>Dev Corner</h3>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link className='text-dark total-price' to="/cart">
                                        Giỏ Hàng
                                    </Link>
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    Nhập Thông Tin
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active">
                                    Vận Chuyển
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    Thanh Toán
                                </li>
                            </ol>
                        </nav>
                        <h4 className='title total'>
                            Thông Tin Liên Hệ
                        </h4>
                        <p className='user-details total'>
                            Van Cuong (mvcuong123@gmail.com)
                        </p>
                        <h4 className='mb-3'>Địa Chỉ Giao Hàng</h4>
                        <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                            <div className='w-100'>
                                <select 
                                    name='' 
                                    className='form-control form-select' 
                                    id=''
                                >
                                    <option value="" selected disabled>Chọn Quốc Gia</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input 
                                    type='text' 
                                    placeholder='Họ' 
                                    className='form-control' 
                                />
                            </div>
                            <div className='flex-grow-1'>
                                <input 
                                    type='text' 
                                    placeholder='Tên' 
                                    className='form-control' 
                                />
                            </div>
                            <div className='w-100'>
                                <input 
                                    type='text' 
                                    placeholder='Địa Chỉ' 
                                    className='form-control' 
                                />
                            </div>
                            {/* <div className='w-50'>
                                <input 
                                    type='text' 
                                    placeholder='số nhà, tên đường,...' 
                                    className='form-control' 
                                />
                            </div> */}
                            {/* <div className='flex-grow-1'>
                                <input type='text' placeholder='Thành Phố' className='form-control' />
                            </div> */}
                            <div className='flex-grow-1'>
                                <select 
                                    name='' 
                                    className='form-control form-select' 
                                    id=''
                                >
                                    <option value="" selected disabled>
                                        Chọn Tỉnh
                                    </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='Zipcode' className='form-control' />
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/cart" className='text-dark'>
                                        <BiArrowBack className='me-2' />
                                        Trở Về Giỏ Hàng
                                    </Link>
                                    <Link to="/cart" className='button'>
                                        Tiếp Tục Đặt Hàng
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <div className='col-5'>
                <div className='border-bottom py-4'>
                    <div className='d-flex gap-10 mb-2 align-items-center'>
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span 
                                style={{top:"-10px", right:"2px"}}
                                className='badge bg-secondary text-white rounded-circle p-2 position-absolute'
                                ></span>
                                <img className='img-fluid' src={watch} alt='product' />
                            </div>
                            <div>
                                <h5 className='total-price'>gfgdg</h5>
                                <p className='total-price'> s/ #fsafa</p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <p>10.000.000đ</p>
                        </div>
                    </div>
                </div>
                <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='total'>Tổng Tiền</p>
                        <p className='total-price'>10.000.000đ</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0 total'>Phí Vận Chuyển</p>
                        <p className='mb-0 total-price'>10.000.000đ</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                    <h4 className='total'>Tổng Cộng</h4>
                    <h5 className='total-price'>10.000.000đ</h5>
                </div>
            </div>
            </div>
    </Container>
   </>
  )
}

export default Checkout