import React from 'react'
import check from "../assets/check.svg"
import img from "../assets/Photo.svg"
export default function component3() {
  return (
    <>
    <div className='container md:grid  md:grid-cols-2 md:gap-5 md:py-7'>
    <div>
    <p className='font-bold text-2xl pb-4'>Demonstrate branding consequently think outside</p>
    <p className='flex'><img src={check} alt="" /> Enterprise-grade security</p>
    <p className='flex'><img src={check} alt="" /> 99.9% guaranteed uptime SLA</p>
    <p className='flex'><img src={check} alt="" /> Designated customer success team</p>
    <button className='bg-primary rounded-md p-2 font-bold text-white m-3'>Start now</button>
    </div>
    <div className='py-6 md:px-[10%] '>
    <img src={img} alt="" />
    </div>
    </div>
    </>
  )
}
