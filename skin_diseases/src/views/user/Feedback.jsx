import React from 'react';
import avater from '/avater.webp';


export default function Feedback() {
  return (
    <div>
      <div className="h-screen mx-10 p-10 bg-orange-200 lg:p-16">
        {/* all users */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
          {/* {allUser &&
            allUser.map(user => (
              <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
                <div className="flex flex-row space-x-2">
                  <div className="w-1/4">
                    <img className='rounded-full p-1 border-2 lg:border-4 border-pink-500' src={user.profileUrl ? 'http://localhost:8081/image/profile?link=' + user.profileUrl : avater} alt="" />
                  </div>
                  <div className="flex flex-col w-full">
                    <h2 className='text-xl font-bold'>{user.name}</h2>
                    <h3 className='text-lg font-semibold'>{user.email}</h3>
                    <p>{user.dob}</p>

                  </div>
                </div>
                <div className="flex flex-row space-x-2 mt-5 justify-between items-center">
                  <div className="flex flex-row items-center space-x-2">
                    <h3 className='text-lg font-semibold'>Role : </h3>
                    <p>{user.role}</p>
                  </div>
                  <button className='bg-blue-800 px-2 py-1 rounded-lg text-white font-semibold'>Make Admin</button>
                </div>
                <div className="flex flex-row space-x-2 mt-5 justify-between items-center">
                  <div className="flex flex-row items-center space-x-4">
                    <h3 className='text-lg w-1/4 font-semibold'>Token: </h3>
                    <p>{user.token ? user.token : 'User not actiove.'}</p>
                  </div>
                  <button className='bg-red-800 w-1/4 px-2 py-1 rounded-lg text-white font-semibold'>Remove Token</button>
                </div>
                <button className='bg-red-600 mt-4 w-1/4 self-end px-2 py-1 rounded-lg text-white font-semibold'>Delete User</button>
              </div>
            ))
          } */}


          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
          {/* Container 1 */}
          <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
            <div className="flex flex-row space-x-2">
              <div className="w-1/4">
                <img className='rounded-full h-14 p-1 border-2 lg:border-4 border-pink-500' src={false ? 'http://localhost:8081/image/profile?link=' : avater} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <h2 className='text-xl font-bold'>Name</h2>
                <h3 className='text-lg'>time</h3>
              </div>
            </div>
            <p className='mt-5'>This is feedback text.This is feedback text.This is feedback text.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
