import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav><ul className="flex justify-between bg-sky-600 text-white h-[50px] items-centre py-3 px-5 fixed inset-x-0 top-0">
        <Link href='/' >
        <li>All</li>
        </Link>

        <Link href='/libraries/Africa' >
        <li>Africa</li>
        </Link>

        <Link href='/libraries/Europe' >
        <li>Europe</li>
        </Link>

        <Link href='/libraries/Asia' >
        <li>Asia</li>
        </Link>

        <Link href='/libraries/Oceania' >
        <li>Oceania</li> 
        </Link>
         
        <Link href='/libraries/Antarctica' >
        <li>Antarctica</li>  
        </Link>

        <Link href='/libraries/Americas' >
        <li>The Americas</li>  
        </Link> 
    </ul>
    </nav>
    
  )
}
