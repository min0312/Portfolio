import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function Mail () {
  const form = useRef();

  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(service_id, template_id, form.current, public_key)
      alert("전송완료")
    } catch (error) {
      console.log("에러")
    }
  };

  const content = ["Name", "Email", "Phone", "Title", "Message"]

  return (
    <form ref={form} onSubmit={sendEmail}
      className='align-middle'>
      {content.map((item) => 
        <div key={item}
        className='flex border-[1px] rounded-lg p-[3px] pl-[17px] gap-[3vw] mt-[2vh] border-[#F5F0F6] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]'>
          {item === "Message" ? 
          <textarea name={`Message`} 
          placeholder={`내용을 입력해주세요`}
          className='bg-transparent focus:outline-none h-[30vh] w-[100%] focus:border-none'/>:
          <>
            <div className='w-[50px]'>{item}</div>
            <input type="text" name={`user_${item}`} 
              placeholder={`${item}을 입력해주세요`}
              className='bg-transparent w-[80%] focus:outline-none'/>
          </>
        }
        </div>
      )}
      <button type='submit' value="send">
        send
      </button>
    </form>
  );
};
