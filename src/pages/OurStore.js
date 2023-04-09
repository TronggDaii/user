import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard'
import Color from '../components/Color';
import Container from '../components/Container';
const OurStore = () => {
    const [grid, setGrid] = useState(4);
    
  return (
    <>
        <Meta title={"Our Store"} />
        <BreadCrumb title="Our Store" />
        <Container class1='store-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Sắp Theo Danh Mục
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Casio</li>
                                    <li>Seiko</li>
                                    <li>Saga</li>
                                    <li>Citizen</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Bộ Lọc
                            </h3>
                            <div>
                                <h5 className='sub-title'>Khả Dụng</h5>
                                <div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type='checkbox' 
                                            value="" 
                                            id="" />
                                        <label className='form-check-label' htmlFor="">
                                            Còn Hàng (1)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type='checkbox' 
                                            value="" 
                                            id=""
                                        />
                                        <label className='form-check-label' htmlFor="">
                                            Hết Hàng (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Giá</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control"
                                         
                                        id="floatingInput" 
                                        placeholder="From" 
                                    />
                                    <label htmlFor="floatingInput">Từ</label>
                                    </div>
                                        <div className="form-floating">
                                        <input 
                                            type="email" 
                                            className="form-control"
                                             
                                            id="floatingInput1" 
                                            placeholder="To" 
                                        />
                                        <label htmlFor="floatingInput1">Đến</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Màu Sắc</h5>
                                <div>
                                    <Color />
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type='checkbox' 
                                            value="" 
                                            id="color-1" />
                                        <label className='form-check-label' htmlFor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type='checkbox' 
                                            value="" 
                                            id="color-2" />
                                        <label className='form-check-label' htmlFor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Từ Khóa
                            </h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-ceter gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        donghonam
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        donghonu
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        donghoco
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        donghodayda
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Ngẫu Nhiên
                            </h3>
                            <div>
                                <div className='random-products mb-3 d-flex'>
                                    <div className='w-50'>
                                        <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Diamond D DM36285RG - Đồng hồ Nữ - Size mặt 32mm - Kính sapphire - Quartz/Pin - Chịu nước</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>10.000.000đ</b>
                                    </div>
                                </div>
                                <div className='random-products d-flex'>
                                    <div className='w-50'>
                                        <img 
                                            src='images/watch.jpg' 
                                            className='img-fluid' 
                                            alt='watch' 
                                        />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Diamond D DM36285RG - Đồng hồ Nữ - Size mặt 32mm - Kính sapphire - Quartz/Pin - Chịu nước</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>10.000.000đ</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0' style={{width: "100px"}}>Sắp Xếp:</p>
                                    <select name='' defaultValue={"manula"} className='form-control form-select' id=''>
                                        <option value="manual">Nổi Bật</option>
                                        <option value="best-selling">Bán Nhiều Nhất</option>
                                        <option value="title-ascending">Từ A-Z</option>
                                        <option value="title-descending">Từ Z-A</option>
                                        <option value="price-ascending">Giá Thấp Đến Cao</option>
                                        <option value="price-descending">Giá Cao Đến Thấp</option>
                                        <option value="created-ascending">Cũ Đến Mới</option>
                                        <option value="created-descending">Mới Đến Cũ</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>21 Sản Phẩm</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img 
                                            onClick={() => {
                                                setGrid(3);
                                            }}
                                            src='images/gr4.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid' 
                                        />
                                        <img 
                                            onClick={() => {
                                                setGrid(4);
                                            }}
                                            src='images/gr3.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid' 
                                        />
                                        <img 
                                            onClick={() => {
                                                setGrid(6);
                                            }}
                                            src='images/gr2.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid' 
                                        />
                                        <img 
                                            onClick={() => {
                                                setGrid(12);
                                            }}
                                            src='images/gr.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid' 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCard grid={grid} />
                            </div>                        
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default OurStore