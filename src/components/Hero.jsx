import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <>
    <div className='  p-3 lg:flex  lg:justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <span className=' font-extrabold text-6xl text-white'>
            Buy and Sell
            <br></br>
            Digitals Arts, 
            <br></br>
             NFT Collection
        </span>
        <Image
      src="/nft hero.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
    </>
  )
}

export default Hero