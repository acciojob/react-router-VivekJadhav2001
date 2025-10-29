import React from 'react'
import { Link } from 'react-router-dom'

function ReactRouter() {
  return (
        <nav className='bg-blue-700 text-white w-screen '>
            <ul className='flex justify-around items-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            
        </nav>
    
  )
}

export default ReactRouter