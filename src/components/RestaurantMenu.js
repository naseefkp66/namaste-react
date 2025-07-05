import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShimmerCards from './shimmerCard'
import { SWIGGY_RESTAURANT_DATA_API } from '../utils/constant'

const RestaurantMenu = () => {
    const [resData, setResData] = useState([])
    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams();


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_RESTAURANT_DATA_API+resId)
        const response = await data.json()
        setResData(response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards)
        setResInfo(response.data?.cards[2]?.card?.card?.info)
    }
    
    return (<>{(!resInfo || !resData) ?<ShimmerCards /> :
        <div>
            <h1>{resInfo?.name}</h1>
            <h3>{resInfo?.cuisines}</h3>
            <h3>{resInfo?.costForTwoMessage}</h3>

            <h2>Menu</h2>
            <ul>{resData.map((res) => <li key={res?.card?.info?.id}>{res?.card?.info?.name} - {res?.card?.info?.price/100}</li>
            )}
            </ul>

        </div>}</>)
}
export default RestaurantMenu