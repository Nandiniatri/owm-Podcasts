import { useState } from "react"

const useCachedData = (key , localData) =>{
    const [data , setData] = useState(() => {
        const cached = sessionStorage.getItem(key);
        return cached ? JSON.parse(cached) : localData
    })

    const updateData = (newData) => {
        setData(newData);
        sessionStorage.setItem(key , JSON.stringify(newData))
    }

    return [data , updateData];
}

export default useCachedData;