import React from "react"

export class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{}
        }
 }
 async componentDidMount(){
    const data =  await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json()
    this.setState({
        userInfo:json
    })
 }
    render(){
        const  {name,location,avatar_url} = this.state.userInfo
        return(<div className="p-4 m-4 border-solid border-2 w-80">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Place : {location}</h3>
    </div>)
    }
}
