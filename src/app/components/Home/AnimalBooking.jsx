'use client'
import React from 'react';
import { toast } from 'sonner';
import { FaMoneyBills } from 'react-icons/fa6';
import { IoMdPaperPlane } from 'react-icons/io';
import { Button, Description, FieldError, Fieldset, Form, Input, Label, Surface, TextArea, TextField } from '@heroui/react';

const AnimalBooking = () => {
    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        if (
            data.name === '' ||
            data.email === '' ||
            data.number === '' ||
            data.address === '') {
            return toast.error('Please fill the input')
        }
        console.log(e.target.name);
        e.target.name.value = ''
        e.target.email.value = ''
        e.target.number.value = ''
        e.target.address.value = ''
        toast.success('Booking success')
    }
    return (
        <div>
            <Form className="flex border rounded-3xl border-[#E0E4DF] flex-col gap-4" onSubmit={onSubmit}>

                <div className="flex justify-between items-center bg-[#1E4D2B] text-white rounded-t-3xl p-10">
                    <div className="">
                        <h2 className='text-[#75A77D] text-xl font-bold mb-1'>Reserve For This Animal</h2>
                    </div>

                    <div className='text-[#55855F] text-4xl'>
                        <FaMoneyBills />
                    </div>
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
                        <Input name='name' className="py-4 focus:ring-[#1E4D2B] ring-0 placeholder:text-[#6B7280] border border-[#C1C9BE] shadow-none" placeholder="Enter your full name" />
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
                        <Input name='email' className="py-4 placeholder:text-[#6B7280] border border-[#C1C9BE] shadow-none" placeholder="example@mail.com" />
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
                        <Input name='number' className="py-4 placeholder:text-[#6B7280] border border-[#C1C9BE] shadow-none" placeholder="+880 1XXX XXXXXX" />
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
                        <TextArea name='address' className="py-4 placeholder:text-[#6B7280] border border-[#C1C9BE] shadow-none" rows={5} placeholder='Apartment, Street, Area, City' />
                        <FieldError />
                    </TextField>

                    <Button className="w-full items-center text-[16px] py-7 flex gap-2 bg-[#033616] text-white" type="submit">
                        Confirm Booking
                        <IoMdPaperPlane />
                    </Button>

                </div>
            </Form>
        </div>
    );
};

export default AnimalBooking;
