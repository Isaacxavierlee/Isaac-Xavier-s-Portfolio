import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { socialMedia } from '@/Data';

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center relative z-10">
        <h1 className="text-white heading lg:max-w-[45vw] text-center">
          Let&apos;s <span className="text-purple">Connect</span> & Make An Impact
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Having a better hand doesn&apos;t make you a better player.
        </p>
        <a href="mailto:reivax.caasi@gmail.com?subject=Job%20Opportunity%20Inquiry&body=Dear%20Isaac%20Xavier%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I&apos;m%20recruiting%20for%20a%20role%20at%20%5BCompany%20Name%5D%20that%20aligns%20with%20your%20skills%20and%20experience.%0D%0A%0D%0AInterested%20in%20learning%20more%3F%20Let&apos;s%20chat.%0D%0A%0D%0ARespectfully%2C%0D%0A%5BYour%20Name%5D">
          <MagicButton
            title="Connect"
            icon={<AiOutlineMail />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col items-center mt-16">
        <p className="md:text-base text-sm md:font-normal font-light mb-4">
          Isaac Xavier
        </p>

        <div className="flex justify-center items-center gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link} // Set href attribute to the profile's link
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practices for opening external links
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={profile.img} alt={profile.id} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
