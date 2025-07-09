import React from 'react'
import { CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const Item = ({ data, onDelete = null }) => {
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))

  }
  return (
    <div className='text-left px-8 py-4 border-b-2 border-gray-200 bg-gray-100 flex justify-between' data-testid="item-card">
      <div className='py-2 w-3/4'>

        <div> {data?.name}</div>
        <div>₹{data?.defaultPrice / 100 || data?.price / 100}</div>
        <p className='text-xs'> {data?.description}</p>

      </div>
      <div className='w-1/4 p-4'>
        <div className='absolute'>{onDelete === null ? <button className='p-2 mx-16  bg-black shadow-lg rounded-lg text-white' onClick={() => handleAddItem(data)}>Add +</button> : null
        }
        </div>
        <img className='w-full rounded-lg' src={CDN_URL + data?.imageId}></img>

      </div>{onDelete !== null && <button onClick={onDelete}>Delete</button>}
    </div>
  )
}

export default Item