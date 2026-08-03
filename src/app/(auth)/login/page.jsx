'use client'
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdAgriculture, MdOutlineEmail, MdOutlineLock } from 'react-icons/md';
import cow from '@/app/images/cow.jpg';
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { Eye, EyeSlash } from '@gravity-ui/icons';
import { FiArrowRight } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const LoginPage = () => {
    const onSubmit = async (data) => {
        const { name, url, email, password } = data;
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL:'/'
        });

        if (error) {
            toast.error(error.message)
        }
        else {
            toast.success('Signup success')
        }
        console.log(res, error);
    }
    const [showPass, setShowPass] = useState(false)
    const { handleSubmit, register } = useForm()
    return (
        <div className='grid grid-cols-2 items-center bg-[#FBF9F8]'>

            <div className='mx-16 items-center '>
                <h2 className='flex gap-1 items-center mb-2 text-[#023616]'> <span className='text-3xl text-[#023616]'><MdAgriculture /></span> QurbaniHat</h2>
                <h2 className={`${plusJakartaSans.className} mb-2`}>Welcome Back</h2>
                <p className='text-[#414941] mb-12'>Login to manage your livestock bookings and favorites.</p>
                <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

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

                    <button className='text-white mt-6 mb-12 bg-[#033616] w-full rounded-full flex items-center btn py-6 text-[16px] font-normal' type="submit"> Login <FiArrowRight className='text-xl' /> </button>
                </Form>

                <div className="divider mb-10 text-[#414941] font-medium text-[12px]">OR</div>

                <div className="space-y-4">
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
                    <p className='text-center mt-12'>Don&apos;t have an account? <Link href={'/signup'} className='text-[#033616] font-semibold'>Sign up</Link></p>
                </div>
            </div>

            <div>
                <Image src={cow} alt='Cow' />
            </div>
        </div>
    );
};

export default LoginPage;