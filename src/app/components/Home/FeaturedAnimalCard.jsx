import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { MdOutlineScale } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

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

const FeaturedAnimalCard = ({ animal }) => {
    const currentBreed = animal?.badge?.toUpperCase() || "";
    const currentStyle = badgeStyles[currentBreed] || defaultStyle;

    return (
        <div className='rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)] overflow-hidden bg-white'>
            <div className='relative'>
                <Image className='rounded-t-3xl' alt={animal.name} width={282} height={246} src={animal.image} />
            
                <span style={currentStyle} className="absolute top-3 left-3 z-10 inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border shadow-sm" > {animal?.badge} </span>
            </div>

            <Link href={`/details-page/${animal.id}`}>
                <div className="p-6">
                    <h2 className={`${plusJakartaSans.className} font-semibold text-2xl text-[#023616]`}>
                        {animal?.name}
                    </h2>
                    
                    <div className='my-2 text-[14px] font-semibold text-[#414941]'>
                        <p className='flex gap-2 items-center'><MdOutlineScale />{animal?.weight}Kg</p>

                        <p className='flex gap-2 items-center'><GoLocation />{animal?.location}</p>
                    </div>

                    <div className='pt-4 flex justify-between items-center'>
                        <div>
                            <p className='text-[10px] font-bold text-[#8D928D]'>PRICE</p>

                            <p className={`text-[#023616] ${plusJakartaSans.className}`}>
                                BDT {animal?.price}
                            </p>
                        </div>

                        <div>
                            <div className='p-4 rounded-full bg-[#BBEFC1] inline-flex items-center justify-center'>
                                <FaArrowRight className='text-[#023616]' />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FeaturedAnimalCard;