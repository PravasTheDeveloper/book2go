import React from 'react'
import {ChevronDownIcon} from '@heroicons/react/24/solid';

function HomePageContent() {
    return (
        <>
            <div className='Home__Page__Content flex justify-center items-center container mx-auto p-10 text-center' >
                <div>
                    <div className='text-white w-screen'>
                        <h1 className='text-7xl font-light uppercase'>Get Preeminent Hotel</h1>
                        <div className='w-1/2 text-lg mt-32 mx-auto'>
                            <ul className='w-full flex justify-between bg-white text-black rounded-lg'>
                                <li className='bg-teal-500 py-5 px-8 text-white rounded-lg'>LUXURY HOTEL</li>
                                <li className='py-5 px-8'>LUXURY HOTEL</li>
                                <li className='py-5 px-8'>LUXURY HOTEL</li>
                                <li className='py-5 px-8'>LUXURY HOTEL</li>
                            </ul>
                        </div>
                        <div className='w-1/2 text-lg mb-32 mx-auto'>
                            <ul className='w-full flex justify-between text-white border rounded-lg'>
                                <li className=' py-4 px-16 rounded-l-lg flex justify-center items-center'>Location <ChevronDownIcon className='w-8 mt-2 ml-2' /></li>
                                <li className='py-4 px-16 border-l-2 flex justify-center items-center'>Members <ChevronDownIcon className='w-8 mt-2 ml-2' /></li>
                                <li className='py-4 px-16 border-l-2 flex justify-center items-center'>Check In <ChevronDownIcon className='w-8 mt-2 ml-2' /></li>
                                <li className='py-4 px-20 rounded-lg bg-teal-500 text-white flex justify-center items-center'>Search</li>
                            </ul>
                        </div>
                        <h1 className='text-7xl font-light uppercase'>In <span className='font-bold'>Bangladesh</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageContent
