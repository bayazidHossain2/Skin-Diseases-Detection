import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';

export default function AdminDashbord() {
    const [userCount, setUserCount] = useState();
    const [searchCount, setSearchCount] = useState();
    const [feedbackCount, setFeedbackCount] = useState();
    const [tokenCount, setTokenCount] = useState();
    const [Statistic, setStatistic] = useState();


    useEffect(() => {
        axiosClient.get('/user/count')
            .then(({ data }) => {
                setUserCount(data);
            })
        axiosClient.get('/token/count')
            .then(({ data }) => {
                setTokenCount(data);
            })
        axiosClient.get('/feedback/count')
            .then(({ data }) => {
                setFeedbackCount(data);
            })
        axiosClient.get('/history/count')
            .then(({ data }) => {
                setSearchCount(data);
                console.log(data);
            })

        axiosClient.get('/history/countByName')
            .then(({ data }) => {
                setStatistic(data);
                console.log(data);
            })

    }, [])


    const getCss = (per) => {
        let array = []
        let col = 'bg-blue-500';
        if (per <= 10) {
            333
            col = 'bg-blue-400'
        } else if (per <= 20) {
            col = 'bg-pink-500'
        } else if (per <= 30) {
            col = 'bg-blue-600'
        } else if (per <= 40) {
            col = 'bg-pink-600'
        } else if (per <= 50) {
            col = 'bg-orange-700'
        } else if (per <= 60) {
            col = 'bg-red-600'
        } else if (per <= 70) {
            col = 'bg-red-600'
        } else if (per <= 80) {
            col = 'bg-red-600'
        } else if (per <= 90) {
            col = 'bg-red-600'
        } else {
            col = 'bg-green-600'
        }
        let html = <div style={{ width: `${per}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${col}`}></div>

        return html

    }
    return (
        <div>
            {/* Statistics Cards  */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl">{userCount}</p>
                        <p>Total User</p>
                    </div>
                </div>
                <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <svg className='p-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl">{searchCount}</p>
                        <p>Totla Search</p>
                    </div>
                </div>
                <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <svg width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.549 10.078c.46.182.88.424 1.258.725.378.3.701.65.97 1.046a4.829 4.829 0 0 1 .848 2.714V15H9.75v-.438a3.894 3.894 0 0 0-1.155-2.782 4.054 4.054 0 0 0-1.251-.84 3.898 3.898 0 0 0-1.532-.315A3.894 3.894 0 0 0 3.03 11.78a4.06 4.06 0 0 0-.84 1.251c-.206.474-.31.985-.315 1.531V15H1v-.438a4.724 4.724 0 0 1 .848-2.713 4.918 4.918 0 0 1 2.229-1.77 2.994 2.994 0 0 1-.555-.493 3.156 3.156 0 0 1-.417-.602 2.942 2.942 0 0 1-.26-.683 3.345 3.345 0 0 1-.095-.739c0-.423.08-.82.24-1.189a3.095 3.095 0 0 1 1.626-1.627 3.067 3.067 0 0 1 2.386-.007 3.095 3.095 0 0 1 1.627 1.627 3.067 3.067 0 0 1 .157 1.928c-.06.237-.148.465-.266.684a3.506 3.506 0 0 1-.417.608c-.16.187-.345.35-.554.492zM5.812 9.75c.301 0 .584-.057.848-.17a2.194 2.194 0 0 0 1.162-1.163c.119-.269.178-.554.178-.854a2.138 2.138 0 0 0-.643-1.538 2.383 2.383 0 0 0-.697-.472 2.048 2.048 0 0 0-.848-.178c-.3 0-.583.057-.847.17a2.218 2.218 0 0 0-1.17 1.17c-.113.264-.17.547-.17.848 0 .3.057.583.17.847.115.264.27.497.466.697a2.168 2.168 0 0 0 1.552.643zM15 1v7h-1.75l-2.625 2.625V8H9.75v-.875h1.75v1.388l1.388-1.388h1.237v-5.25h-8.75v1.572a7.255 7.255 0 0 0-.438.069 2.62 2.62 0 0 0-.437.123V1H15z"></path></g></svg>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl">{feedbackCount}</p>
                        <p>Total Feedback</p>
                    </div>
                </div>
                <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl">{tokenCount}</p>
                        <p>Available Token</p>
                    </div>
                </div>
            </div>
            {/* ./Statistics Cards  */}

            <div class="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4 lg:p-10">

                {/* Social Traffic */}
                <div class="relative flex flex-col min-w-0 mb-4 bg-blue-50 lg:mb-0 break-words w-full shadow-lg rounded">
                    <div class="rounded-t mb-0 px-0 border-0">
                        <h3 class="font-semibold p-4 rounded-t-lg bg-blue-400 text-xl text-gray-900">Diseases Search Statistic</h3>


                        <div className="flex flex-col w-full">
                            {Statistic &&
                                Statistic.map(st => (
                                    // {/* Catagory Parcentage */}
                                    <div className="w-full">
                                        <div class="text-gray-700 w-full flex flex-row">
                                            <h3 class="border-t-0 px-4 w-1/4 text-lg align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left font-semibold">{st[0]}</h3>
                                            <p class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">{st[1]}</p>
                                            <div class="border-t-0 px-4 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div class="flex items-center">
                                                    <span class="mr-2 ">{Math.round(st[1] * 100 / searchCount)}%</span>
                                                    <div class="relative w-full">
                                                        <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">

                                                            {
                                                                getCss(Math.round(st[1] * 100 / searchCount))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                {/* ./Social Traffic */}

            </div>


        </div>
    )
}
