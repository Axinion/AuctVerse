import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-4/5 py-5 mx-auto mt-4 sm:flex-row">
      <div className="items-center justify-start flex-1 hidden space-x-12 sm:flex">
        <p className="text-base text-center text-white cursor-pointer">
          Market
        </p>
        <p className="text-base text-center text-white cursor-pointer">
          Artist
        </p>
        <p className="text-base text-center text-white cursor-pointer">
          Features
        </p>
        <p className="text-base text-center text-white cursor-pointer">
          Community
        </p>
      </div>
    </div>
  );
};

export default Footer;
