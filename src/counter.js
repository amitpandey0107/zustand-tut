import React from 'react';
import Navbar from './navbar';
import { counterStore } from './state/counterStore';
export default function CounterApp() {
    const counState = counterStore();
    const handleIncrement = () => {
        counState.incrementAction()
    }
    const handleDecrement = () => {
        counState.decrementAction()
    }
    const handleReset = () => {
        counState.resetAction()
    }
    return (
        <>
            <Navbar />
            <div className='h-screen w-full flex justify-center items-center'>
                <div className='w-[1000px] bg-[#222222] p-5'>
                    <h1 className='relative text-2xl font-bold mb-10 flex justify-center items-center pb-2 after:h-[1px] after:w-36 after:bg-white after:absolute after:bottom-[-5px] after:left-[43%] '>Counter App</h1>

                    <div className='text-8xl flex justify-center items-center text-white font-bold'>
                        {counState?.counter}
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <button className='bg-black h-16 w-48 flex justify-center items-center rounded-lg text-white uppercase mr-5' onClick={handleIncrement}>Increment</button>
                        <button className='bg-black h-16 w-48 flex justify-center items-center rounded-lg text-white uppercase mr-5' onClick={handleDecrement}>Decrement</button>
                        <button className='bg-black h-16 w-48 flex justify-center items-center rounded-lg text-white uppercase mr-5' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>

        </>
    )
}