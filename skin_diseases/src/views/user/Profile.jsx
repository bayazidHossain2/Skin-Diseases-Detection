import React, { Component, useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import avater from '/avater.webp'
import { useStateContext } from '../../contexts/contextProvider';


export default function Profile() {
    const [type, setType] = useState(false);
    const { user, setUser } = useStateContext();
    const [imgBox, setimgBox] = useState(false);
    const [image, setImage] = useState();
    const [researchBox, setResearchBox] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState();
    const [paymentText, setPaymentText] = useState();


    const updateProfile = () => {

        axiosClient.post('/user/update-profile/1', "hejibiji")
            .then(() => {
                console.log('User profile upload success');
            })

        const data = new FormData();
        data.append('image', image);
        console.log(data);
        axiosClient.post('/image/profile', data)
            .then(({ data }) => {
                console.log('profile update success');
                console.log(data);

                axiosClient.post('/user/update-profile/' + user.id, data)
                    .then(({ data }) => {
                        console.log('User profile upload success');
                        console.log(data);
                        setUser(data);
                    })
                // closeBox();
                // navigate('/profile')
            })

    }
    const onResearch = () => {
        setResearchBox(true);
        setimgBox(false);
        setType('Research Search Time ')
        axiosClient.get('/content/get?uniqueName=paymentMethod')
            .then(({ data }) => {
                // setVision(data[0]);
                console.log(data);
                setPaymentMethod(data);
            })
        axiosClient.get('/content/get?uniqueName=paymentDiscribe')
            .then(({ data }) => {
                // setVision(data[0]);
                console.log(data);
                setPaymentText(data[0]);
            })
    }
    return (
        <div className="relative">

            <div className={type ? " opacity-50 pointer-events-none cursor-default" : 'bg-orange-300 p-10'}>
                <div className="flex flex-col bg-orange-100 w-[90%] md:w-[80%] rounded-xl p-10 md:20 mx-auto">
                    <div className="flex flex-col justify-between md:flex-row">
                        {/* Name Details */}
                        <div className="flex flex-col mt-6">
                            <h2 className='text-3xl font-bold'>{user.name}</h2>
                            <h2 className='text-xl font-semibold'>{user.email} </h2>
                            <h2 className='text-xl font-semibold'>{user.dob} </h2>
                            <div className="flex flex-row space-x-4 items-center">
                                <h2 className='text-xl font-semibold'>Available Search :  </h2>
                                <h2 className={(user.availableSearch >= 3) ? 'text-2xl font-bold text-green-600' : 'text-2xl font-bold text-red-600'} >{user.availableSearch} times</h2>

                            </div>
                            <button onClick={onResearch} className=' bg-orange-600 mt-2 px-4 py-2 rounded-md text-white self-start'>Research Now</button>
                            {/* <button className=' self-start bg-blue-900 text-white px-2 py-1 rounded-md text-xl mt-2'>Edit</button> */}
                        </div>
                        {/* Profile image */}
                        <div className=" border-4 border-blue-600 self-center rounded-xl">
                            <img onClick={(ev) => { ev.preventDefault(); setimgBox(true); setType('Update Profile') }} src={user.profileUrl ? 'http://localhost:8081/image/profile?link=' + user.profileUrl : avater} className='h-40 w-40 rounded-xl p-1' />
                        </div>
                    </div>

                    <hr className='my-16 border-2 border-orange-600' />
                    <h2 className='text-xl font-bold mb-5'>Search History</h2>
                    <div className="grid grid-col1 gap-2 md:gap-4 lg:gap-8 md:grid-cols-2">
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

                </div>
            </div>

            {/* Box Container  */}
            <div className={type ? "fixed rounded-lg pb-16 bg-orange-300 bg-opacity-80 p-8 top-24 min-h-fit w-[60%] left-[20%]" : " hidden "}>
                <div className="flex flex-col">
                    <div className="flex flex-row mb-4 justify-between">
                        <h2 className=' text-2xl font-bold text-blue-900'>{type}</h2>
                        <button onClick={(ev) => { ev.preventDefault(); setType(null) }} className=' bg-slate-800 rounded-md text-white px-3'>Close</button>
                    </div>
                    {/* Content */}
                    {imgBox ?
                        // Edit Image 
                        <div className="flex flex-col space-y-2">
                            <img src="" alt="" />
                            {user.profileUrl ?
                                <div className="flex flex-row justify-center ">
                                    <img onClick={(ev) => { ev.preventDefault(); setimgBox(true); setType('Update Profile') }} src={user.profileUrl ? 'http://localhost:8081/image/profile?link=' + user.profileUrl : avater} className='max-h-80 border-4 border-blue-300 rounded-sm ' />
                                </div>
                                :
                                <div className="flex flex-row w-[50%] bg-pink-200 p-10 h-80 self-center rounded-xl border-4 border-pink-600">
                                    <h3 className='text-xl text-center self-center'>You don't set any image to your profile yet.</h3>
                                </div>
                            }
                            <div className="flex flex-col">
                                <h3 className='text-xl text-blue-900 font-semibold'>Upload a image</h3>
                                <input onChange={(ev) => {
                                    setImage(ev.target.files[0]);
                                    console.log(ev.target.files[0])
                                }} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="file" />
                            </div>
                            <button onClick={updateProfile} className='w-28 py-2 self-end font-bold bg-green-600 rounded-md text-white px-3'>Save</button>

                        </div>
                        :
                        researchBox ?
                            <div className="">
                                {paymentMethod &&
                                    paymentMethod.map(method => (
                                        <div className="flex flex-row space-x-4 text-xl font-semibold text-black">
                                            <h3>{method.title} : </h3>
                                            <h4>{method.content}</h4>
                                        </div>
                                    ))

                                }
                                <div className="my-5">
                                    <h2 className='text-xl font-semibold'>{paymentText && paymentText.title} </h2>
                                    <p>
                                        {paymentText && paymentText.content}
                                    </p>
                                </div>
                                <div className="flex flex-row space-x-4">
                                    <div class="flex flex-col w-full">
                                        <label class="font-bold">Token: </label>
                                        <div className="flex flex-row w-3/4 space-x-4">
                                            <input type="text"  class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                                            <input type="text"  class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                                            <input type="text"  class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                                            <input type="text"  class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />

                                        </div>
                                    </div>
                                    <div className="flex">
                                        <button className=' self-end bg-orange-800 px-4 py-3 rounded-xl font-bold text-white '>Submit</button>

                                    </div>
                                </div>
                            </div>
                            :
                            <div className=""></div>

                    }
                </div>
            </div>
        </div>

    )
}