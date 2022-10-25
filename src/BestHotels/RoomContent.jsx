import React from 'react'
import {StarIcon} from '@heroicons/react/24/solid';

function RoomContent({image}) {
    return (
        <>
            <div className='bg-white shadow-xl w-1/4 best__hotel__box__sizing relative rounded-xl '>
                <div className='h-3/5 w-full bg-green-600 rounded-xl'>
                    <img src={image} alt="" className='w-full h-full rounded-xl' />
                </div>
                <div className='h-1/2 w-full bg-white rounded-xl absolute bottom-0 p-6'>
                    <h1 className='text-4xl mb-5'>Duplex Room</h1>
                    <p>Semi double bed 1 guest room, 3 window</p>
                    <p className='my-5 text-xl font-bold'>Starting from 50 $/Night</p>
                    <button className='bg-teal-500 text-white text-lg p-1 px-6 rounded-md mt-10'>Book Now</button>
                </div>
                <div className='Room__Content__StartValue my_shadow h-12 absolute font-bold w-24 text-2xl text-orange-500 bg-white flex justify-center items-center my-shadow rounded bottom-8 right-10'>
                   <StarIcon className='h-7 mr-3'/> 4.9
                </div>
            </div>
        </>
    )
}

export default RoomContent
