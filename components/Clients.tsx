import React from 'react';
import { InfiniteMovingCards } from './ui/infiniteMovingCards';
import { testimonials } from '@/Data';

const Clients = () => {
  return (
    <div className="py-20 px-4">
      <h1 className="heading text-white text-center mb-10">
        Isaac's <span className="text-purple">Testimonial</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-y-8 sm:gap-y-12 lg:gap-y-16 gap-x-4 sm:gap-x-8 lg:gap-x-24 mt-10">
        {/* Client testimonials will go here */}
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        />
        </div>
      </div>
    </div>
  );
};

export default Clients;
