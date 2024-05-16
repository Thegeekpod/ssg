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
            <li className="menu-item-has-children">
                <a href="#">Services</a>
                <ul className="sub-menu">
                    
                    <li>
                        <Link href="/professional-graphics-design-services-in-woodbridge-va">Graphics Design</Link>
                    </li>
                    <li>
                        <Link href="/app-development-services-for-businesses-in-woodbridge-va">
                            App Development
                        </Link>
                    </li>
                    <li>
                        <Link href="/professional-website-development-in-woodbridge-va">
                            Web Development
                        </Link>
                    </li>
                    <li>
                        <Link href="/professional-software-development-services-in-woodbridge-va">
                            Software Development
                        </Link>
                    </li>
                    <li>
                        <Link href="/seo-and-digital-marketing-services-for-businesses-in-woodbridge-va">
                            Seo And Digital Marketing
                        </Link>
                    </li>
                    <li>
                        <Link href="/24-7-computer-software-support">
                            24/7 Computer Software <br/>Support
                        </Link>
                    </li>
                    <li>
                        <Link href="/24-7-appointment-booking-support-services">
                            24/7 Appointment Booking <br/>Support Services
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/pricing">Pricing</a>
            </li>
            <li>
                <Link href="/contact-us">Contacts Us</Link>
            </li>
        </>
    )
}

export default Menu