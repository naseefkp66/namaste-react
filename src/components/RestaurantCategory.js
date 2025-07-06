import Item from "./Item"

const RestaurantCategory = ({data,isOpen,setIndexVal}) =>{
return (<div className="w-1/2 mx-auto ">
    <div className=" bg-gray-100 shadow-lg p-4 my-4 flex justify-between" onClick={()=>{!isOpen?setIndexVal():setIndexVal(null)}}>
    <span className="font-bold text-lg">{data.title} {data.itemCards.length}</span>
        <span>{isOpen?'⬆️':'⬇️'}</span>   </div>


        <ul>{isOpen&&(data.itemCards.map((item,index) => <Item key={index} data={item?.card?.info}/>
))}
</ul>
     
        </div>
)
}
export default RestaurantCategory


