import AnimalCard from '@/app/components/Home/AnimalCard';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';

const animels = async () => {
    const res = await fetch('https://qurbani-hat-server-lbwm.onrender.com/animals')
    const data = await res.json()
    return data;
}
const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const AnimalsPage = async () => {

    const animals = await animels()
    console.log(animals);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center mt-12'>
                <h2 className={`text-[#023616] text-[32px] ${plusJakartaSans.className} font-bold`}>All Livestock</h2>
                <p className='text-[14px] font-semibold text-[#414941]'>{animals.length} results found</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6 mb-12'>
                {
                    animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)
                }
            </div>
        </div>
    );
};

export default AnimalsPage;