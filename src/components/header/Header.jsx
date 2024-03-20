import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const Header = () => {
  const authentication = useSelector((state) => state.auth.status)
  
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Home",
      path: "/",
      authRequire: false,
    },
    {
      id: 2,
      text: "AllPosts",
      path: "/allPosts",
      authRequire: !authentication,
    },
    {
      id: 3,
      text: "Login",
      path: "/login",
      active: false,
      authRequire: authentication,
    },
    {
      id: 4,
      text: "Signup",
      path: "/signup",
      active: false,
      authRequire: authentication,
    }
  ])
  return (
    <div className='w-full flex justify-between bg-blue-400'>
      <div>Logo</div>
      <div className='flex'>
      { items.map((item) => {
       if(item.authRequire === false){
          return <button className='px-2' key={item.id}>
                {item.text}
            </button>
        }
     })}
     </div>
    </div>
  )
}

export default Header