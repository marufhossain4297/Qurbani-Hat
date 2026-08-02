import React from 'react';

const StatsCounter = () => {
    return (
        <div className='my-12 mx-auto grid grid-cols-4 items-center text-center'>
            <div>
                <p className='text-5xl font-extrabold text-[#023616]'>1500+</p>
                <p className='text-[#414941] text-[14px] font-semibold'>ANIMALS SOLD</p>
            </div>

            <div>
                <p className='text-5xl font-extrabold text-[#023616]'>50+</p>
                <p className='text-[#414941] text-[14px] font-semibold'>CERTIFIED FARMS</p>
            </div>

            <div>
                <p className='text-5xl font-extrabold text-[#023616]'>98%</p>
                <p className='text-[#414941] text-[14px] font-semibold'>HAPPY CLIENTS</p>
            </div>

            <div>
                <p className='text-5xl font-extrabold text-[#023616]'>12+</p>
                <p className='text-[#414941] text-[14px] font-semibold'>CITY DELIVERY</p>
            </div>
        </div>
    );
};

export default StatsCounter;