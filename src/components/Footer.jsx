import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black m-0 text-white flex'>
      <div className="card1 w-[55%] ">
        <h1 className='font-bold text-4xl p-20 py-16 pb-10'>Made by Slok Tulsyan</h1>
        <p className='pl-56 pt-0 pb-14 font-semibold text-2xl'>Made with love</p>
      </div>
      <div className='bg-white my-7'>.</div>
      <div className="card2 m-3 my-9">
        <p className='font-semibold text-xl mb-5 mt-4'>For further queries contact: </p>
        <p className='font-semibold text-xl ml-3'>Name: Slok Tulsyan</p>
        <p className='font-semibold text-xl ml-3'>Email: sloktulsyan@gmail.com</p>
        <p className='font-semibold text-xl ml-3'>Developer's contact: 9931085103</p>
      </div>
      <div className="my-16 mx-10">
        <img className='object-cover object-top rounded-full h-w-28 w-28' src="..\public\Photo.jpg" alt="" />
        </div>
    </div>
  )
}

export default Footer

