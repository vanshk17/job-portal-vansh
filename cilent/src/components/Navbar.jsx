import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {useClerk, useUser} from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react';
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';



const Navbar = () => {

    const {openSignIn}=useClerk()
    const {user}=useUser()

    const navigate=useNavigate()

    const {setShowRecruiterLogin}=  useContext(AppContext)

  return (
    <div className='bg-black bg-opacity-60 backdrop-blur-md text-white sticky top-0 z-50'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center py-4'>
        <img onClick={()=>navigate('/')}  className='cursor-pointer' src={assets.logo} alt="" />
        {
            user
            ? <div className='flex items-center gap-3'>
                <Link to={"/applications"} className="hover:underline">Applied Jobs</Link>
                <p>|</p>
                <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
                <UserButton />
            </div>
            :<div className='flex gap-4 max-sm:text-xs '>
            <button onClick={ e => setShowRecruiterLogin(true) }className="text-gray-200 hover:text-white ">Recruiter Login</button>
            <button onClick={ e => openSignIn() }className='bg-blue-700 text-white px-6 sm:px-9 py-2 rounded-full '>Login</button>
          </div>

        }
      </div>
    </div>
  )
}

export default Navbar





