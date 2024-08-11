import React from 'react'
import telephone from '../../assets/image/telephone.png'
import mail from '../../assets/image/mail.png'
import { ContactInfo } from '../elements/ContactInfo'

export const Contact = () => {
  return (
    <div id='contact' className='py-20 px-4'>
        <h2 className='text-2xl mb-4 font-bold'>Hubungi Kami</h2>
        <p className='text-lg mb-4'>Wujudkan Usaha Digital Anda Bersama Kami</p>
        <div className='flex flex-col gap-2'>
            <ContactInfo link='https://wa.me/6287708899020'  icon={telephone} contact='087708899020'/>
            <ContactInfo link='mailto:fakahaworks@gmail.com' icon={mail} contact='fakahaworks@gmail.com'/>
        </div>
    </div>
  )
}
