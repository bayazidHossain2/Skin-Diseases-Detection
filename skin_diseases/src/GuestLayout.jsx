import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider'
import Header from './Common/Header';
import Footer from './Common/Footer';

export default function GuestLayout() {

  const [box, setBox] = useState(false);

  const closeBox = () => {
    setBox(false);
  }

  const { token } = useStateContext()
  if (token) {
    return <Navigate to="/home" />
  }

  return (
    <div>
      <div className="relative">
        <div className={box ? " opacity-50 pointer-events-none cursor-default" : " bg-stone-200"}>

          <Header />
          {/* welcome  */}
          <div className=' flex flex-col w-[90%] mt-16 mb-16 mx-auto bg-gray-100 p-6 rounded-lg sm:w-[70%] md:space-x-4 md:flex-row'>
            <div className=" w-full md:w-1/2">
              <h3 className=" text-3xl font-bold text-blue-900">Welcome To</h3>
              <h4 className="text-xl font-bold text-blue-500">Computer & Programming Club, PUST</h4>
              <p className=' text-sm font-medium text-blue-400'>Please login to continue.</p>

            </div>
            <div className=" w-full md:w-1/2 mt-8">

              <Outlet />
            </div>
          </div>
          <Footer />
        </div>

        {/* Box Container  */}
        <div className={box ? "box absolute rounded-lg pb-16 bg-slate-400 p-8 top-24 min-h-fit w-[60%] left-[20%]" : " hidden "}>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <h2 className=' text-2xl font-bold text-blue-900'>Notice Topic</h2>
              <button onClick={closeBox} className=' bg-slate-800 rounded-md text-white px-3'>Close</button>
            </div>
            <div className=" mt-6">
              <p>This is a test text. This is a test text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text. text. This is a test text. This is a test text.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
