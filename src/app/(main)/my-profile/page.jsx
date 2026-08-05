'use client'

import { authClient } from '@/lib/auth-client';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa6";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='w-8/12 border border-[#ECEFEB] rounded-3xl mx-auto my-15 relative overflow-hidden bg-white'>
            
            <div className='bg-[#1E4D2B] w-full h-32' />

            <div className='px-8'>
                <div className='-mt-16 ml-4'>
                    <Image 
                        className='bg-white p-1 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.1)]' 
                        src={user.image} 
                        width={120} 
                        height={120} 
                        alt={user.name} 
                    />
                </div>

                <div className='ml-40 -mt-10 mb-8'>
                    <h2 className={`text-3xl font-bold ${plusJakartaSans.className} text-[#023616]`}>{user.name}</h2>
                    <p className='text-[#414941]'>{user.email}</p>
                </div>
            </div>

            <div className='grid p-6 grid-cols-2 mx-auto gap-8'>
                <div className='bg-[#F5F3F3] flex gap-3 items-center rounded-3xl p-6'>
                    <div className='bg-[#DDE0DD] px-3 rounded-full py-3 text-[#023616]'>
                        <MdOutlineVerifiedUser />
                    </div>

                    <div>
                        <p className='text-[12px] font-semibold text-[#414941]'>Account Status</p>
                        <p className='text-[14px] font-bold text-[#023616]'>Verified</p>
                    </div>
                </div>

                <div className='bg-[#F5F3F3] flex gap-3 items-center rounded-3xl p-6'>
                    <div className='bg-[#DDE0DD] px-3 rounded-full py-3 text-[#023616]'>
                        <FaRegCalendar />
                    </div>

                    <div>
                        <p className='text-[12px] font-semibold text-[#414941]'>Member Since</p>
                        <p className='text-[14px] font-bold text-[#023616]'>
                            {user.createdAt ? new Date(user.createdAt).toDateString() : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>

            <div className='p-6 pt-0'>
                <button className='btn'>Update data</button>
            </div>
        </div>
    );
};

export default ProfilePage;