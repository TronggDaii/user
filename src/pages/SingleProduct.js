import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import {Link} from 'react-router-dom'
import {TbGitCompare } from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import Container from '../components/Container';
const SingleProduct = () => {
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  const props = 
  {
    width: 400, 
    height: 600, 
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
   <>
    <Meta title={"Product Name"} />
    <BreadCrumb title="Product Name" />
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-6'>
                  <div className='main-product-image'>
                    <div>
                      <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' /></div>
                    <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' /></div>
                    <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' /></div>
                    <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' /></div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='main-product-details'>
                    <div className='border-bottom'>
                      <h3 className='title'>
                        CASIO WORLD TIME AE-1200WHD-1AVDF – NAM – QUARTZ (PIN) – MẶT SỐ 45 MM, BỘ BẤM GIỜ, CHỐNG NƯỚC 10 ATM
                      </h3>
                    </div>
                    <div className='border-bottom py-3'>
                      <p className='price'>10.000.000đ</p>
                      <div className='d-flex align-items-center gap-10'>
                        <ReactStars 
                        count={5} 
                        size={24} 
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                        />
                        <p className='mb-0 t-review'>(2) Đánh Giá</p>
                      </div>
                      <a className='review-btn' href='#review'>Viết Bình Luận</a>
                    </div>
                    <div className='py-3'>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Thương Hiệu :</h3>
                        <p className='product-data'>Casio</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Loại :</h3>
                        <p className='product-data'>Đồng Hồ Nam</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Thương Hiệu :</h3>
                        <p className='product-data'>Casio</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Tags :</h3>
                        <p className='product-data'>#Donghonam</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Khả Dụng :</h3>
                        <p className='product-data'>Hết Hàng</p>
                      </div>
                      <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                        <h3 className='product-heading'>Size Dây :</h3>
                        <div className='d-flex flex-wrap gap-15'>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>
                            20 mm
                          </span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>
                            21 mm
                          </span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>
                            22 mm
                          </span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>
                            23 mm
                          </span>
                        </div>
                      </div>
                      <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                        <h3 className='product-heading'>Màu :</h3>
                        <Color />
                      </div>
                      <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                        <h3 className='product-heading'>Số Lượng :</h3>
                        <div className=''>
                          <input 
                            type='number' 
                            name=''
                            min={1}
                            max={10}
                            className='form-control'
                            style={{ width: "70px"}}
                            id=''
                          />
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                          <button className='button border-0' type='submit'>
                            Thêm Vào Giỏ
                          </button>
                          <button className='button signup'>Mua Ngay</button>
                        </div>
                      </div>
                      <div className='d-flex align-items-center gap-15'>
                        <div>
                          <a href=''>
                            <TbGitCompare className='fs-5 me-2' /> So Sánh
                          </a>
                        </div>
                        <div>
                          <a href=''>
                            <AiOutlineHeart className='fs-5 me-2' />Yêu Thích
                          </a>
                        </div>
                      </div>
                      <div className='d-flex gap-10 flex-column my-3'>
                        <h3 className='product-heading'>Giao Hàng & Hoàn Trả :</h3>
                        <p className='product-data'>
                          Miễn phí vận chuyển và hoàn trả cho tất cả đơn hàng ! <br />{" "}
                          Đơn hàng sẽ được vận chuyển khoảng
                          <b>5-10 ngày!</b>
                        </p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-3'>
                        <h3 className='product-heading'>Link Sản Phẩm :</h3>
                          <a href='javascript:void(0)' onClick={()=>{
                            copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg");
                          }}>
                            Sao Chép Link Sản Phẩm
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    </Container>
    <Container class1='description-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h4>MÔ TẢ</h4>
            <div className='bg-white p-3'>
              <p className=''>
              Đồng hồ nam Casio AE1200WHD có mặt đồng hồ vuông to với phong cách thể thao, mặt số điện tử với những tính năng hiện đại tiện dụng, kết hợp với dây đeo bằng kim loại đem lại vẻ mạnh mẽ cá tính dành cho phái nam.
              </p>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='reviews-wrapper home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 id='review'>Reviews</h3>
            <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Khách Hàng Đánh Giá</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars 
                      count={5} 
                      size={24} 
                      activeColor="#ffd700"
                      value={4}
                      edit={false}
                    />
                    <p className='mb-0'>(2) Đánh Giá</p>
                  </div>
                </div>
                {orderedProduct &&(
                  <div>
                    <a className='text-dark text-decoration-underline' href=''>
                      Mời bạn bình luận. Hãy ghi tiếng Việt có dấu
                    </a>
                  </div>
                )}
                
              </div>
              <div className='review-form py-4'>
                <h4>Bình Luận</h4>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <ReactStars 
                      count={5} 
                      size={24} 
                      activeColor="#ffd700"
                      value={4}
                      edit={true}
                    />
                  </div>  
                  <div>
                      <textarea 
                        id="" 
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder='Bình Luận'
                      ></textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button'>Đánh Giá</button>
                  </div>
                </form>
              </div>
              <div className='reviews'>
                <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>Van Cuong</h6>
                    <ReactStars 
                      count={5} 
                      size={24} 
                      activeColor="#ffd700"
                      value={4}
                      edit={false}
                    />
                  </div>
                  <p className='mt-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur nisi similique illum aut perferendis voluptas, quisquam
                    obcaecati qui nobis officia. Voluptatibus in harum deleniti
                    labore maxime officia esse eos? Repellat?
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Sản Phẩm Bán Chạy Nhất</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
          </div>
    </Container>
   </>
  )
}

export default SingleProduct