import { useQuery } from "@tanstack/react-query"
import api from "./axios.client"
import axios from "axios"

export const useTagSearch = (query)=>{

    const { data : postsByTag, isLoading : postByTagLoading, isError : postByTagError } = useQuery({
        queryKey : ['post', query],

        queryFn : async ()=>{

            const {data} = await axios.get(`https://dummyjson.com/posts/tag/${query}`)

            // console.log(data);
            

            return data

        },

        enabled : query ? true : false


    })

    return { postsByTag, postByTagLoading, postByTagError }


}