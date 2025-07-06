import React from 'react'
import { CDN_URL } from '../utils/constant'

const Item = ({ data }) => {
  return (
    <div className='text-left px-8 py-4 border-b-2 border-gray-200 bg-gray-100 flex justify-between'>
      <div className='py-2 w-3/4'>

        <div> {data?.name}</div>
        <div>  ₹  {data?.price / 100}</div>
        <p className='text-xs'> {data?.description}</p>

      </div>
      <div className='w-1/4 p-4'>
        <div className='absolute'>
          <button className='p-2 mx-16  bg-black shadow-lg rounded-lg text-white'>Add +</button>
        </div>
        <img className='w-full rounded-lg' src={CDN_URL + data?.imageId}></img>

      </div>



    </div>
  )
}

export default Item