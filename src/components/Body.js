import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import ShimmerCards from './shimmerCard'
import { SWIGGY_LIST_RESTAURANTS_API } from "../utils/constant"
import { Link } from "react-router-dom"

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
    return <> <div className="filter">
        <input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} /><button onClick={() => { searchFn() }}>Search</button>
        <button className="filter-btn" onClick={() => {
            setFilteredRestaurants(prev => prev.filter((res) => res.info.avgRating > 4.5))
        }}>Top rated Restaurants</button>
    </div>{listOfRestaurants.length === 0 ? (<ShimmerCards />) : (
        <div className="body">
            <div className="res-container">
                {filteredRestaurants.map((item) => (<Link  key={item.info.id} to={"/restaurants/"+item.info.id}>    
                   <RestaurantCard resData={item} /></Link>
                    
                ))}
            </div>
        </div>
    )}</>
}
export default Body
{/* <Link to={`/restaurants/${id}`}>     */ }