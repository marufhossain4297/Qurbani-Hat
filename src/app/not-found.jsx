import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { GoHome } from 'react-icons/go';
import { LuSearch } from 'react-icons/lu';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const NotFound = () => {
    return (
        <div className='w-full min-h-[95vh] flex justify-center items-center px-4'>
            <div className="md:w-5/12 w-11/12 text-center bg-white border border-[#ECEFEB] rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.04)]">

                <div className="w-24 h-24 bg-[#E8F0EB] text-[#023616] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-extrabold tracking-tight">404</span>
                </div>

                <h1 className={`text-2xl font-bold text-[#023616] mb-2 ${plusJakartaSans.className}`}>
                    Livestock Not Found
                </h1>

                <p className="text-[#414941] text-sm mb-8 leading-relaxed">
                    The page or animal listing you are looking for might have been removed, sold out, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 bg-[#023616] text-white py-3 px-6 rounded-full font-semibold text-sm hover:bg-[#1E4D2B] transition-colors"
                    >
                        <GoHome className="text-lg" /> Back to Home
                    </Link>

                    <Link
                        href="/animals"
                        className="flex items-center justify-center gap-2 border border-[#023616] text-[#023616] py-3 px-6 rounded-full font-semibold text-sm hover:bg-[#F5F3F3] transition-colors"
                    >
                        <LuSearch className="text-base" /> Browse Animals
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;