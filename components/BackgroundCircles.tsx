import React from 'react'


type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border border-blue-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='border border-blue-500 rounded-full h-[300px] w-[300px] absolute mt-52' />
      <div className='border border-blue-500 rounded-full h-[500px] w-[500px] mt-52 absolute' />
      <div className='rounded-full border-[#a690e0] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='border border-blue-500 rounded-full h-[800px] w-[800px] mt-52 absolute'/>
    </div>
  )
}