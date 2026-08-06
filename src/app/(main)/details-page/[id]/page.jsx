import Image from 'next/image';
import React from 'react';
import { RiWeightLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { FaStar } from "react-icons/fa6";
import { TiStarHalfOutline } from "react-icons/ti";
import { IoIosCheckmarkCircle, IoIosSend } from "react-icons/io";
import { FaMoneyBills } from "react-icons/fa6";
import BookingPage from '../../booking/page';
import AnimalBooking from '@/app/components/Home/AnimalBooking';

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


const DetailsPage = async ({ params }) => {
    const { id } = await params

    const animalsDetails = async () => {
        const res = await fetch(`https://qurbani-hat-server-lbwm.onrender.com/animals/${id}`)
        const data = res.json()
        return data
    }

    const animalDetails = await animalsDetails(id)
    console.log(animalDetails);

    const currentBreed = animalDetails?.badge?.toUpperCase() || "";
    const currentStyle = badgeStyles[currentBreed] || defaultStyle;

    return (
        <div className='w-11/12 mx-auto gap-6 my-11.75 md:grid grid-cols-12'>

            <div className='md:col-span-8'>

                <div className='relative'>
                    <Image className='rounded-3xl' src={animalDetails.image} width={792} height={445} alt={animalDetails.name} />

                    <span className='bg-[#15411F] absolute top-3 left-4 text-white font-semibold py-1 px-3 rounded-full'>{animalDetails.type}</span>

                    <span style={currentStyle} className={`bg-[#15411F] absolute top-3 left-24 text-white font-semibold py-1 px-3 rounded-full`}>{animalDetails.badge}</span>
                </div>

                <div className='md:grid grid-cols-4 gap-4 mt-12 hidden'>
                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <RiWeightLine className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>WEIGHT</p>
                        <p>{animalDetails.weight} KG</p>
                    </div>

                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <MdCalendarToday className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>AGE</p>
                        <p>{animalDetails.age} Years</p>
                    </div>

                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <TbTriangleSquareCircle className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>TEETH</p>
                        <p>{animalDetails.teeth} Teeth</p>
                    </div>

                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <GoLocation className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>LOCATION</p>
                        <p>{animalDetails.location}</p>
                    </div>
                </div>

                <div className='mt-12 mb-12'>
                    <h2 className={`text-[32px] text-[#023616] font-bold mb-4 ${plusJakartaSans.className}`}>{animalDetails.name}</h2>

                    <p className='flex items-center mb-4 text-[#414941] text-[14px] font-semibold'>
                        <FaStar className='text-[#7F5700] text-2xl' />
                        <FaStar className='text-[#7F5700] text-2xl' />
                        <FaStar className='text-[#7F5700] text-2xl' />
                        <FaStar className='text-[#7F5700] text-2xl' />
                        <TiStarHalfOutline className='text-[#7F5700] text-2xl' />
                        {animalDetails.rating} <span className='ml-2'>({animalDetails.reviewsCount} Reviews)</span>
                    </p>

                    <p className='text-[18px] text-[#414941]'>{animalDetails.description}</p>
                </div>

                <div className='grid grid-cols-2 gap-4 mb-8 mt-12 md:hidden'>
                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <RiWeightLine className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>WEIGHT</p>
                        <p>{animalDetails.weight} KG</p>
                    </div>

                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <MdCalendarToday className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>AGE</p>
                        <p>{animalDetails.age} Years</p>
                    </div>

                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <TbTriangleSquareCircle className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>TEETH</p>
                        <p>{animalDetails.teeth} Teeth</p>
                    </div>

                    <div className='py-6 text-center border border-[#ECEFEB] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)]'>
                        <GoLocation className='flex text-2xl justify-self-center' />
                        <p className='text-[12px] font-semibold text-[#717970]'>LOCATION</p>
                        <p>{animalDetails.location}</p>
                    </div>
                </div>

                <div className='p-8 bg-[#F5F3F3] rounded-3xl'>
                    <h2 className={`text-[#114224] mb-6 ${plusJakartaSans.className}`}>Inclusive Services</h2>

                    <div className='md:grid grid-cols-2 grid-rows-2'>
                        <p className={`flex gap-2 mb-4 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Free Home Delivery within Dhaka</p>

                        <p className={`flex gap-2 mb-4 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Complementary Health Certificate</p>

                        <p className={`flex gap-2 mb-4 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Pre-Delivery Grooming Session</p>

                        <p className={`flex gap-2 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Weight Guarantee Certification</p>
                    </div>
                </div>

            </div>

            <div className='md:col-span-4 mt-8 md:mt-0'>
                <AnimalBooking id={id} />
            </div>

            {/* <BookingPage /> */}

        </div>
    );
};

export default DetailsPage;