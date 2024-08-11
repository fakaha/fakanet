import React from 'react'
import { Button } from '../elements/Button'

export const Hero = () => {
  return (
    <div className='bg-[#FF6F61] px-4 py-28 text-[#fff] text-center'>
        <h1 className='text-2xl mb-8'>Selamat Datang di Fakanet</h1>
        <h2 className='text-4xl mb-8'>Mitra Terbaik dalam Pengembangan Website Bisnis Anda</h2>
        <Button link='https://wa.me/6287708899020?text=Halo Fakanet, saya mau bikin website untuk usaha saya' variant='bg-[#FFFFFF]' font='text-[#FF6F61]'>Hubungi Kami</Button>
    </div>
  )
}
