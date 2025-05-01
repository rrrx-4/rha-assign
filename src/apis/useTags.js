import { useQuery } from "@tanstack/react-query"
import api from "./axios.client"
import axios from "axios"

export const useTags = ()=>{

    const { data : tags, isLoading : tagsLoading, isError : tagsError } = useQuery({
        queryKey : ['tags'],

        queryFn : async ()=>{

            const {data} = await axios.get(`https://dummyjson.com/posts/tag-list`)

            // console.log(data);
            

            return data

        }


    })

    return { tags, tagsLoading, tagsError }


}