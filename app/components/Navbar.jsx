import {React, useEffect, useState} from 'react';
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext';
import { resolve } from 'styled-jsx/css';


const Navbar = () => {
    const {user, googleSignIn, logOut} = UserAuth();
        const [loading, setLoading] = useState(true);
    

    const handleSignIn = async ()=>{
        try{
            await googleSignIn();

        }catch(error){
            console.log(error)
        }
    }


    const handleLogOut = async () => {
        try{
            await logOut();
        }catch(error){
            console.log(error)
        }
    }

    useEffect( ()=>{
        const checkAuthentication = async ()=>{
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        }
        checkAuthentication();
    },[user])
   
  return (
    <div className='h-20 w-full flex items-center justify-between p-2 border-b-2'>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
                <Link href='/' >Home</Link>
            </li>
            <li className='p-2 cursor-pointer'>
                <Link href='/about' >About</Link>
            </li>

            {!user ? null:(
            <li className='p-2 cursor-pointer'>
                <Link href='/profile' >Profile</Link>
            </li>
            )
            }
        </ul>

    {loading ? (
        <p></p>
    ) :!user ? (
        <ul className='flex'>
            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                Login
            </li>
            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                SignUp
            </li>
        </ul>

    ):(
        <div>
            <p>welcome {user.displayName}</p>
            <p onClick={handleLogOut} className='cursor-pointer'>SignOut</p>
        </div>
    )


    }
    </div>
  )
}

export default Navbar