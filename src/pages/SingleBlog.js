import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import blog from "../images/blog-2.jpg";
import Container from '../components/Container'
const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title="Dynamic Blog Name" />
        <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-4'/>Trở về Blogs
                            </Link>
                            <h3 className='tilte'>
                            Đồng hồ Epos - đẳng cấp của một thương hiệu Thụy Sĩ
                            </h3>
                            <img 
                                src={blog}
                                className='img-fluid w-100 my-4' 
                                alt='blog' />
                            <p>
                            Đồng hồ Epos là một thương hiệu đồng hồ nổi tiếng của Thuỵ Sĩ, với hơn 95 năm kinh nghiệm trong sản xuất các loại đồng hồ cao cấp. Từ khi thành lập vào năm 1925, Epos đã khẳng định được...
                            </p>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default SingleBlog