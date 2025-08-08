import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-15 flex justify-between items-center bg-cyan-800 text-white '>
      <Link href={"/"}>
        <h1 className='pl-3 text-2xl font-bold'>SaveCode</h1>
      </Link>
      <ul className='pr-3 flex gap-5 font-sans'>
        <li>Home</li>
        <li>About</li>
        <li>ContactUs</li>
      </ul>
    </nav>
  )
}

export default Navbar
