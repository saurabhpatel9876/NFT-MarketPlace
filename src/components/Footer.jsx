
import React from "react"
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      

      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          Artist
        </p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          Features
        </p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          Community
        </p>
      </div>

      <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-xs">
          &copy;2022 All rights reserved
        </p>
      </div>
    </div>
   </div>
)

export default Footer
