import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import { useGetData } from './state/apiStore';
export default function ApiDemo() {
    const userstate = useGetData();
    useEffect(() => {
        userstate.execute();
    }, []);

    return (
        <>
            <Navbar />

            <div className='h-screen w-full flex justify-center items-center'>
                <div className='w-[1000px] bg-[#222222] p-5'>
                    {
                        userstate.data?.map((item, index)=>(
                            <div key={index} className='mb-3'>{item.name}</div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}