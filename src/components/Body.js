import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import ShimmerCards from './ShimmerCards'
import { SWIGGY_LIST_RESTAURANTS_API } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    useEffect(() => {
        fetchFn();
    }, [])


    const fetchFn = async () => {
        const data = await fetch(SWIGGY_LIST_RESTAURANTS_API)
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const searchFn = () => {
        setFilteredRestaurants(listOfRestaurants.filter((item) => item.info.name.toLowerCase().includes(searchQuery)))
    }
    useEffect(() => {
        if (!searchQuery.length) {
            setFilteredRestaurants(listOfRestaurants)
        }
    }, [searchQuery])

    const onlineStatus = useOnlineStatus()

    if(!onlineStatus){
        return <h1>Looks like you are offline,Please check your internet connection</h1>
    }
    return <> <div className="px-4 m-4">
        <input className=" border-black border-solid border-2" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} /><button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => { searchFn() }}>Search</button>
       
       <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
            setFilteredRestaurants(prev => prev.filter((res) => res.info.avgRating > 4.5))
        }}>Top rated Restaurants</button>
    </div>{listOfRestaurants.length === 0 ? (<ShimmerCards />) : (
        <div className="">
            <div className="flex gap-2 flex-wrap">
                {filteredRestaurants.map((item) => (<Link  key={item.info.id} to={"/restaurants/"+item.info.id}>    
                   <RestaurantCard resData={item} /></Link>
                    
                ))}
            </div>
        </div>
    )}</>
}
export default Body
{/* <Link to={`/restaurants/${id}`}>     */ }