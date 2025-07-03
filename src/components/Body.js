import RestaurantCard from "./RestaurantCard"
import resData from "../utils/mockData"

 const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div><div className="res-container">
            {resData.restaurants.map((item)=> ( 
            <RestaurantCard key={item.info.name}  resData = {item}/>

          ))}
             </div>
        </div>
    )
}
export default Body