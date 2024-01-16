import axiosClient from '../../axios-client';
import avater from '/avater.webp'
import React, { useEffect, useState } from 'react'

export default function AdminFeedback() {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [allFeedback, setAllFeedback] = useState();

    useEffect(() => {
        getAllFeedback();
    }, [])

    const getAllFeedback = () => {
        axiosClient.get('/feedback/admin/all')
            .then(({ data }) => {
                console.log(data);
                setAllFeedback(data);
            })
    }

    const onDelete = (id) => {
        if (!confirm('Are you sure to delete.')) {
            return
        }
        axiosClient.delete('/feedback/delete/' + id)
            .then(({ data }) => {
                console.log(data);
                getAllFeedback();
            })
    }

    return (
        <div>
            {/* Feedback Section */}
            <div className="min-h-screen rounded-lg m-10 p-10 bg-blue-100 lg:p-16">
                <h2 className='p-2 text-2xl font-bold'>All Feedback:</h2>

                <hr className='my-16 border-2 border-blue-600' />

                {/* all users */}
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
                    {allFeedback &&
                        allFeedback.map(feedback => (
                            // {/* Container 1 */}
                            <div className="flex flex-col justify-between p-4 rounded-lg shadow-lg bg-slate-50">
                                <div className="">
                                    <div className="flex flex-row space-x-2">
                                        <div className="w-20 h-16">
                                            <img className='rounded-full h-[90%] w-[90%] p-1 border-2 lg:border-4 border-blue-500' src={feedback.profileUrl ? `${import.meta.env.VITE_API_BASE_URL}` + '/image/profile?link=' + feedback.profileUrl : avater} alt="" />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <h2 className='text-xl font-bold'>{feedback.userName}</h2>
                                            <h3 className='text-lg'>{feedback.time}</h3>
                                        </div>
                                    </div>
                                    <p className='mt-5 text-justify'>{feedback.feedbackText}</p>
                                </div>
                                <div className="self-end my-4">
                                    <button onClick={(ev) => {ev.preventDefault(); onDelete(feedback.id)}} className='text-white bg-red-600 py-2 px-4 rounded-md'>Delete</button>
                                </div>
                            </div>
                        ))

                    }

                </div>
            </div>
        </div>
    )
}
