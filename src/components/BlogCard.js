import React from 'react'
import {Link} from 'react-router-dom';

const BlogCard = (id, title, description, image, date) => {
  return (
    <div className='blog-card'>
        <div className='card-image'>
            <img src='images/blog-2.jpg' className='img-fluid w-100' alt='blog' />
        </div>
        <div className='blog-content'>
            <p className='date'>{date}</p>
            <h5 className='title'>
             {title}
            </h5>
            <p className='desc'>
            {description} </p>
            <Link to="/blog/:id" className='button'>
                Đọc Thêm
            </Link>
            
        </div>
    </div>
  )
}

export default BlogCard;