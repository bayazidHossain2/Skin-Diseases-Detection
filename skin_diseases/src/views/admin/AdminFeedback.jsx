import avater from '/avater.webp'
import React from 'react'

export default function AdminFeedback() {
    return (
        <div>
            {/* Recent Activities  */}
            <div className="grid grid-cols-1 m-10 gap-2 md:gap-4 lg:gap-8 md:grid-cols-2">
                <div className="min-w-[45%] border-2 p-5 border-blue-900 rounded-xl">
                    <div className="flex flex-col space-x-4 lg:flex-row">
                        {/* Image */}
                        <div className="flex flex-row justify-center ">
                            <img src={false ? 'http://localhost:8081/image/profile?link=' : avater} className='max-h-[20vh] border-4 border-blue-800 rounded-lg' />
                        </div>
                        {/* Result show section */}
                        <div className="flex flex-col space-y-4 mt-10lg:space-y-0">
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>Diseases Name : </h2>
                                <h2 className=' text-2xl font-semibold'>Diseas</h2>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>With Confidence : </h2>
                                <h2 className=' text-2xl font-semibold'>78%</h2>
                            </div>
                        </div>

                    </div>
                    {/* Feedback Section */}
                    <div className="flex flex-col mt-4">
                        <p className=' p-2 w-full border-2 border-blue-700 rounded-lg'>
                            feedback
                        </p>
                        <button className=' bg-red-500 mt-2 px-4 py-1 rounded-md text-white self-end'>Delete</button>
                    </div>
                </div>
                <div className="min-w-[45%] border-2 p-5 border-blue-900 rounded-xl">
                    <div className="flex flex-col space-x-4 lg:flex-row">
                        {/* Image */}
                        <div className="flex flex-row justify-center ">
                            <img src={false ? 'http://localhost:8081/image/profile?link=' : avater} className='max-h-[20vh] border-4 border-orange-500 rounded-lg' />
                        </div>
                        {/* Result show section */}
                        <div className="flex flex-col space-y-4 mt-10lg:space-y-0">
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>Diseases Name : </h2>
                                <h2 className=' text-2xl font-semibold'>Diseas</h2>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>With Confidence : </h2>
                                <h2 className=' text-2xl font-semibold'>78%</h2>
                            </div>
                        </div>

                    </div>
                    {/* Feedback Section */}
                    <div className="flex flex-col mt-4">
                        <p className=' p-2 w-full border-2 border-orange-600 rounded-lg'>
                            feedback
                        </p>
                        <button className=' bg-orange-800 mt-2 px-4 py-1 rounded-md text-white self-end'>Delete Feedback</button>
                    </div>
                </div>
                <div className="min-w-[45%] border-2 p-5 border-blue-900 rounded-xl">
                    <div className="flex flex-col space-x-4 lg:flex-row">
                        {/* Image */}
                        <div className="flex flex-row justify-center ">
                            <img src={false ? 'http://localhost:8081/image/profile?link=' : avater} className='max-h-[20vh] border-4 border-orange-500 rounded-lg' />
                        </div>
                        {/* Result show section */}
                        <div className="flex flex-col space-y-4 mt-10lg:space-y-0">
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>Diseases Name : </h2>
                                <h2 className=' text-2xl font-semibold'>Diseas</h2>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>With Confidence : </h2>
                                <h2 className=' text-2xl font-semibold'>78%</h2>
                            </div>
                        </div>

                    </div>
                    {/* Feedback Section */}
                    <div className="flex flex-col mt-4">
                        <p className=' p-2 w-full border-2 border-orange-600 rounded-lg'>
                            feedback
                        </p>
                        <button className=' bg-orange-800 mt-2 px-4 py-1 rounded-md text-white self-end'>Delete Feedback</button>
                    </div>
                </div>
                <div className="min-w-[45%] border-2 p-5 border-blue-900 rounded-xl">
                    <div className="flex flex-col space-x-4 lg:flex-row">
                        {/* Image */}
                        <div className="flex flex-row justify-center ">
                            <img src={false ? 'http://localhost:8081/image/profile?link=' : avater} className='max-h-[20vh] border-4 border-orange-500 rounded-lg' />
                        </div>
                        {/* Result show section */}
                        <div className="flex flex-col space-y-4 mt-10lg:space-y-0">
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>Diseases Name : </h2>
                                <h2 className=' text-2xl font-semibold'>Diseas</h2>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
                                <h2 className=' text-2xl font-bold'>With Confidence : </h2>
                                <h2 className=' text-2xl font-semibold'>78%</h2>
                            </div>
                        </div>

                    </div>
                    {/* Feedback Section */}
                    <div className="flex flex-col mt-4">
                        <p className=' p-2 w-full border-2 border-orange-600 rounded-lg'>
                            feedback
                        </p>
                        <button className=' bg-orange-800 mt-2 px-4 py-1 rounded-md text-white self-end'>Delete Feedback</button>
                    </div>
                </div>
            </div>
            {/* ./Recent Activities */}
        </div>
    )
}
