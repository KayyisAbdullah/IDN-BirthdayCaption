import React from 'react';
import Typewriter from 'typewriter-effect';


const IntroSection: React.FC = () => {
  return (
    <div className="mb-6 text-center px-4 mt-10">
      <img src="/images/gambar2.gif" alt="Deskripsi gambar" className="w-64 h-auto infinite" />
    <h2 className="text-2xl font-bold light:text-gray-900 dark:text-white mb-3 mt-12 font-beth">
  <Typewriter
    options={{
      strings: ['Happy Birthday, Nana 👋'],
      autoStart: true,
      loop: true,
      delay: 80,
    }}
  />
</h2>

<p className="text-sm leading-relaxed mb-3 light:text-gray-600 dark:text-white mt-5">
  We want to make this day special, so we thought the best gift is the opportunity to choose what you truly want. That's why I Make gift card !
</p>

 <img src="/images/gambar4.png" alt="Deskripsi gambar" className="w-auto h-auto mt-8" />
 </div>
  );
};

export default IntroSection;