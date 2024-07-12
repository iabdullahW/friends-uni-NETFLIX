import React from 'react';
import tenarPic from '../assets/tenar-pic.jpg';

const Tenar = () => {
  return (
    <div className="text-center p-4">
      <img src={tenarPic} alt="Tenar" className="w-56 h-auto mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Tenar</h2>
      <p className="text-lg">Nickname: Abaya girl,hijabi,burka avenger, Mr. Calm, mobile addict</p>
      <p className="text-lg">DOB: 4 May.</p>
      <p className="mt-4 text-[#A1A1A1]">
        Tenar, your calm demeanor and strategic thinking are truly remarkable.
        You always know how to navigate through any situation.
        <span className="font-bold text-white">
          I am really, really sorry if I have ever hurt you intentionally or unintentionally. Please forgive me
          and accept my dearest apologies.
        </span>
        Stay awesome, keep shining bright!
      </p>
    </div>
  );
};

export default Tenar;
