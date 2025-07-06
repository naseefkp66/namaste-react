import { useEffect, useState } from "react"

const User = () =>{
    const [userInfo,setUserInfo] = useState({})

    useEffect(()=>{
        fetchFn()
    },[])

    const fetchFn = async ()=>{
        const data =  await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        setUserInfo(json)
    }
    
    const  {name,location,avatar_url} = userInfo

    return(<div className="p-4 m-4 border-solid border-2 w-80">
    <img src={avatar_url}/>
    <h2>Name : {name}</h2>
    <h3>Place : {location}</h3>
</div>)
}
export default User