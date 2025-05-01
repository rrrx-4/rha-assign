import React from 'react'
import { Link } from 'react-router'
import Tags from './Tags'

export default function Blog({post}) {
  
    return (
        <article   key={post.id} className='flex justify-start items-start flex-col' >
        <Link to={`/blog/${post.id}`}  className='rounded-[8px] w-[413px] mb-[10px] h-[262px] bg-[#D9D9D9]' >
        </Link>

        <div className='text-left'>
            <span>{
                post?.tags && post?.tags?.map((label)=>{

                    return <Tags key={label} label={label} ></Tags>
                })
}</span>
            <h2 className='text-[27px] font-[600] text-[#222222]' >{post?.title || ""}</h2>
            <div className='flex items-center gap-[10px] text-[#777777] text-[12px]' >
                <p>Jesica koli</p>
                <p>02 december 2022</p>
                <p>3 min. to read</p>
            </div>
            <p className='text-[#555555] text-[15px]' >{post.body.substring(0,100) || ""}...</p>
        </div>

    </article>
    )
  
}

// export default Blog