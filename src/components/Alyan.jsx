import React from 'react';
import alyanPic from '../assets/alyan-pic.jpg';

const Alyan = () => {
  return (
    <div className="text-center p-4">
      <img src={alyanPic} alt="Alyan" className="w-56 h-auto mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Alyan</h2>
      <p className="text-lg">Nickname: Alyana, Mr. Late, Mr. Special, Ally</p>
      <p className="text-lg">DOB: 21 Dec</p>
      <p className="mt-4 text-[#A1A1A1]">
        Alyan, you are an amazing friend who brings joy and laughter to every moment.
        Your kindness and positivity make you truly special.   Always stay the incredible person you are! Every time managing everything, taking care of everyone,
        special, sometimes moody ,thankyou so much for evrything beloved ,for helping,teaching,for the treats and being in my life. 
        <span className="font-bold text-white">
          I am really, really sorry if I have ever hurt you intentionally or unintentionally. Please forgive me
          and accept my dearest apologies.
        </span>
     stay same,keep shining bright.
      </p>
    </div>
  );
};

export default Alyan;
