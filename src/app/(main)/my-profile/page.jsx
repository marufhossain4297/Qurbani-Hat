'use client'
import { authClient } from '@/lib/auth-client';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { MdOutlinePhotoSizeSelectActual, MdOutlineVerifiedUser } from "react-icons/md";
import { FaRegCalendar, FaRegUser } from "react-icons/fa6";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { GoPencil } from "react-icons/go";
import { useForm } from 'react-hook-form';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const ProfilePage = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;


    const updateData = async (data) => {
        // e.preventDefault()
        // const name = e.target.name.value
        // const image = e.target.url.value
        console.log(data);

        await authClient.updateUser({
            image: data.url,
            name: data.name,
        })
    }


    const { handleSubmit, register } = useForm()
    if (isPending) return


    return (
        <div className='md:w-8/12 w-10/12 border border-[#ECEFEB] rounded-3xl mx-auto my-15 relative overflow-hidden bg-white'>

            <div className='bg-[#1E4D2B] w-full h-32' />

            <div className='px-8'>
                <div className='-mt-16 ml-4'>
                    <Image
                        className='bg-white p-1 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.1)]'
                        src={user.image}
                        width={120}
                        height={120}
                        alt={user.name}
                    />
                </div>

                <div className='ml-40 -mt-10 mb-8'>
                    <h2 className={`text-3xl font-bold ${plusJakartaSans.className} text-[#023616]`}>{user.name}</h2>
                    <p className='text-[#414941]'>{user.email}</p>
                </div>
            </div>

            <div className='md:grid p-6 grid-cols-2 mx-auto gap-8'>
                <div className='bg-[#F5F3F3] flex gap-3 mb-5 md:mb-0 items-center rounded-3xl p-6'>
                    <div className='bg-[#DDE0DD] px-3 rounded-full py-3 text-[#023616]'>
                        <MdOutlineVerifiedUser />
                    </div>

                    <div>
                        <p className='text-[12px] font-semibold text-[#414941]'>Account Status</p>
                        <p className='text-[14px] font-bold text-[#023616]'>Verified</p>
                    </div>
                </div>

                <div className='bg-[#F5F3F3] flex gap-3 items-center rounded-3xl p-6'>
                    <div className='bg-[#DDE0DD] px-3 rounded-full py-3 text-[#023616]'>
                        <FaRegCalendar />
                    </div>

                    <div>
                        <p className='text-[12px] font-semibold text-[#414941]'>Member Since</p>
                        <p className='text-[14px] font-bold text-[#023616]'>
                            {user.createdAt ? new Date(user.createdAt).toDateString() : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>

            <div className='p-6 pt-0'>
                <Modal>
                    <Button className="bg-[#033616] rounded-full btn text-white border-none px-8 py-6" variant="secondary"><GoPencil /> Edit Profile </Button>
                    <Modal.Backdrop>
                        <Modal.Container placement="auto">
                            <Modal.Dialog className="sm:max-w-md">
                                <Modal.CloseTrigger />
                                <Modal.Header className='text-center items-center mt-9'>

                                    <div className="bg-[#E9EDE9] px-4 py-4 text-[#023616] text-2xl rounded-2xl">
                                        <GoPencil />
                                    </div>

                                    <Modal.Heading className='font-bold text-xl text-[#023616]'>Update Profile</Modal.Heading>

                                    <p className="text-sm leading-5 text-muted">
                                        Keep your contact and address details up to date for seamless animal booking and delivery.
                                    </p>
                                </Modal.Header>
                                <Modal.Body className="p-6">
                                    <Surface variant="default">
                                        <Form onClick={handleSubmit(updateData)} className="flex flex-col gap-4">

                                            <TextField
                                                isRequired
                                                name="name"
                                                type="text"
                                            >
                                                <Label className='font-bold text-[#023616]'>Full Name</Label>
                                                <div className="relative flex items-center">
                                                    <FaRegUser className="absolute z-3 left-4 text-[#023616]/70 text-xl" />
                                                    <Input
                                                        name='name'
                                                        {...register("name")}
                                                        placeholder="Enter your full name"

                                                        className="w-full rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#023616] pl-12 pr-4 py-3 border border-[#C1C9BE] text-gray-700 placeholder:text-gray-400 text-base"
                                                    />
                                                </div>
                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                isRequired
                                                name="url"
                                                type="url"
                                            >
                                                <Label className='text-[#023616] font-bold'>Profile Photo URL</Label>
                                                <div className="relative flex items-center">
                                                    <MdOutlinePhotoSizeSelectActual className="absolute z-3 left-4 text-[#023616]/70 text-xl" />
                                                    <Input
                                                        name='url'
                                                        {...register("url")}
                                                        placeholder="https://example.com/photo.jpg"
                                                        className="w-full focus:outline-none rounded-2xl focus:ring-1 focus:ring-[#023616] pl-12 pr-4 py-3 border border-[#C1C9BE] text-gray-700 placeholder:text-gray-400 text-base"
                                                    />
                                                </div>
                                                <FieldError />
                                            </TextField>

                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary">
                                                    Cancel
                                                </Button>
                                                <Button slot="close">Update</Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Surface>
                                </Modal.Body>
                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>

        </div>
    );
};

export default ProfilePage;