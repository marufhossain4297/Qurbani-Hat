'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import sheep from '@/app/images/sheep.avif';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { FaFacebook, FaGithub, FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { Truck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Eye, EyeSlash } from '@gravity-ui/icons';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});



const SignUpPage = () => {
    const router = useRouter()

    const onSubmit = async (data) => {

        const { name, url, email, password } = data;

        const { data:res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: url,
            callbackURL: "/login",
        });

        if(error){
            toast.error(error.message)
        }
        else{
            toast.success('Signup success')
            router.push('/login')
        }
        console.log(res, error);
    }
    const [showPass, setShowPass] = useState(false)
    const { handleSubmit, register } = useForm()

    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-15 py-10'>

            <div className='flex flex-col'>
                <Image
                    src={sheep}
                    width={870}
                    height={702}
                    alt="Sheep"
                    className="rounded-2xl w-full"
                />
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className='pl-5 py-6 pr-2 bg-[#F3F1F1] border border-[#D4D5D2] rounded-3xl'>
                        <MdOutlineVerifiedUser className='text-[#033717] text-2xl' />
                        <h2 className='text-[#023616]'>Verified Sourcing</h2>
                    </div>
                    <div className='pl-5 py-6 pr-2 bg-[#F3F1F1] border border-[#D4D5D2] rounded-3xl'>
                        <FaMoneyBills className='text-[#033717] text-2xl' />
                        <h2 className='text-[#023616]'>Secure Payments</h2>
                    </div>
                    <div className='pl-5 py-6 pr-2 bg-[#F3F1F1] border border-[#D4D5D2] rounded-3xl'>
                        <Truck className='text-[#033717] text-2xl' />
                        <h2 className='text-[#023616]'>Doorstep Delivery</h2>
                    </div>
                </div>
            </div>

            <div className='shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl px-10'>
                <h2 className={`mt-10 text-[32px] font-bold ${plusJakartaSans.className}`}>Create Account</h2>
                <p className='text-[#414941] mb-8'>Step into the future of livestock booking.</p>
                <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label className='text-[#023616]'>Full Name</Label>
                        <div className="relative flex items-center">
                            <FaRegUser className="absolute left-4 text-[#023616]/70 text-xl" />
                            <Input
                                {...register("name")}
                                placeholder="Enter your full name"
                                className="w-full focus:outline-none focus:ring-[#023616] pl-12 pr-4 py-3 border border-[#C1C9BE] text-gray-700 placeholder:text-gray-400 text-base"
                            />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-[#023616]'>Email Address</Label>
                        <div className="relative flex items-center">
                            <MdOutlineEmail className="absolute left-4 text-[#023616]/70 text-xl" />
                            <Input
                                {...register("email")}
                                placeholder="email@example.com"
                                className="w-full  focus:outline-none focus:ring-[#023616] pl-12 pr-4 py-3 border border-[#C1C9BE] text-gray-700 placeholder:text-gray-400 text-base"
                            />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField
                        name="url"
                        type="url"
                    >
                        <Label className='text-[#023616]'>Profile Photo URL</Label>
                        <div className="relative flex items-center">
                            <MdOutlinePhotoSizeSelectActual className="absolute left-4 text-[#023616]/70 text-xl" />
                            <Input
                                {...register("url")}
                                placeholder="https://example.com/photo.jpg"
                                className="w-full  focus:outline-none focus:ring-[#023616] pl-12 pr-4 py-3 border border-[#C1C9BE] text-gray-700 placeholder:text-gray-400 text-base"
                            />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type={showPass ? "text" : "password"}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            if (!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(value)) {
                                return "Password must contain at least one special character: !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-[#023616]'>Password</Label>
                        <div className="relative flex items-center">
                            <MdOutlineLock className="absolute left-4 text-[#023616]/70 text-xl" />
                            <Input
                                {...register("password")}
                                placeholder="Min. 8 characters"
                                className="w-full  focus:outline-none focus:ring-[#023616] pl-12 pr-4 py-3 border border-[#C1C9BE] text-gray-700 placeholder:text-gray-400 text-base"
                            />
                            <span className="absolute cursor-pointer right-3" onClick={() => setShowPass(!showPass)}>{showPass ? <Eye /> : <EyeSlash />}</span>
                        </div>
                        <FieldError />
                    </TextField>

                    <button className='text-white mb-8 bg-[#033616] w-full rounded-full flex items-center btn py-6 text-[16px] font-normal' type="submit"> Register Account <FiArrowRight className='text-xl' /> </button>
                </Form>

                <div className="divider mb-10 text-[#414941] font-medium text-[12px]">OR REGISTER WITH SOCIAL</div>

                <div className="space-y-4 mb-10">
                    <div className="duration-2000">
                        <button className="flex w-full bg-white border font-medium hover:bg-[#F9F9F8] border-[#C1C9BE] btn items-center gap-2 px-4 py-6.5 rounded-3xl">
                            <FcGoogle className="text-xl" />
                            <span>Login with Google</span>
                        </button>
                    </div>

                    <div className='grid grid-cols-2 gap-2.5'>
                        <div className="duration-2000">
                            <button className="flex w-full bg-white border font-medium hover:bg-[#F9F9F8] border-[#C1C9BE] btn items-center gap-2 px-4 py-6.5 rounded-3xl">
                                <FaGithub className="text-xl" />
                                <span>Login with Github</span>
                            </button>
                        </div>

                        <div className="duration-2000">
                            <button className="flex w-full bg-white border font-medium hover:bg-[#F9F9F8] border-[#C1C9BE] btn items-center gap-2 px-4 py-6.5 rounded-3xl">
                                <FaFacebook className="text-xl text-[#1877F2]" />
                                <span>Login with Facebook</span>
                            </button>
                        </div>
                    </div>
                    <p className='text-center'>Already have an account? <Link href={'/login'} className='text-[#033616] font-semibold'>Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default SignUpPage;