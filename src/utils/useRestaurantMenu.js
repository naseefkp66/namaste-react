import { useEffect, useState } from 'react'
import { SWIGGY_RESTAURANT_DATA_API } from "./constant"
const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_RESTAURANT_DATA_API+resId)
        const response = await data.json()
        setResInfo(response)
    }
   
    return resInfo

}

export default useRestaurantMenu