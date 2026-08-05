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
        <div className='w-11/12 mx-auto gap-6 my-11.75 grid grid-cols-12'>

            <div className='col-span-8'>

                <div className='relative'>
                    <Image className='rounded-3xl' src={animalDetails.image} width={792} height={445} alt={animalDetails.name} />

                    <span className='bg-[#15411F] absolute top-3 left-4 text-white font-semibold py-1 px-3 rounded-full'>{animalDetails.type}</span>

                    <span style={currentStyle} className={`bg-[#15411F] absolute top-3 left-24 text-white font-semibold py-1 px-3 rounded-full`}>{animalDetails.badge}</span>
                </div>

                <div className='grid grid-cols-4 gap-4 mt-12'>
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

                <div className='p-8 bg-[#F5F3F3] rounded-3xl'>
                    <h2 className={`text-[#114224] mb-6 ${plusJakartaSans.className}`}>Inclusive Services</h2>
                    <div className='grid grid-cols-2 grid-rows-2'>
                        <p className={`flex gap-2 mb-4 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Free Home Delivery within Dhaka</p>

                        <p className={`flex gap-2 mb-4 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Complementary Health Certificate</p>

                        <p className={`flex gap-2 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Pre-Delivery Grooming Session</p>

                        <p className={`flex gap-2 items-center text-[#1B1C1C]`}> <IoIosCheckmarkCircle className='text-[#023616] text-2xl' /> Weight Guarantee Certification</p>
                    </div>
                </div>

            </div>

            <div className='col-span-4'>
                <div className='flex rounded-3xl flex-col gap-4 shadow-[0_0_25px_rgba(0,0,0,0.1)] '>
                    <div className='flex rounded-t-3xl justify-between items-center bg-[#1E4D2B] p-6'>
                        <div>
                            <h2 className='text-[#75A77D] text-[12px] font-semibold mb-1'>TOTAL PRICE</h2>
                            <p className='text-white'>{animalDetails.price} BDT</p>
                        </div>

                        <div className='text-[#55855F] text-4xl'>
                            <FaMoneyBills />
                        </div>
                    </div>
                    <h4 className='font-semibold pl-6 text-gray-800 text-base '>Reserve Now</h4>

                    <div className='border-b mx-auto w-11/12 border-gray-100'></div>

                    <div className='p-6 space-y-5'>
                        <div>
                            <label className='block text-xs font-bold text-[#114224] mb-1.5'>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className='w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#114224]'
                            />
                        </div>

                        <div>
                            <label className='block text-xs font-bold text-[#114224] mb-1.5'>Email Address</label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className='w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#114224]'
                            />
                        </div>

                        <div>
                            <label className='block text-xs font-bold text-[#114224] mb-1.5'>Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+880 1XXX XXXXXX"
                                className='w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#114224]'
                            />
                        </div>

                        <div>
                            <label className='block text-xs font-bold text-[#114224] mb-1.5'>Delivery Address</label>
                            <textarea
                                rows={5}
                                placeholder="Apartment, Street, Area, City"
                                className='w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#114224] resize-none'
                            />
                        </div>
                        <button className='w-full btn bg-[#032E15] text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#02220f] transition-colors mt-2'>
                            Confirm Booking <IoIosSend className='text-base rotate-45' />
                        </button>
                        <p className='text-[10px] text-center text-gray-400 mt-1'>
                            *A 10,000 BDT security deposit is required after confirmation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;