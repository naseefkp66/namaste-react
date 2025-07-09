import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = props.resData?.info
    return (<div data-testid="resCard" className="m-4 p-4 w-[220px] h-[400px] bg-gray-100 rounded-lg hover:bg-gray-300 transition duration-600 ease-in-out">
        <img className="w-48 h-36 rounded-lg"
            src={CDN_URL + cloudinaryImageId}>
        </img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>

    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (<div>
            <label className="absolute bg-black text-white ml-4 p-2 rounded-lg">promoted</label>
            <RestaurantCard resData={props.resData} />
        </div>
        )
    }
}
export default RestaurantCard