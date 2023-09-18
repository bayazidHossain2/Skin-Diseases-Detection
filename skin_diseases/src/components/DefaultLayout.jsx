import React, { useEffect, useState } from 'react'
import { ContextProvider, useStateContext } from '../contexts/contextProvider'
import { Navigate } from 'react-router-dom';


export default function DefaultLayout() {

  const { user, token } = useStateContext();
  
  if (token==null) {
    return <Navigate to='/login' />
  }


  return (
    <div className=' relative'>
      Default layout

    </div>
  )
}
