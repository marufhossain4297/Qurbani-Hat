'use client'
import React, { use } from 'react';
import { MdOutlineAgriculture } from "react-icons/md";
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { Button, Drawer } from '@heroui/react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { X } from 'lucide-react';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const NavBar = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    const links = (
        <>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/animals'}>Explore</Link></li>
            <li><Link href={'/booking'}>Bookings</Link></li>
        </>
    )

    const logoAndName = (
        <>
            <MdOutlineAgriculture className='text-4xl text-[#023616]' />
            <Link href={'/'}>
                <h2 className={`text-2xl font-bold text-[#023616] ${plusJakartaSans.className}`}>QurbaniHat</h2>
            </Link>
        </>
    )

    const button = (
        <>
            <Link href={'/login'}>
                <button onClick={async () => await authClient.signOut()} className='btn bg-[#033616] text-white px-7 rounded-4xl border-none font-extrabold'>{user ? 'SignOut' : 'Login'}</button>
            </Link>
        </>
    )

    return (
        <div className='flex justify-between shadow px-10 py-5 items-center'>
            <div className='flex gap-2 items-center'>
                {logoAndName}
            </div>

            <div className='lg:flex hidden gap-3.5 items-center'>
                <ul className='lg:flex text-[15px] gap-7.75 text-[#414941] font-semibold'>
                    {links}
                </ul>
            </div>

            <div className='lg:flex hidden items-center'>
                <div>
                    {
                        isPending ? <div className="flex items-center mt-4 gap-3 animate-pulse">
                            {/* Name skeleton placeholder */}
                            <div className="h-6 w-28 bg-gray-200 rounded-md blur-xs" />

                            {/* Avatar skeleton placeholder */}
                            <div className="w-10 h-10 bg-gray-200 rounded-full blur-xs" />

                            {/* Button skeleton placeholder */}
                            <div className="h-10 w-24 bg-gray-200 rounded blur-xs" />
                        </div>
                            :
                            user ?

                                (<Link href={'/my-profile'}>
                                    <Image
                                        src={user.image}
                                        width={41}
                                        height={41}
                                        alt="User Avatar"
                                        className="rounded-full bg-amber-200 object-cover"
                                    />
                                </Link>)
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                    }

                </div>
                {
                    user ? <p className='mx-2.5 text-[#706F6F] font-medium'> Hello, <span className="font-semibold text-black">{user ? user.name : ''}</span></p> : ''
                }
                <div>
                    {button}
                </div>
            </div>
            <div className='lg:hidden'>
                <Drawer>
                    <Button className="bg-transparent text-black"><IoMenu /></Button>
                    <Drawer.Backdrop>
                        <Drawer.Content placement="right">
                            <Drawer.Dialog>

                                <Drawer.Header>
                                    <Drawer.Heading>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                {logoAndName}
                                            </div>
                                            <div>
                                                <Button className="bg-transparent text-black" slot="close"> <X className='text-5xl' /> </Button>
                                            </div>
                                        </div>
                                    </Drawer.Heading>
                                </Drawer.Header>

                                <div className='border-t my-4.5 border-[#E5E5E5]'></div>

                                <Drawer.Body>

                                    <div className='flex items-center gap-2'>
                                        {user ? (
                                            <div className="flex items-center gap-3 border-b border-gray-100">
                                                <Image
                                                    src={user.image}
                                                    width={40}
                                                    height={40}
                                                    alt={user.name}
                                                    className="rounded-full"
                                                />
                                            </div>
                                        ) : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>}

                                        <div>
                                            <p>Logged in as</p>
                                            {
                                                user && (
                                                    <div>
                                                        <p className='font-semibold text-black'>{user.name}</p>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>

                                    <div className='border-t my-4.5 border-[#E5E5E5]'></div>

                                    <div>
                                        <ul className='text-[17px] space-y-6 text-[#3A3A3A] font-semibold'>
                                            {links}
                                            <li>
                                                <Link href={'/my-profile'}>Profile</Link>
                                            </li>
                                        </ul>
                                    </div>

                                </Drawer.Body>

                                <Drawer.Footer>
                                    <div>
                                        <button>{button}</button>
                                    </div>
                                </Drawer.Footer>

                            </Drawer.Dialog>

                        </Drawer.Content>

                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </div >
    );
};

export default NavBar;