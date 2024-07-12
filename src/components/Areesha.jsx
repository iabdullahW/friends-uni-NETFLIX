import React from 'react';
import areeshaPic from '../assets/areesha-pic.jpg';

const Areesha = () => {
  return (
    <div className="text-center p-4">
      <img src={areeshaPic} alt="Areesha" className="w-56 h-auto mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Areesha</h2>
      <p className="text-lg">Nickname: Reeshay,reesha,Chotu,u Aree, cute kid , Miss Smile,foodie ,Miss Tension free </p>
      <p className="text-lg">DOB: 5 Sept</p>
      <p className="mt-4 text-[#A1A1A1]">
        Areesha, your laughter ,wisodom  and insight are beyond your years.
        You bring clarity and understanding,tension free environment and motivation to every situation ,u r like a cute little kid haha always smiling taking pics,foodies ofc ,tysm for evrything.
        <span className="font-bold text-white">
          I am really, really sorry if I have ever hurt you intentionally or unintentionally. Please forgive me
          and accept my dearest apologies.
        </span>
        Keep smiling,shining bright!
      </p>
    </div>
  );
};

export default Areesha;
