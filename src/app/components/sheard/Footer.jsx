'use client';

import React from 'react';
import Image from 'next/image';
import qr from '@/app/images/qr.png';
import { Button, Modal } from '@heroui/react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { MdOutlineAgriculture, MdMailOutline, MdOutlineCall, MdOutlineQrCode2 } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import Link from 'next/link';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const Footer = () => {
    return (
        <div className='bg-[#023616]'>
            <div className='w-11/12 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div>
                    <div className="flex items-center gap-2 text-white">
                        <MdOutlineAgriculture className='text-4xl' />
                        <p className={`text-2xl font-bold ${plusJakartaSans.className}`}>QurbaniHat</p>
                    </div>

                    <p className='my-6 w-11/12 text-[#B3C3B9] text-sm leading-relaxed'>
                        The most trusted platform in Bangladesh for healthy, organic, and ethically raised livestock for Qurbani.
                    </p>

                    <Modal>
                        <Button className="text-white text-2xl bg-[#1B4A2D] hover:bg-[#235b38] p-4 rounded-full min-w-0 w-14 h-14 flex items-center justify-center transition-colors">
                            <MdOutlineQrCode2 className='size-7' />
                        </Button>

                        <Modal.Backdrop
                            className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
                            variant="blur"
                        >
                            <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px] p-6 text-center flex flex-col items-center">
                                    <Modal.Header className="flex flex-col items-center gap-2 w-full">
                                        <div className="p-3 bg-[#023616]/10 text-[#023616] rounded-full">
                                            <MdOutlineQrCode2 className="size-6" />
                                        </div>
                                        <Modal.Heading className={`text-xl font-bold text-gray-900 ${plusJakartaSans.className}`}>
                                            Scan & Browse
                                        </Modal.Heading>
                                        <p className="text-xs text-gray-500">
                                            Scan this QR code on your phone to open QurbaniHat.
                                        </p>
                                    </Modal.Header>

                                    <Modal.Body className="w-full flex justify-center py-4">
                                        <div className="p-3 bg-gray-50 border border-gray-100 rounded-2xl shadow-inner">
                                            <Image
                                                src={qr}
                                                alt="QurbaniHat Mobile QR Code"
                                                width={200}
                                                height={200}
                                                className="rounded-lg object-contain"
                                            />
                                        </div>
                                    </Modal.Body>

                                    <Modal.CloseTrigger />
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                </div>

                <div>
                    <h2 className={`text-2xl text-white font-bold ${plusJakartaSans.className}`}>Quick Links</h2>
                    <ul className='text-[#B3C3B9] mt-6 space-y-4'>
                        <li>
                            <Link href={'/animals'} className="hover:text-white transition-colors cursor-pointer">Browse Cows</Link>
                        </li>
                        <li>
                            <Link href={'/animals'} className="hover:text-white transition-colors cursor-pointer">Browse Goats</Link>
                        </li>
                        <li>
                            <Link href={'/how-it-works'} className="hover:text-white transition-colors cursor-pointer">How it Works</Link>
                        </li>
                        <li>
                            <Link href={'/partner-farms'} className="hover:text-white transition-colors cursor-pointer">Our Partner Farms</Link>
                        </li>
                    </ul>
                </div>

                {/* Support Column */}
                <div>
                    <h2 className={`text-2xl text-white font-bold ${plusJakartaSans.className}`}>Support</h2>
                    <ul className='text-[#B3C3B9] mt-6 space-y-4'>
                        <li>
                            <Link href={'/booking'} className="hover:text-white transition-colors cursor-pointer">Contact Us</Link>
                        </li>
                        <li>
                            <Link href={'/faqs'} className="hover:text-white transition-colors cursor-pointer">FAQs</Link>
                        </li>
                        <li>
                            <Link href={'/shipping'} className="hover:text-white transition-colors cursor-pointer">Shipping & Delivery</Link>
                        </li>
                        <li>
                            <Link href={'/privacy-policy'} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className={`text-2xl text-white font-bold ${plusJakartaSans.className}`}>Contact Info</h2>
                    <ul className='text-[#B3C3B9] mt-6 space-y-4'>
                        <li className='flex gap-3 items-center'><MdMailOutline className='text-2xl' /> codeworld2026@gmail.com</li>
                        <li className='flex gap-3 items-center'><MdOutlineCall className='text-2xl' /> +880 1234 567 890</li>
                        <li className='flex gap-3 items-center'><RiMapPin2Line className='text-2xl' /> Gulshan-2, Dhaka, Bangladesh</li>
                    </ul>
                </div>

            </div>
            <hr className='w-11/12 mx-auto text-[#0F4022]' />
            <div>
                <p className='text-[#B3C3B9] text-center py-6 text-sm'>
                    &copy; 2026 QurbaniHat. All Rights Reserved. Built for traditional values, powered by modern technology.
                </p>
            </div>
        </div>
    );
};

export default Footer;