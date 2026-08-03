import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { FaRegCalendarDays } from "react-icons/fa6";
import { PiFirstAidKitBold } from "react-icons/pi";
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const qurbaniTips = [
    {
        id: 1,
        title: "Animal Health Check",
        description: "Check for clear eyes, moist nose, and active behavior. Ensure no visible wounds or physical disabilities as per Sunnah."
    },
    {
        id: 2,
        title: "Age Guidelines",
        bgColor: "bg-amber-100",
        description: "A goat/sheep should be 1 year old, and a cow/buffalo should be at least 2 years old for a valid Qurbani."
    },
    {
        id: 3,
        title: "Care Before Sacrifice",
        bgColor: "bg-zinc-200",
        description: "Keep the animal in a calm environment, provide fresh water and food, and treat it with extreme kindness before the act."
    }
];

const Tips = () => {
    return (
        <div className='bg-[#F5F3F3]'>
            <div className='py-20 w-11/12 mx-auto'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-[#023616]'>Essential Qurbani Tips</h2>
                    <p>Expert guidance for a meaningful and correct sacrifice</p>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-16'>
                    {

                        qurbaniTips.map(tip =>
                            <div key={tip.id} className='bg-white text-center rounded-3xl'>
                                <div className='py-9'>
                                    <p className='flex justify-self-center'>
                                        {tip.id == 1 ? (
                                            <div className="bg-[#1E4D2B] p-4 rounded-2xl">
                                                <PiFirstAidKitBold className="w-6 h-6 text-[#8BBD92]" />
                                            </div>
                                        ) : tip.id == 2 ? (
                                            <div className="bg-[#FDBA45] p-4 rounded-2xl">
                                                <FaRegCalendarDays className="w-6 h-6 text-[#6F4B00]" />
                                            </div>
                                        ) : tip.id == 3 ? (
                                            <div className="bg-[#424442] p-4 rounded-2xl">
                                                <HeartHandshake className="w-6 h-6 text-[#B0B1AF]" />
                                            </div>
                                        ) : null}
                                    </p>

                                    <p className={`text-[#023616] ${plusJakartaSans.className} py-4 font-semibold text-2xl`}>{tip.title}</p>
                                    <p className='w-10/12 mx-auto'>{tip.description}</p>
                                </div>
                            </div>
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default Tips;