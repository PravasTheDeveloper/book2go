import React from 'react'
import RoomContent from './RoomContent'

function BestHotels() {
    return (
        <>
            <div className='h-screen container mx-auto py-20 overflow-hidden'>
                <div className='h-full'>
                    <h1 className='text-6xl m capitalize'><span className='border-teal-500 border-b-4'>Most top</span><span className='font-bold'> hotels</span></h1>
                    <p className='text-lg pt-10'>Bed Rooms</p>
                    <div className='pt-16 flex justify-around'>
                        <RoomContent image="Hotle-One.png" />
                        <RoomContent image="Hotle-Two.png" />
                        <RoomContent image="Hotle-Three.png" />
                    </div>
                    <div className='flex justify-end mt-20 text-2xl underline text-teal-500 cursor-pointer'>
                        See More
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestHotels
