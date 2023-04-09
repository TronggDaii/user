import React from 'react'
import {Link} from "react-router-dom";
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newletter' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                  <input type="text" className="form-control py-1" placeholder="Địa chỉ email của bạn" aria-label="Địa chỉ email của bạn" aria-describedby="basic-addon2" />
                  <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                  </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Liên hệ</h4>
              <div>
                <address className='text-white fs-6'>
                  CTU: 3/2, Ninh Kieu, Can Tho <br /><br />
                  PinCode: 656555
                </address>
                <a href='tel: +91 8888888' className='mt-4 d-block mb-1 text-white'>
                  +91 8888888
                </a>
                <a href='mailto:mvcuong123@gmail.com' className='mt-4 d-block mb-4 text-white'>
                  mvcuong123@gmail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30'>
                  <a className='text-white' href='#'>
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className='text-white' href='#'>
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href='#'>
                    <BsGithub className='fs-4' />
                  </a>
                  <a className='text-white' href='#'>
                    <BsYoutube className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Thông tin</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Chính sách riêng tư</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Chính sách hoàn trả</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Chính sách giao hàng</Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Điều khoản</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Tài khoản</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Liên kết</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">www.linkein.com</Link>
                <Link className="text-white py-2 mb-1">www.instagram.com</Link>
                <Link className="text-white py-2 mb-1">www.github.com</Link>
                <Link className="text-white py-2 mb-1">www.youtube.com</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by Developer MVC
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer