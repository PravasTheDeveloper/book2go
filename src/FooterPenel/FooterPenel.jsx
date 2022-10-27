import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function FooterPenel() {
    return (
        <>
            <div className='footer__penel bg-slate-900 w-full'>
                <div className='container mx-auto text-white py-16 h-full'>
                    <div className='flex justify-between h-full'>
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                <h1 className='text-3xl font-normal'>LOGO</h1>
                            </div>

                            <div className='text-xl font-light text-white'>
                                <p>51 Siddheswari Road, Dhaka 1217</p>
                                <p>info.booktogo@gmail.com</p>
                                <p>+880 1998027752</p>
                            </div>
                            <div>
                                <button className='bg-teal-500 py-3 px-10 text-xl text-white'>
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between h-full text-center' >
                            <div>
                                <h1 className='text-3xl font-normal'>Our Services</h1>
                            </div>
                            <div className='text-xl font-light text-white'>
                                <p className='my-5'>Book Hotel</p>
                                <p className='my-5'>Heir Guide</p>
                                <p className='my-5'>Airport to hotel taxi</p>
                                <p className='my-5'>Rental Car for tour</p>
                            </div>

                        </div>
                        <div className='h-full text-center' >
                            <div>
                                <h1 className='text-3xl font-normal'>We Are On</h1>
                            </div>
                            <div className='text-xl font-light text-white my-7'>
                                <p>info.booktogo@gmail.com</p>
                            </div>
                            <div className='footer__icons flex justify-between'>
                                <FontAwesomeIcon className='text-3xl' icon={faFacebook} />
                                <FontAwesomeIcon className='text-3xl' icon={faTwitter} />
                                <FontAwesomeIcon className='text-3xl' icon={faInstagram} />
                                <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterPenel
