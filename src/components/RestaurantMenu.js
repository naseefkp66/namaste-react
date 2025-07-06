import { useParams } from 'react-router-dom'
import ShimmerCards from './ShimmerCards'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'
import { useState } from 'react'

const RestaurantMenu = () => {
    const [indexVal,setIndexVal] = useState(0)
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId)
    if (!resInfo) { return (<ShimmerCards />) }
    let filteredData = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log('resInfo',resInfo);
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info
    if(!filteredData){return}
    return (
        <div className='text-center'>
            <h1 className='font-bold text-2xl my-6'>{name}</h1>
            <h3 className='font-bold text-lg'>{cuisines}</h3>
            <h3>{costForTwoMessage} FOR TWO</h3>

            <h2>Menu</h2>
           
            <ul>{filteredData?.map((res, index) =>  <RestaurantCategory key={index} data = {res?.card?.card} isOpen={indexVal===index} setIndexVal={()=>setIndexVal(index)}/>
            )}
            </ul>


        </div>)
}
export default RestaurantMenu