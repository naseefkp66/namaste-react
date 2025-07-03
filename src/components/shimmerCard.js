const ShimmerCards = () => {
    const shimmerCards = []
    for (let i = 0; i < 14; i++) {
        shimmerCards.push(i)
    }
    return <div className="res-container">{
        shimmerCards.map((item, index) => <div key={index} className="shimmer">
        </div>)
    }</div>
}
export default ShimmerCards