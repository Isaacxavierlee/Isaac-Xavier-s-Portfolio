import React from 'react';
import { projects } from '@/Data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-white text-center mb-12">
        Latest Project <span className="text-purple">Insights</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-12 sm:gap-20 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="project-card lg:min-h-[32.5rem] h-[25rem] w-full sm:w-96 mb-20 sm:mb-24 flex items-center justify-center text-white"> {/* Increased mb values */}
            <PinContainer title={title} href={link}>
              <div className="image-container relative w-full h-72 sm:h-[30vh] overflow-hidden rounded-t-3xl">
                <div className="bg-gradient-to-br from-transparent to-black absolute inset-0 lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
                  <img src="/bg.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <img src={img} alt={`Cover for ${title}`} className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="content-container p-6">
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{des}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {iconLists.map((icon, index) => (
                      <div key={index} className="icon bg-black rounded-full w-8 h-8 flex justify-center items-center" style={{ transform: `translateX(-${5 * index + 2}px)` }}>
                        <img src={icon} alt={`Icon ${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-purple hover:underline truncate">View Live Site</a>
                    <FaLocationArrow className="ml-2 w-3 h-3" color="#CBACF9" />
                  </div>
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
