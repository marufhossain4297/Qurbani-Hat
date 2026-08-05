'use client'
import React from 'react';
import { IoMdPaperPlane } from "react-icons/io";
import { Button, Description, FieldError, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import { toast } from 'sonner';

const BookingPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()
        e.target.name.value = ''
        e.target.email.value = ''
        e.target.number.value = ''
        e.target.address.value = ''
    }

    return (
        <div className='w-5/12 mx-auto my-15'>
            <Form onClick={onSubmit} className="flex border border-[#E0E4DF] rounded-3xl flex-col gap-4">
                <div className="bg-[#1E4D2B] p-10 text-white rounded-t-3xl">
                    <h2 className='text-3xl font-semibold'>Booking Form</h2>
                </div>
                <div className='p-8'>
                    <p className='text-[#023616] mb-4.5'>Reserve Now</p>
                    <div className="border-b border-[#C1C9BE] mb-6"></div>
                    <TextField
                        isRequired
                        name="name"
                        className="mb-4"
                        type="text"
                    >
                        <Label className='text-[#023616] mb-1.5'>Full Name</Label>
                        <Input className="py-4 text-[#6B7280] border border-[#C1C9BE] shadow-none" placeholder="Enter your full name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="mb-4"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-[#023616] mb-1.5'>Email Address</Label>
                        <Input className="py-4 text-[#6B7280] border border-[#C1C9BE] shadow-none" placeholder="example@mail.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={11}
                        name="number"
                        type="text"
                        className="mb-4"
                    >
                        <Label className='text-[#023616] mb-1.5'>Phone Number</Label>
                        <Input className="py-4 text-[#6B7280] border border-[#C1C9BE] shadow-none" placeholder="+880 1XXX XXXXXX" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        minLength={11}
                        name="address"
                        type="number"
                        className="mb-4"
                    >
                        <Label className='text-[#023616] mb-1.5'>Delivery Address</Label>
                        <TextArea className="py-4 text-[#6B7280] border border-[#C1C9BE] shadow-none" rows={5} placeholder='Apartment, Street, Area, City' />
                        <FieldError />
                    </TextField>

                    <Button onClick={() => toast.success('Booking success')} className="w-full items-center text-[16px] py-7 flex gap-2 bg-[#033616] text-white" type="submit">
                        Confirm Booking
                        <IoMdPaperPlane />
                    </Button>

                </div>
            </Form>
        </div>
    );
};

export default BookingPage;