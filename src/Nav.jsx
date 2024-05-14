import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='p-4 text-white'>
        <ul className='flex flex-row space-x-4'>
            <li >
                <Link to="/"> Page1</Link>
            </li>
            <li>
                <Link to="/page2">Page2</Link>
            </li>
            <li>
                <Link to="/page3">Page3</Link>
            </li>
            <li>
                <Link to="/page4">Page4</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav