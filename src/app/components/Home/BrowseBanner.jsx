import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const BrowseBanner = () => {
    return (
        <div className='w-11/12 mx-auto mb-52'>
            <div className='bg-linear-to-r px-8 md:px-20 from-[#1E4D2B] via-[#1B4326] to-[#14351E] rounded-3xl md:flex justify-between items-center'>
                
                <div className='items-center pt-28 pb-20'>
                    <h2 className={`text-[#8BBD92] mb-3.75 text-3xl lg:text-5xl font-extrabold ${plusJakartaSans.className}`}>Ready to find your Qurbani <br className='hidden lg:block' /> animal?</h2>

                    <p className='text-[18px] text-[#7AA97E]'>Join 20,000+ families who trust QurbaniHat for their sacred <br className='hidden lg:block' /> sacrifice every year.</p>
                </div>

                <div>
                    <Link href={'/animals'}>
                        <button className='cursor-pointer mb-9 md:mb-0 shadow-none text-xl font-semibold border-none bg-white text-[#023616] py-4.5 px-14.25 rounded-full'>
                            Start Browsing
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrowseBanner;