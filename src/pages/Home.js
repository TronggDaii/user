import React from 'react'
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import {services} from '../utils/Data'
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
      <div className='row'>
            <div className='col-7'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-02.webp'
                className='img-fluid rounded-3' 
                alt='main banner' />
                {/* <div className='main-banner-content position-absolute'>
                  <h4>Siêu ưu đãi sản phẩm</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>Chỉ từ 10 triệu đồng</p>
                  <Link className='button'>MUA NGAY</Link>
                </div> */}
              </div>
            </div>
            <div className='col-5'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-05.webp'
                  className='img-fluid rounded-3' 
                  alt='main banner' />
                  {/* <div className='small-banner-content position-absolute'>
                    <h4>Siêu ưu đãi sản phẩm</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>Chỉ từ 10 triệu đồng <br /> hoặc trả góp</p>
                  </div> */}
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-06.webp'
                  className='img-fluid rounded-3' 
                  alt='main banner' />
                  {/* <div className='small-banner-content position-absolute'>
                    <h4>Mới Nhất</h4>
                    <h5>But IPad Air</h5>
                    <p>Chỉ tử 10 triệu đồng <br /> hoặc trả góp</p>
                  </div> */}
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-07.webp'
                  className='img-fluid rounded-3' 
                  alt='main banner' />
                  {/* <div className='small-banner-content position-absolute'>
                    <h4>Mới Nhất</h4>
                    <h5>But IPad Air</h5>
                    <p>Chỉ tử 10 triệu đồng <br /> hoặc trả góp</p>
                  </div> */}
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-08.webp'
                  className='img-fluid rounded-3' 
                  alt='main banner' />
                  {/* <div className='small-banner-content position-absolute'>
                    <h4>Mới Nhất</h4>
                    <h5>But IPad Air</h5>
                    <p>Chỉ tử 10 triệu đồng <br /> hoặc trả góp</p>
                  </div> */}
                </div>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Nam</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Nữ</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Thông Minh</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Dây Da</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Nam</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Nữ</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Thông Minh</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Đồng Hồ Dây Da</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
              </div>
            </div>
        </div>
      </Container>
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Bộ Sưu Tập Mới Nhất</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
              <div className='col-3'>
                <div className='famous-card position-relative'>
                  <img src='images/famous-5.png' className='img-fluid' alt='famous' />
                  <div className='famous-content position-absolute'>
                    <h5>Big Screen</h5>
                    <h6>Smart Watch Series 7</h6>
                    <p>Chỉ từ 6 triệu đồng</p>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='famous-card position-relative'>
                  <img src='images/famous-6.png' className='img-fluid' alt='famous' />
                  {/* <div className='famous-content position-absolute'>
                    <h5 className='text-dark'>Studio Display</h5>
                    <h6 className='text-dark'>600 nits of brightness.</h6>
                    <p className='text-dark'>27-inch 5K Retina display</p>
                  </div> */}
                </div>
              </div>
              <div className='col-3'>
                <div className='famous-card position-relative'>
                  <img src='images/famous-7.png' className='img-fluid' alt='famous' />
                  {/* <div className='famous-content position-absolute'>
                    <h5 className='text-dark'>smartphones</h5>
                    <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                    <p className='text-dark'>
                      Chỉ từ 20.000.000đ 
                    </p>
                  </div> */}
                </div>
              </div>
              <div className='col-3'>
                <div className='famous-card position-relative'>
                  <img src='images/famous-8.png' className='img-fluid' alt='famous' />
                  {/* <div className='famous-content position-absolute'>
                    <h5 className='text-dark'>home speakers</h5>
                    <h6 className='text-dark'>Room-filling sound.</h6>
                    <p className='text-dark'>
                      Chỉ từ 14.000.000đ tại cửa hàng
                    </p>
                  </div> */}
                </div>
              </div>
        </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Sản Phẩm Giới Hạn</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='marque-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-warapper card-wrapper'>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src='images/brand-09.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                  <img src='images/brand-10.png' alt='brand' />
                </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-11.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-12.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-13.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-14.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-15.png' alt='brand' />
              </div>
            </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Blogs mới nhất</h3>
        </div>
        </div>
        <div className='row'>
        <div className='col-3'>
          <BlogCard />
        </div>
        <div className='col-3'>
          <BlogCard />
        </div>
        <div className='col-3'>
          <BlogCard />
        </div>
        <div className='col-3'>
          <BlogCard />
        </div>
        </div>
      </Container>
    </>
  );
};

export default Home;