import React from 'react';
import hammadPic from '../assets/hammad-pic.jpg';

const Hammad = () => {
  return (
    <div className="text-center p-4">
      <img src={hammadPic} alt="Hammad" className="w-56 h-auto mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Hammad</h2>
      <p className="text-lg">Nickname: Hammu, Mr.Genius, The Fixer</p>
      <p className="text-lg">DOB:  9 Feb</p>
      <p className="mt-4 text-[#A1A1A1]">
        Hammad, your strength and resilience inspire us every day.
        Your ability to stay calm and composed in any situation makes you a true leader,you r very intelligent,genius,always helping everyone doing compromises ,i am heavily in depth with you al the things u have done wallah tysmm.
        <span className="font-bold text-white">
          I am really, really sorry if I have ever hurt you intentionally or unintentionally. Please forgive me
          and accept my dearest apologies.
        </span>
        Stay awesome, my friend!
      </p>
    </div>
  );
};

export default Hammad;
