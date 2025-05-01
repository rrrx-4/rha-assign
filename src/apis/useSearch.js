import { useQuery } from "@tanstack/react-query"
import api from "./axios.client"
import axios from "axios"

export const useSearch = (query)=>{

    const { data : postsBySearch, isLoading : postBySearchLoading, isError : postBySearchError } = useQuery({
        queryKey : ['post', query],

        queryFn : async ()=>{

            const {data} = await axios.get(`https://dummyjson.com/posts/search?q=${query}`)

            // console.log(data);
            

            return data

        },

        enabled : query ? true : false


    })

    return { postsBySearch, postBySearchLoading, postBySearchError }


}