import { LOGO_URL } from "../utils/constant"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContext"
import { useSelector } from "react-redux"

const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    const onlineStatus = useOnlineStatus()
    const { loggedInUser } = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items)

    return <div className="flex justify-between bg-pink-500 shadow-2xl m-2 sm:bg-yellow-50 lg:bg-green-50">
        <div className="">
            <img className="w-56" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center justify-center">
            <ul className="flex p-4 m-4 gap-4 flex items-center">
                <li>Online Status : {onlineStatus ? "✅" : "❌"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/cart">🛒({cartItems.length})</Link></li>
                <li className="font-bold text-blue-800"><Link to="/grocery">{loggedInUser}</Link></li>
                <button className="border-2 px-4 py-2" onClick={() => (btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login'))}>
                    {btnName}
                </button>

            </ul>
        </div>
    </div>
}
export default Header