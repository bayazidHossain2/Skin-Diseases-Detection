import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState(null);
  

  
  return (
    <div >
      {/* Error section */}
      {errors &&
        <div className=" bg-red-500 my-5 p-3 rounded-lg">

          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))

          }
        </div>

      }
      <div className="">
        <form>
          <h2 className=' font-bold text-xl text-blue-950'>Sign In :</h2>
          <div className=''>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1">
              <input ref={emailRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email." onChange={({ value }) => {
                console.log(value);
              }} />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1">
              <input ref={passwordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password." />
            </div>
          </div>
          <div className="mt-1 text-right">
            <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/mail-varify">Goto mail varification.
            </Link>
          </div>
          <div className="mt-1 text-right">
            <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/signup">New User? Create an account.
            </Link>
          </div>
          <div className="mt-6 text-right">
            <div className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
              Sign in
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
