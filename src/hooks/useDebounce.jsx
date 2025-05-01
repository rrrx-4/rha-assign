import { useEffect, useState } from "react"

export const useDebounce = (value, delay=500)=>{

    const [debounceValue, setDebounceValue] = useState(value)



    useEffect(()=>{

        
    let id ;

    id = setTimeout(()=>{

        setDebounceValue(value)

    }, delay)


    return ()=> clearInterval(id)


    }, [value])





    return {debounceValue}


}