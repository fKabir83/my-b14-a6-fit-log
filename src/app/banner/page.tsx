import React from 'react';
import Image from 'next/image';
import bannerimage from '../../../public/banner.png'

const BannerPage = () => {
    return (
        <section className="container  px-20 py-10">
      <div className="bg-gray-900 flex flex-col md:flex-row items-center justify-between gap-2 pt-10 rounded-3xl">

        {/* Left Part */}
        <div className="w-full md:w-1/2 pl-10 ">
        <p className='text-[#C2F800] pb-6'>WORKOUT LIBRARY</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            TRAIN WITH INTENT.LOG EVERY SET.
          </h1>

          <p className="text-gray-500 text-lg mb-6">
          FitLog is a dark, no-nonsense gym companion:pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>

          <button className="btn bg-[#C2F800] text-black">
            BROWSE WORKOUT
          </button>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={bannerimage}
            alt="Workout banner"
            width={600}
            height={400}
            className="w-full max-w-lg h-auto"
          />
        </div>

      </div>
    </section>
    );
};

export default BannerPage;