import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import FeaturedAnimalCard from './FeaturedAnimalCard';


const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const featuredAnimels = async() => {
    const res = await fetch('https://qurbani-hat-server-lbwm.onrender.com/featuredAnimals')
    const data = await res.json()
    return data;
}

const FeaturedCards = async() => {

    const animals = await featuredAnimels()

    return (
        <div className='w-11/12 mx-auto mb-8'>
            <h2 className={`${plusJakartaSans.className} text-[#023616] font-bold text-3xl`}>Featured Livestock</h2>
            <div className="flex justify-between items-center">
                <p className='text-[#414941]'>Handpicked healthy animals ready for booking</p>
                <Link href={'/animals'}>
                    <button className='text-[#033616] cursor-pointer font-bold flex items-center gap-2'>View All <FaArrowRight /> </button>
                </Link>
            </div>
            <div className="grid gap-6 grid-cols-4 my-8">
                {
                    animals.map(animal => <FeaturedAnimalCard key={animal.id} animal={animal} />)
                }
            </div>
        </div>
    );
};

export default FeaturedCards;