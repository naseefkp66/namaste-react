const ShimmerCards = () => {
    const shimmerCards = []
    for (let i = 0; i < 14; i++) {
        shimmerCards.push(i)
    }
    return <div className="flex flex-wrap">{
        shimmerCards.map((item, index) => <div key={index} className="p-1 w-[200px] h-[420px] m-1 cursor-pointer bg-[#f0f0f0]">
        </div>)
    }</div>
}
export default ShimmerCards