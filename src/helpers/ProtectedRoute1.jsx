import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute1 = () => {
    const auth = localStorage.getItem("user")
  return (
    <>
    {
        auth?<Outlet/>:<Navigate to={"/"}/>
    }
    </>
  )
}

export default ProtectedRoute1