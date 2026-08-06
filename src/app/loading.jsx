'use client';

import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { PiFirstAidKitBold } from 'react-icons/pi';
import { Oval } from 'react-loader-spinner';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

export default function Loading() {
    return (
        <div className='my-55 flex justify-center items-center'>
            <Oval />
        </div>
    );
}