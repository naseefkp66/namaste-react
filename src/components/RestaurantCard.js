import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    const {name,cuisines,avgRating,sla,cloudinaryImageId} = props.resData?.info
    return (
        <div style={{ backgroundColor: "#f0f0f0" }} className="res-card">
             <img className="res-logo" 
             src={CDN_URL+cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    )
}
export default RestaurantCard