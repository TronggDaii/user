import React from 'react'
import {Link} from 'react-router-dom';
const BlogCard = () => {
  return (
    <div className='blog-card'>
        <div className='card-image'>
            <img src='images/blog-2.jpg' className='img-fluid w-100' alt='blog' />
        </div>
        <div className='blog-content'>
            <p className='date'>3 Apr, 2023</p>
            <h5 className='title'>
             Đồng hồ Epos - đẳng cấp của một thương hiệu Thụy Sĩ
            </h5>
            <p className='desc'>
            Đồng hồ Epos là một thương hiệu đồng hồ nổi tiếng của Thuỵ Sĩ, với hơn 95 năm kinh nghiệm trong sản xuất các loại đồng hồ cao cấp. Từ khi thành lập vào năm 1925, Epos đã khẳng định được...            </p>
            <Link to="/blog/:id" className='button'>
                Đọc Thêm
            </Link>
        </div>
    </div>
  )
}

export default BlogCard;