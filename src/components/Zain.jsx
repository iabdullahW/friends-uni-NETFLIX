import React from 'react';
import zainPic from '../assets/zain-pic.jpg';

const Zain = () => {
  return (
    <div className="text-center p-4">
      <img src={zainPic} alt="Zain" className="w-56 h-auto mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Zain</h2>
      <p className="text-lg">Nickname: Jan ,Crybaby, Mr.Z, Mr. Reliable, The Protector</p>
      <p className="text-lg">DOB: 24 Jan</p>
      <p className="mt-4 text-[#A1A1A1]">
        Zain, your reliability and strength make you a rock for everyone around you.
        Your protective nature is truly admirable, u always cry for small things,your understanding with me, listening  and acting on my advice ,trust with me and everything thankyou for evrything u have done.
        <span className="font-bold text-white">
          I am really, really sorry if I have ever hurt you intentionally or unintentionally. Please forgive me
          and accept my dearest apologies.
        </span>
        Stay strong, my friend!
      </p>
    </div>
  );
};

export default Zain;
