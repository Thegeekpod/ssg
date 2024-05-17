import Link from 'next/link'
import React from 'react'

const Menu = () => {
    return (
        <>
            <li className="">
                <Link href="/">Home</Link>

            </li>
            <li>
                <Link href="/about-us">About Us</Link>
            </li>
          
            <li>
                <Link href="/pricing">Pricing</Link>
            </li>
            <li className='mr-0'>
                <Link href="/contact-us">Contacts Us</Link>
            </li>
        </>
    )
}

export default Menu