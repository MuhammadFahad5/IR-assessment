import React, { useState, useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import right_arrow from '../assets/global/arrow-right.svg'
import avatar from '../assets/dashboard/man_avatar.svg'
import Vector from '../assets/dashboard/Vector.svg'
import { useNavigate } from 'react-router-dom';
import notifiction from '../assets/dashboard/notification.svg'
import sun from '../assets/dashboard/shape.svg'

const TopBar = () => {
  const [enabled, setEnabled] = useState(true);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <>

      <div className='px-2 py-6 md:px-6 rounded-2xl dashboard-card-shadow bg-white'>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 sm:gap-2 justify-center sm:justify-between">
          <div className='flex items-center gap-[2px] md:gap-2'>
            <NavLink to="/#" className='text-[#8D8C8E] text-[10px] font-normal'>Requests</NavLink>
            <img src={right_arrow} alt="banner" className='w-[14px]' />
            <NavLink to="/#" className='text-[#414042] text-[10px] font-bold'> Registration</NavLink>
            <div className="ml-[2px] xl:ml-4 flex items-center rounded-xl px-4 py-[10px] w-full max-w-[180px]  lg:max-w-[272px] bg-[#F7FAFC]">
              <svg
                className="w-6 h-6 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                ></path>
              </svg>


              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-gray-700 placeholder:text-[14px] placeholder-[#718096] bg-[#F7FAFC]"
              />
            </div>

          </div>
          <div className="flex items-center gap-3 xl:gap-6">
            <div
              onClick={() => setEnabled(!enabled)}
              className={`w-14 h-8 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 ${enabled ? "bg-[#F4BE2A]" : "bg-gray-200"
                }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-0"
                  }`}
                  
              />
               <img src={sun} alt="sun" className={`w-4 h-4 m-auto z-10 ${enabled ? "" : "hidden"}`} />
            </div>
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                className="flex md:gap-1 items-center space-x-1"
              >

                <span>En</span>
                <img
                  src={Vector}
                  alt="vector"
                  className="w-[10px]"
                />
              </button>

            </div>
            <div>
              <img src={notifiction} alt="notifiction" className='w-[24px]' />
            </div>
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex md:gap-1 items-center space-x-1"
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>Logout</span>
                <img
                  src={Vector}
                  alt="vector"
                  className="w-[10px]"
                />
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-lg z-10">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default TopBar