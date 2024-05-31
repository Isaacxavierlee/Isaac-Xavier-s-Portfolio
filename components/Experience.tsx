import { workExperience } from '@/Data';
import React from 'react';
import { Button } from './MovingBorders';


function Experience() {
    return (
        <div className="py-20 px-4" id="testimonials">
            <h1 className="heading text-white text-center mb-10">
                Work <span className="text-purple">Experiences</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button>
                        <div>
                            <img src={card.thumbnail}
                            alt={card.thumbnail}
                            className='lg:w-32 
                            md:w-20 
                            w-16'/>
                        </div>
                    </Button>
                    ))}
            </div>
        </div>
    );
}

export default Experience;
