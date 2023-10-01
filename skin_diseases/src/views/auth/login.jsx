import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/contextProvider';

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const { setUser, setToken } = useStateContext();


  const onLogin = () => {
    setError('');
    if((emailRef.current.value=='') || (passwordRef.current.value=='')){
      setError('All fild is not filled.')
      return
    }
    const payload = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
    }
    console.log(payload);

    axiosClient.post('/user/get', payload)
      .then(({ data }) => {
        console.log('Success msg is : ' + data);
        console.log(data);
        setUser(data);
        setToken(data.token);

        const use = data.user;
        const tok = data.token;
        console.log("User and token is : ");
        console.log(use);
        console.log(tok);
      })
      .catch(err => {
        console.log('err msg : ' + err);
        console.log(err.response.status)
        if(err.response.status == 500){
          setError('This email is not registered. Registered first then you can login.')
        }else if(err.response.status == 502){
          setError('Incorrect Password. Check your password and try again.')
        }
      })
  }

  return (
    <div >
      {/* Error section */}
      {error &&
        <div className=" bg-red-300 border-4 border-red-500 my-5 p-3 rounded-lg">
          <p>{error}</p>
        </div>

      }
      <div className="">
        <form>
          <h2 className=' font-bold text-xl text-black'>Sign In :</h2>
          <div className=''>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1">
              <input ref={emailRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email." onChange={({ value }) => {
                console.log(value);
              }} />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1">
              <input ref={passwordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password." />
            </div>
          </div>
          <div className="mt-1 text-right">
            <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/signup">New User? Create an account.
            </Link>
          </div>
          <div className="mt-6 text-right">
            <div onClick={onLogin} className="bg-orange-700 hover:bg-orange-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
              Sign in
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
