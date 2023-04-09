import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'
import Container from '../components/Container'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8414543437266!2d105.76842661428219!3d10.029938975271234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zxJDhuqFpIGjhu41jIEPhuqduIFRoxqE!5e0!3m2!1svi!2s!4v1680762430168!5m2!1svi!2s" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Góp Ý</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type='text' 
                        className='form-control'
                        placeholder='Họ Tên' 
                      />
                    </div>
                    <div>
                      <input 
                        type='text' 
                        className='form-control'
                        placeholder='Email' 
                      />
                    </div>
                    <div>
                      <input 
                        type='text' 
                        className='form-control'
                        placeholder='Số Điện Thoại' 
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
                    <div>
                      <button className='button'>Gửi</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Liên Hệ Với Chúng Tôi</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Đ/c: ĐH Can Tho, 3/2, p. Xuan Khanh, Q. Ninh Kieu, TPCT
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='+91 888888'>+91 888888</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto:mvcuong123@gmail.com'>mvcuong123@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Thứ Hai - Thứ Sáu 8 AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact