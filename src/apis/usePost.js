import { useQuery } from "@tanstack/react-query"
import api from "./axios.client"
import axios from "axios"

export const usePost = (id)=>{

    const { data : post, isLoading : postLoading, isError : postError } = useQuery({
        queryKey : ['post', id],

        queryFn : async ()=>{

            const {data} = await axios.get(`https://dummyjson.com/posts/${id}`)

            // console.log(data);
            

            return data

        },

        enabled : id ? true : false


    })

    return { post, postError, postLoading }


}