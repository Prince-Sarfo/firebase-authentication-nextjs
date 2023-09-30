'use client'

import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';

const page = () => {
  const user = UserAuth();
  const [loading,setLoading] = useState(true);

  useEffect( ()=>{
    const checkAuthentication = async ()=>{
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
    }
    checkAuthentication();
},[user])

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ):(
        !user ? (
            <p>You are not logged in -- this is a protected route</p>
        ) : (
          <p>Welcome {user.displayName} --  this is a protected route</p>
        )
      )
      }
    </div>
  )
}

export default page