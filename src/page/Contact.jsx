import React from 'react';
import Mail from '../component/Mail';

export default function Contact () {

  return (
    <div className="pt-[12vh] pl-[5vw] pr-[5vw] md:pl-0 md:pr-0 flex flex-col items-center">
      <h3 className='text-lg'>Contact</h3>
      <div>
      <Mail />
      </div>
    </div>
  );
};
