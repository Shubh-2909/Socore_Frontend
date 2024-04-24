import React from 'react'

const PostStats = ({post , userId}) => {
  return (
    <div className='flex justify-between items-center z-20'>
      <div className='flex gap-2 mr-5 ml-5'>
        <img src="/assets/like.svg" alt="like" 
        width={25}
        height={25}
        onClick={() => {}}
        className='cursor-pointer'/>
        <p className='small-medium lg:base-medium '>0</p>
      </div>

      <div className='flex gap-2 mr-4 mb-1'>
        <img src="/assets/save.svg" alt="like" 
        width={25}
        height={25}
        onClick={() => {}}
        className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default PostStats
