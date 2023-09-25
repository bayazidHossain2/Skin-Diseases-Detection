import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/contextProvider';
import axiosClient from '../../axios-client';

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const DOBRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSignup = () => {
    const payload = {
      "name": nameRef.current.value,
      "email": emailRef.current.value,
      "dob": DOBRef.current.value,
      "password": passwordRef.current.value,
      "role": "user"
    }
    console.log(payload);

    axiosClient.post('/user/add',payload)
      .then(({data}) => {
        console.log('Success msg is : '+data);
        navigate('/login');
        
      })
      .catch(err => {
        console.log('err msg : '+err);
      })

  }


  return (
    <div>

      <div>
        {/* Error section */}
        {errors &&
          <div className=" bg-red-500 my-5 p-3 rounded-lg">

            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        <form>
          <h2 className=' font-bold text-xl text-black'>Registration :</h2>
          {/* Name  */}
          <div className='inp-component'>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <div className="mt-1">
              <input ref={nameRef} type="text" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your Name." />
            </div>
          </div>

          {/* Email  */}
          <div className='inp-component mt-4'>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1">
              <input ref={emailRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email." />
            </div>
          </div>
          {/* Email  */}
          <div className='inp-component mt-4'>
            <label className="block text-sm font-medium text-slate-700">Date of birth: </label>
            <div className="mt-1">
              <input ref={DOBRef} type="date" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email." />
            </div>
          </div>
          {/* password  */}
          <div className="inp-component mt-4">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1">
              <input ref={passwordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password." />
            </div>
          </div>
          {/* Confirm Password  */}
          <div className="inp-component mt-4">
            <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
            <div className="mt-1">
              <input ref={confirmPasswordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password again." />
            </div>
          </div>

          <div className="mt-1 text-right">
            <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/login">Already have an account? goto sign in.
            </Link>
          </div>

          {loading &&
            <div className="mt-1 text-center">
              <div className=" text-orange-500 pt-2.5 text-sm leading-5 rounded-md font-semibold" >Wait for surver response...
              </div>
            </div>
          }

          <div className={loading ? " opacity-50 pointer-events-none cursor-default mt-6 text-right" : "mt-6 text-right"}>
            <div onClick={onSignup} className="bg-orange-700 hover:bg-orange-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
              Sign up
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
