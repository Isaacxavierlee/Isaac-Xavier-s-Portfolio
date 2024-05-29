import { projects } from '@/Data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="py-20 px-4">
      <h1 className="heading text-white text-center mb-10">
        A small selection of <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-y-8 sm:gap-y-12 lg:gap-y-16 gap-x-4 sm:gap-x-8 lg:gap-x-24 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw] text-white"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] sm:h-[40vh] lg:h-[30vh] mb-10">
                <img src={img} alt={title} className="z-10 absolute bottom-0 w-full h-full object-cover" />
              </div>

              <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1 transition duration-300 ease-in-out transform hover:text-purple hover:scale-105">
                {title}
              </h1>

              <p className="text-sm md:text-base lg:text-xl font-light lg:font-normal line-clamp-2 mt-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 w-full">
                <div className="flex items-center space-x-2">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-sm md:text-xs lg:text-xl text-purple hover:underline">
                    View Live Site
                  </p>
                  <FaLocationArrow className="ml-2" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
