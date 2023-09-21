import React, { useEffect, useState } from 'react'
import menue_btn_logo from '../assets/image/logo/menue_btn_logo.webp'
import { ContextProvider, useStateContext } from '../contexts/contextProvider'
import { Link, Navigate } from 'react-router-dom';


export default function DefaultLayout() {

  const { user, token } = useStateContext();
  
  const [bottomMenue, setBottomMenue] = useState(false);
  const [usersActive, setUserActive] = useState(false);
  const [eventsActive, setEventsActive] = useState(false);
  const [blogsActive, setBlogsActive] = useState(false);
  const [mailActive, setMailActive] = useState(false)
  // if (token==null) {
  //   return <Navigate to='/login' />
  // }

  const menueToggle = (ev) => {

    ev.preventDefault();
    setBottomMenue(!bottomMenue);

  }


  return (
    <div className=' relative'>
      {/* Manue option  */}
      <div onClick={menueToggle} className=" w-10 h-10 rounded-lg absolute bottom-6 right-6 md:hidden">
        <img src={menue_btn_logo} alt="img" />
      </div>
      {/* Bottom menue for small screen */}
      <div className=" bg-blue-400 bg-opacity-50 absolute bottom-10 right-16 rounded-lg md:hidden">
        <div className={bottomMenue ? "" : "hidden"}>
          <div className=' flex flex-col space-y-3 p-3 text-white'>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/dashboard">Dashboard</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/users">Users</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/events">Eventsss</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/blogs">Blogs</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/notify">Notify Via Mailing</Link>
          </div>
        </div>

      </div>
      {/* Aside Menue for big screen */}
      <div className='flex flex-row w-full h-screen'>
        <aside className='hidden flex-col space-y-3 bg-rose-800 text-amber-200 p-4 w-1/4 md:pt-8 md:pl-4 md:flex'>
          <h3 className=' text-2xl font-bold mt-3 mx-auto'>Admin</h3>
          <ul className="overflow-auto flex flex-col space-y-3">
            {/* Dashboard */}
            <li className='flex flex-row items-center hover:text-slate-200 p-2 text-left font-bold cursor-pointer '>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Dashboard

            </li>
            {/* Users */}
            <li className='flex flex-col p-2 text-left font-bold cursor-pointer '>
              <div  className="flex flex-row items-center ">
                <svg className={usersActive ? 'w-8 h-8' : 'w-6 h-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>

                Users
              </div>
              {/* User sub item */}
              <div className={usersActive ? '' : 'hidden'}>
                <ol className='ml-6 font-semibold flex flex-col space-y-2'>
                  <li>
                    <Link to="/advisor">Advisor</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/member">Member</Link>
                  </li>
                  <li>
                    <Link to="/userrequest">Requested User</Link>
                  </li>
                </ol>
              </div>
            </li>

           
            

          </ul>

        </aside>

        <div className="content flex flex-col bg-rose-300 w-full h-[100%]">

          {/* Heading section */}
          <header className=' bg-rose-600 m-3 p-6 rounded-lg py-6 flex flex-row justify-between items-center'>
            <div>
              <h3 className=' text-xl font-bold text-amber-300'>Easy Skin Diseases Detection</h3>
              <h3 className=' text-md font-semibold text-amber-200'>Health Care Services</h3>
            </div>
            <div className='flex flex-col'>
              <h5 className=' text-amber-100 font-semibold'>Admin Name</h5>
              <button  className='py-1 px-2 my-1 rounded-sm bg-amber-300 text-red-700'>Logout</button>
            </div>
          </header>
          {/* Container Body section */}
          <main className='m-3 mt-3 p-4 rounded-sm h-[80%]'>
            {/* <Outlet /> */}
          </main>
        </div>
      </div>

    </div>
  )
}
