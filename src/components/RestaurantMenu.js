import { useParams } from 'react-router-dom'
import ShimmerCards from './shimmerCard'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId)
    if(!resInfo) {return (<ShimmerCards />)}
const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info
const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h3>{costForTwoMessage} FOR TWO</h3>

            <h2>Menu</h2>
            <ul>{itemCards.map((res) => <li key={res?.card?.info?.id}>{res?.card?.info?.name} - {res?.card?.info?.price/100}</li>
            )}
            </ul>

        </div>)
}
export default RestaurantMenu