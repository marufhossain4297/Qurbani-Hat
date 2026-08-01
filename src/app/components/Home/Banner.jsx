import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import BannerImage from '@/app/images/banner.jpg'
import Image from 'next/image';
import { AiOutlineSafety } from "react-icons/ai";


const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between mb-30 items-center gap-12'>
            <div>
                <h2 className={`text-5xl text-[#023616] mb-5.75 font-extrabold ${plusJakartaSans.className}`}>Find Healthy Cows & <br /> Goats for Qurbani</h2>
                <p className='text-[#414941] mb-6'>Premium livestock sourced from certified farms. Experience <br /> transparent pricing, detailed health records, and 100% <br /> organic feeding practices.</p>
                <div className="flex gap-4 items-center">
                    <button className='btn bg-[#033616] text-white px-8 py-4.5 rounded-4xl border-none font-bold'>Browse Animals</button>
                    <button className='btn text-[#033616] border-[#033616] px-8 py-4.5 rounded-4xl border-2 font-bold'>How  it Works</button>
                </div>
            </div>

            <div className='relative'>
                <div className='p-3 shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-3xl'>
                    <Image
                        className='rounded-2xl'
                        src={BannerImage}
                        alt="Banner Image"
                        width={560}
                        height={416}
                    />
                </div>
                <p className='text-[#6F4B00] absolute top-6 right-6 rounded-3xl py-2 px-4 font-bold bg-[#FDBA45]'>100% Organic</p>
                <p className='text-[#21502E] absolute top-18 right-6 rounded-3xl py-2 px-4 font-bold bg-[#BBEFC1]'>Verified Health</p>
                <div className='absolute -bottom-8 -left-8 bg-white flex gap-4 p-6 border-2 border-[#C1C9BE] rounded-2xl'>
                    <div className='bg-[#BBEFC1] px-3.5 items-center py-3.5 rounded-full'>
                        <AiOutlineSafety className='text-2xl text-center text-[#033616]' />
                    </div>
                    <div>
                        <p className={`text-[#023616] font-semibold text-2xl ${plusJakartaSans.className}`}>150+</p>
                        <p className='text-[#414941] font-medium text-[12px]'>Certified Farms</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;