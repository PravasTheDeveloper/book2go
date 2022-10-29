import React from 'react'
import {ChevronDownIcon} from '@heroicons/react/24/solid';

function HomePageContent() {
    return (
        <>
            <div className='Home__Page__Content flex justify-center items-center container mx-auto p-10 text-center' >
                {/* <div>
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
                </div> */}
                <div className='container mx-auto Home__Page__Content'>
                <div className='flex h-full'>
                    <div className='flex-1 h-full flex items-center justify-center'>
                        <div className=' bg-white w-3/5 p-10 rounded-xl shadow-lg'>
                            <div>
                                <h1 className='text-xl font-bold mb-6'>Search Room</h1>
                            </div>
                            <div className='border border-slate-300 w-full rounded-2xl overflow-hidden'>
                                <div className='flex justify-between'>
                                    <div className=' border-r border-slate-300 w-2/4 h-max'>
                                        <div className='p-5 border-b border-slate-300'>
                                            <h1 className='text-xs text-slate-400'>Check-In</h1>
                                            <input type="date" className='w-full border-b border-slate-300 outline-none text-base' />
                                        </div>
                                        <div className='p-5 border-b border-slate-300'>
                                            <h1 className='text-xs text-slate-400'>Room</h1>
                                            <select name="cars" id="cars" className='outline-none p-0'>
                                                <option value="volvo">1</option>
                                                <option value="saab">2</option>
                                                <option value="opel">3</option>
                                                <option value="audi">4</option>
                                            </select>
                                        </div>
                                        <div className='p-5 border-b border-slate-300'>
                                            <h1 className='text-xs text-slate-400'>Adult</h1>
                                            <input type="Number" value="1" className='w-full border-b border-slate-300 outline-none' />
                                        </div>
                                    </div>
                                    <div className='w-2/4'>

                                        <div className='p-5 border-b border-slate-300'>
                                            <h1 className='text-xs text-slate-400'>Check-Out</h1>
                                            <input type="date" className='w-full border-b border-slate-300 outline-none' />
                                        </div>
                                        <div className='p-5 border-b border-slate-300'>
                                            <h1 className='text-xs text-slate-400'>Room Type</h1>
                                            <select name="cars" id="cars" className='outline-none p-0 text-sm'>
                                                <option value="volvo">ECONOMY</option>
                                                <option value="saab"></option>
                                                <option value="opel">3</option>
                                                <option value="audi">ECONOMY</option>
                                            </select>
                                        </div>
                                        <div className='p-5 border-b border-slate-300'>
                                            <h1 className='text-xs text-slate-400'>Children</h1>
                                            <input type="Number" value="1" className='w-full border-b border-slate-300 outline-none' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='bg-cyan-600 w-full py-3 text-xl text-white'>
                                        SEARCH
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex-1 flex flex-col items-center justify-around h-full p-10 box-border text-white'>
                        <div className='text-right font-light uppercase'>
                            <h2 className='text-4xl'>Get Preeminent Hotel</h2>
                            <h1 className='text-6xl mt-10'>IN <span className='font-bold'>Bangladesh</span></h1>
                        </div>

                        <div className='bg-white w-80 text-black text-xs p-8'>
                            <h3 className='text-xl'>Spacial Offer</h3>
                            <div className='text-slate-500 mt-4'>
                                Cox's Bazar
                            </div>
                            <div className='text-slate-500 flex justify-between mt-5'>
                                <div><i class="fa-solid fa-bed"></i> 2 Bed</div>
                                <div><i class="fa-solid fa-wifi"></i> Wifi</div>
                                <div><i class="fa-solid fa-mountain"></i> Font View</div>
                            </div>
                            <div className='text-base flex justify-between items-center mt-6'>
                                <div>
                                4 Day at<span className='text-cyan-600 text-xl'> 4999 taka</span>
                                </div>
                                
                                <button className='bg-cyan-600 text-white p-2 px-6 '>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HomePageContent
