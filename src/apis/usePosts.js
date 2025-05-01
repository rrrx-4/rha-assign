import { useQuery } from "@tanstack/react-query"
import api from "./axios.client"
import axios from "axios"

export const usePosts = ()=>{

    const { data : posts, isLoading : postsLoading, isError : postsError } = useQuery({
        queryKey : ['posts'],

        queryFn : async ()=>{

            const {data} = await axios.get(`https://dummyjson.com/posts`)

            // console.log(data);
            

            return data

        }


    })

    return { posts, postsError, postsLoading }


}