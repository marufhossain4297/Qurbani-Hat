import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { VscVerified } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";
import { GoLocation } from "react-icons/go"

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const badgeStyles = {
    "ORGANIC FEED": { backgroundColor: "#D1FAE5", color: "#065F46", borderColor: "#A7F3D0" },
    "TOP RATED": { backgroundColor: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" },
    "LIMITED": { backgroundColor: "#FEE2E2", color: "#991B1B", borderColor: "#FCA5A5" },
    "IMPORTED": { backgroundColor: "#E0E7FF", color: "#3730A3", borderColor: "#C7D2FE" },
    "LOCAL SPECIAL": { backgroundColor: "#FFEDD5", color: "#9A3412", borderColor: "#FED7AA" },
    "PREMIUM BREED": { backgroundColor: "#FFE4E6", color: "#9F1239", borderColor: "#FECDD3" },
};

const defaultStyle = { backgroundColor: "#F3F4F6", color: "#1F2937", borderColor: "#E5E7EB" };

const AnimalCard = ({ animal }) => {

    const currentBreed = animal?.badge?.toUpperCase() || "";
    const currentStyle = badgeStyles[currentBreed] || defaultStyle;

    return (
        <div className='rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)] overflow-hidden bg-white'>
            <div className='relative'>
                <Image className='rounded-t-3xl' alt={animal.name} width={376} height={246} src={animal.image} />

                <span style={currentStyle} className="absolute top-3 left-3 z-10 inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border shadow-sm" > {animal.badge} </span>
            </div>

            <div>
                <div className="p-6">
                    <h2 className={`${plusJakartaSans.className} font-semibold text-2xl text-[#023616]`}>
                        {animal?.name}
                    </h2>

                    <div className='mt-2 mb-4 gap-1 items-center flex text-[14px] font-semibold text-[#414941]'>
                        <p>{animal.breed}</p>
                        <RxDotFilled />
                        <p>{animal?.weight}Kg</p>
                        <RxDotFilled />
                        <p>{animal?.location}</p>
                    </div>

                    <div className="border-b border-[#E4E2E2]"></div>

                    <div className='py-4 text-[14px] flex gap-4 text-[#414941] font-medium'>
                        <p className='flex items-center gap-2'><VscVerified />{animal.verifiedTag}</p>

                        <p className='flex items-center gap-2'><GoLocation />{animal.distance} away</p>

                    </div>
                    <Link href={`/details-page/${animal.id}`}>
                        <button className='text-white w-full rounded-full btn font-bold bg-[#023616] py-3'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;