import React from 'react'
import { usePost } from '../apis/usePost'
import { useParams } from 'react-router';
import Tags from '../components/Tags';

function Blog() {

    const params = useParams()

    console.log(params);
    

    const { post, postError, postLoading } = usePost(params?.blogId)

    console.log(post, postError, postLoading);
    

  return (
    <main className='text-left p-[10px]'>
        {
            post?.tags && post.tags.map((tag)=>{
                return <Tags key={tag} label={tag} ></Tags>
            })
        }

<h2 className='text-[27px] font-[600] text-[#222222]' >{post?.title || ""}</h2>
                                <div className='flex items-center gap-[10px] text-[#777777] text-[12px]' >
                                    <p>Jesica koli</p>
                                    <p>02 december 2022</p>
                                    <p>3 min. to read</p>
                                </div>

<div className='w-[856px] h-[432px] bg-[#d9d9d9] rounded-[5px]' ></div>

        <p className='text-[#555555] text-[15px]' >{post?.body}</p>


    </main>
  )
}

export default Blog