import React from 'react';
import Link from "next/link";

const FooterPage = () => {
    return (
        <div className='flex justify-between px-20 py-5 mt-10 items-center bg-[#101828]'>
            <div className='flex'>
                <img src="/logo.png" alt="logoimage"className="w-8 h-8"/>
                <a className="btn btn-ghost text-[12px]">FITLOG</a>
            </div>
            <div>
                <p className='text-[12px]'> ©2026 FITLOG Workout Library.Train hard, log honest</p>
            </div>
            
        </div>
    );
};

export default FooterPage 