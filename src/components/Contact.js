const Contact = () => {
    return (<div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact us page</h1>
        <form>
            <input type="text" className="border p-2 m-2" placeholder="name"></input>
            <input type="text" className="border p-2 m-2" placeholder="message"></input>
            <button className="m-2 p-2 bg-gray-100 rounded-2xl border">Submit</button>

        </form>
    </div>)
}
export default Contact