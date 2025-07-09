import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item';
import { clearCart, removeItem } from '../utils/cartSlice';


function Cart() {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <div className="w-1/2 mx-auto">
      {cartItems.length ? <div className='flex flex-col items-center'><button className='p-2 m-2 bg-black text-white rounded-lg' onClick={() => { dispatch(clearCart()) }}>Clear cart</button>
        {cartItems.map((item) => <Item key={item.id} data={item} onDelete={() => handleDelete(item.id)} />)}
      </div> : <h1 className='font-bold text-2xl p-2 m-20'> Oops...! No items found in cart</h1>}
    </div>
  )
}

export default Cart