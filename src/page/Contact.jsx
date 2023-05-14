import React from 'react';
import Mail from '../component/Mail';
import Info from '../data/Info.json';

export default function Contact () {

  return (
    <div className="pt-[12vh] pl-[5vw] pr-[5vw] md:pl-0 md:pr-0 flex flex-col items-center">
      <h3 className='text-lg'>Contact</h3>
      <Mail />
      <div className='flex flex-col items-center mt-[2vh] text-[#908e91]'>
        <p>Tel. {Info[0].tel}</p>
        <p>E-Mail. {Info[0].mail}</p>
      </div>
    </div>
  );
};
