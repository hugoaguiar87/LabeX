import axios from "axios"
import { useEffect, useState } from "react"


export const useRequestGet = (url, header) => {
    const [result, setResult] = useState({
        data: [],
        isLoading: false,
        error: ""
    })

    useEffect(()=>{
        setResult({...result, isLoading: true})

        axios
            .get(url, header)
            .then((res)=>{
                setResult({...result, isLoading: false, data: res.data})
            })
            .catch((err)=>{
                setResult({...result, isLoading: false, error: err})
            })
    },[url])

    return result
}
