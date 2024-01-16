import React, { useEffect, useState } from 'react'
import avater from '/avater.webp'
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/contextProvider';

export default function AdminUsers() {
  const [allUser, setAllUser] = useState();
  const { user } = useStateContext();

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    axiosClient.get('/user/all')
      .then(({ data }) => {
        console.log('data added');
        console.log(data);
        setAllUser(data);
      }) 
  }

  const onDelete = (id) => {
    if (!confirm('Are you sure to delete.')) {
      return
    }
    axiosClient.delete('/user/delete/' + id)
      .then(({ data }) => {
        console.log(data);
        getAllUsers();
      })
  }


  return (
    <div>
      <div className="h-screen m-4 p-4 rounded-lg bg-blue-100">
        {/* all users */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
          {allUser &&
            allUser.map(user => (
              // {/* Content */}
              <div className="flex flex-col p-4 rounded-lg shadow-lg bg-slate-50">
                <div className="flex flex-row space-x-2">
                  <div className="w-40 h-40">
                    <img className='rounded-full p-1 border-2 w-40 h-32 lg:border-4 border-pink-500' src={user.profileUrl ? 'http://localhost:8081/image/profile?link=' + user.profileUrl : avater} alt="" />
                  </div>
                  <div className="flex flex-col w-full">
                    <h2 className='text-xl font-bold'>{user.name}</h2>
                    <h3 className='text-lg font-semibold'>{user.email}</h3>
                    <p>{user.dob}</p>

                  </div>
                </div>
                <div className="flex flex-row space-x-2 mt-5 justify-between items-center">
                  <div className="flex flex-row w-3/4 items-center space-x-2">
                    <h3 className='text-lg font-semibold'>Role : </h3>
                    <p>{user.role}</p>
                  </div>
                  <button className='bg-blue-800 w-1/4 px-2 py-1 rounded-lg text-white font-semibold'>{(user.role == 'user') ? 'Make Admin' : 'Remove Admin'}</button>
                </div>
                <div className="flex flex-row space-x-2 mt-5 justify-between items-center">
                  <div className="flex flex-row w-3/4 items-center space-x-4">
                    <h3 className='text-lg w-1/4 font-semibold'>Token: </h3>
                    <p>{user.token ? user.token : 'User is not actiove.'}</p>
                  </div>
                  <button className='bg-red-800 w-1/4 px-2 py-1 rounded-lg text-white font-semibold'>Remove Token</button>
                </div>
                <button onClick={(ev) => {ev.preventDefault(); onDelete(user.id) }} className='bg-red-600 mt-4 w-1/4 self-end px-2 py-1 rounded-lg text-white font-semibold'>Delete User</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
