import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute2 = () => {
    const auth = localStorage.getItem("user")
  return (
    <>
    {
        auth?<Navigate to={"/dashboard"}/>:<Outlet/>
    }
    </>
  )
}

export default ProtectedRoute2