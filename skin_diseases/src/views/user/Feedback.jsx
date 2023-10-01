import React, { useEffect, useRef, useState } from 'react';
import avater from '/avater.webp';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/contextProvider';


export default function Feedback() {
  const { user } = useStateContext();
  const feedbackRef = useRef();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [allFeedback, setAllFeedback] = useState();

  useEffect(() => {
    axiosClient.get('/feedback/all')
      .then(({ data }) => {
        console.log(data);
        setAllFeedback(data);
      })


  }, [])

  const onFeedbackSubmit = () => {
    setError('');
    setSuccess('');
    if (!feedbackRef || feedbackRef.current.value === '') {
      setError('Write some feedback text.')
      return;
    }
    const payload = {
      userId: user.id,
      feedbackText: feedbackRef.current.value
    }
    axiosClient.post('/feedback/add', payload)
      .then(({ data }) => {
        console.log('Feedback Submit success');
        console.log(data);
        // feedbackRef = null;
        setSuccess(data);
      }).catch((error) => {
        setError('Your text maybe too much long. Please write your feedback within 1000 characters.');
      });
  }

  return (
    <div>
      {/* Feedback Section */}
      <div className="min-h-screen mx-10 p-10 bg-orange-200 lg:p-16">
        {/* Feedback input  */}
        <div className="">
          {/* Error  */}
          <div className={error ? "flex flex-row justify-between bg-red-200 my-5 p-4 border-2 border-red-400 rounded-xl" : "hidden"}>
            <p>{error}</p>
            <button onClick={(ev) => { ev.preventDefault(); setError('') }} className='text-red-800 p-2 hover:bg-blue-100'>X</button>
          </div>
          {/* Success  */}
          <div className={success ? "flex flex-row justify-between bg-green-200 my-5 p-4 border-2 border-green-400 rounded-xl" : "hidden"}>
            <p>{success}</p>
            <button onClick={(ev) => { ev.preventDefault(); setSuccess('') }} className='text-red-800 p-2 hover:bg-blue-100'>X</button>
          </div>
          <div className="flex flex-col mt-4">
            <textarea ref={feedbackRef} placeholder='Write your feedback about your experiance..' className='h-[12vh] p-2 w-full border-2 border-orange-600 rounded-lg' />
            <div className="self-end">
              <button onClick={onFeedbackSubmit} className=' bg-orange-800 mt-2 px-4 py-2 rounded-md text-white'>Submit Feedback</button>
            </div>
          </div>
        </div>
        <hr className='my-16 border-2 border-orange-600' />

        {/* all users */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
          {allFeedback &&
            allFeedback.map(feedback => (
              // {/* Container 1 */}
              <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
                <div className="flex flex-row space-x-2">
                  <div className="w-1/4">
                    <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={feedback.profileUrl ? `${import.meta.env.VITE_API_BASE_URL}` + '/image/profile?link='+feedback.profileUrl : avater} alt="" />
                  </div>
                  <div className="flex flex-col w-full">
                    <h2 className='text-xl font-bold'>{feedback.userName}</h2>
                    <h3 className='text-lg'>{feedback.time}</h3>
                  </div>
                </div>
                <p className='mt-5 text-justify'>{feedback.feedbackText}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}
