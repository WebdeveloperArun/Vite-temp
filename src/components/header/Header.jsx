import React, { useState } from 'react'
import { useSelector } from 'react-redux'

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
    <div className='w-full flex justify-evenly bg-blue-400'>
      <div>Logo</div>
      { items.map((item) => {
       if(item.authRequire === false){
          return <div key={item.id}>{item.text}</div>
        }
     })}
    </div>
  )
}

export default Header