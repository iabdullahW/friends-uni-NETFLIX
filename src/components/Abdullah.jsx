import React from 'react';
import abdPic from '../assets/abd-pic.jpg';

const Abdullah = () => {
  return (
    <div className="text-center p-4">
      <img src={abdPic} alt="Abdullah" className="w-56 h-auto mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">Abdullah</h2>
      <p className="text-lg">Nickname: Abd, The Brave, Mr. Dependable</p>
      <p className="text-lg">DOB: 5 Oct</p>
      <p className="mt-4 text-[#A1A1A1]">
       abdullah be who u r ,strong brave useful when anyone need u ,no one can understand u even u yourself cant
        <span className="font-bold text-white">
        im rellly sorry abdullah ive let u down many many times ,headsup king u can
        </span>
        Keep being the strong person you are!
      </p>
    </div>
  );
};

export default Abdullah;
