import React, { useEffect, useState } from 'react'
import { usePosts } from '../apis/usePosts'
import { Link } from 'react-router';
import Tags from '../components/Tags';
import { useSearch } from '../apis/useSearch';
import { useTags } from '../apis/useTags';
import { useTagSearch } from '../apis/useTagSearch';
import { useDebounce } from '../hooks/useDebounce';
import Blog from '../components/Blog';

function BlogList() {

    const [showPosts, setShowPosts] = useState([])

    const [selectedTag, setSelectedTag] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const { posts : data, postsError, postsLoading } = usePosts()

    const {debounceValue} = useDebounce(searchQuery)

    const { postsBySearch, postBySearchLoading, postBySearchError } = useSearch(debounceValue)

    const {tags, setTags} =  useTags()

    const { postsByTag, postByTagLoading, postByTagError} = useTagSearch(selectedTag)


    console.log(tags);
    

    const handleSearch = (e)=>{

        
        setSearchQuery(e.target.value)

    }

    const handleTagSelected = (e)=>{
        console.log(e);
        
        setSelectedTag(e.target.value)
    }

    useEffect(()=>{

        if(postsByTag?.posts){

            setShowPosts(postsByTag?.posts)


        }
        else if(postsBySearch?.posts){

            setShowPosts(postsBySearch?.posts)


        }else if(data?.posts){

            setShowPosts(data?.posts)
        }


    }, [data, postsBySearch, postsByTag])


  return (
  <main className=' mx-auto max-w-[1296px] items-center justify-between p-[10px]' >

    
<div className='flex items-center justify-between mx-auto max-w-[1296px] mb-[20px]' >
        <div>
        <input value={searchQuery} onChange={handleSearch} className='border-[1px] rounded-[4px] p-[4px]' placeholder='Title' />
        </div>

        <div className='flex items-center gap-[10px]' >
        <select value={selectedTag} onChange={handleTagSelected} className='border-[1px] rounded-[4px] p-[4px] ' >
            <option value="" >Select Tag</option>
            {
                tags?.length > 0 && tags.map((tag)=>{
                    return (
                        <option value={tag} >{tag}</option>
                    )
                })
            }
        </select>

        <select  className='border-[1px] rounded-[4px] p-[4px]' >
            <option value="" >Select Sort</option>
        </select>
        </div>
        </div>

 
        <h1 className='text-left mb-[10px] text-black' >Recently Posted</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]' >

                {
                    showPosts?.length > 0 && showPosts.map((post)=>{

                        return (
                            <Blog key={post.id} post={post} />
                        )

                    }) 
                }
           

            
            
        </div>


  </main>
  )
}


// function Tags({label}){

//     return <span className='bg-[#00AAA1] text-white p-[4px] m-[2px] rounded-[4px] text-center' >{label}</span>

// }


export default BlogList