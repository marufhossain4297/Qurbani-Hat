import React from 'react';
import { MdOutlineAgriculture } from "react-icons/md";
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const NavBar = () => {
    return (
        <div className='flex justify-between shadow px-10 py-5 items-center mb-8'>
            <div className='flex gap-2 items-center'>
                <MdOutlineAgriculture className='text-4xl text-[#023616]' />
                <Link href={'/'}>
                    <h2 className={`text-2xl font-bold text-[#023616] ${plusJakartaSans.className}`}>QurbaniHat</h2>
                </Link>
            </div>
            <div className='flex gap-3.5 items-center'>
                <ul className='flex gap-7.75 text-[#414941] font-semibold'>
                    <li><Link href={'/animals'}>Explore</Link></li>
                    <li><Link href={'/bookings'}>Bookings</Link></li>
                    <li><Link href={'/profile'}>Profile</Link></li>
                </ul>
            </div>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <button className='btn bg-[#033616] text-white px-7 rounded-4xl border-none font-extrabold'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;