import React from 'react';
import samreenPic from '../assets/samreen-pic.jpg';

const Samreen = () => {
  return (
    <div className="text-center p-4">
      <img src={samreenPic} alt="Samreen" className="w-56 h-auto mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Samreen</h2>
      <p className="text-lg">Nickname: Samss,Turtle,Miss nonchalant, Sameern, The Light, Sunshine</p>
      <p className="text-lg">DOB: 30 Oct</p>
      <p className="mt-4 text-[#A1A1A1]">
        Samreen, your presence lights up the room and brings warmth to everyone around.
        Your positivity is a beacon of hope compromising on everything and forgiving , u r very nonchalant , always teasing me with Babar and Roanldao  haha i hate that nvm thankyou for everything .
        <span className="font-bold text-white">
          I am really, really sorry if I have ever hurt you intentionally or unintentionally. Please forgive me
          and accept my dearest apologies.
        </span>
        Keep spreading your light,positivity!
      </p>
    </div>
  );
};

export default Samreen;
