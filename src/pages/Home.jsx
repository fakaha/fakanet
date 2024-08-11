import React from 'react'
import { Navbar } from '../components/layouts/Navbar'
import { Hero } from '../components/layouts/Hero'
import { WhyUs } from '../components/layouts/WhyUs'
import { Contact } from '../components/layouts/Contact'

export const Home = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <Hero/>
        <WhyUs/>
        <Contact/>
    </div>
  )
}
