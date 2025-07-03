import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import ShimmerCards from './shimmerCard'

const Body = () => {
    const [listOfRes, setListOfRes] = useState([])
    useEffect(() => {
        fetchFn();
    }, [])


    const fetchFn = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRes.length === 0?(<ShimmerCards/>):(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    setListOfRes(prev => prev.filter((res) => res.info.avgRating > 4.5))
                }}>Top rated Restaurants</button>
            </div><div className="res-container">
                {listOfRes.map((item) => (
                    <RestaurantCard key={item.info.name} resData={item} />
                ))}
            </div>
        </div>
    )
}
export default Body