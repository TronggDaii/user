import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
import Container from '../components/Container'
const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare Products"} />
        <BreadCrumb title="Compare Products" />
        <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img 
                                src='images/cross.svg' 
                                alt='cross'
                                className='position-absolute cross img-fluid' 
                            />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                Diamond D DM36285RG - Đồng hồ Nữ - Size mặt 32mm - Kính sapphire - Quartz/Pin - Chịu nước
                                </h5>
                                <h6 className='price mb-3 mt-3'>10.000.000đ</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Thương Hiệu:</h5>
                                        <p>Casio</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Giới Tính:</h5>
                                        <p>Nam</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Khả Dụng:</h5>
                                        <p>Còn Hàng</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Màu:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img 
                                src='images/cross.svg' 
                                alt='cross'
                                className='position-absolute cross img-fluid' 
                            />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                Diamond D DM36285RG - Đồng hồ Nữ - Size mặt 32mm - Kính sapphire - Quartz/Pin - Chịu nước
                                </h5>
                                <h6 className='price mb-3 mt-3'>10.000.000đ</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Thương Hiệu:</h5>
                                        <p>Casio</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Giới Tính:</h5>
                                        <p>Nam</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Khả Dụng:</h5>
                                        <p>Còn Hàng</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Màu:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default CompareProduct