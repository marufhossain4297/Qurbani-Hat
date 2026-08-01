import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const FeaturedCards = () => {
    return (
        <div className='w-11/12 mx-auto mb-8'>
            <h2 className={`${plusJakartaSans.className} text-[#023616] font-bold text-3xl`}>Featured Livestock</h2>
            <div className="flex justify-between items-center">
                <p>Handpicked healthy animals ready for booking</p>
                <Link href={'/animals'}>
                    <button className='text-[#033616] cursor-pointer font-bold flex items-center gap-2'>View All <FaArrowRight /> </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCards;