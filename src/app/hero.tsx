'use client';

import BackgroundBeams from '@/app/aceternity-ui/background-beams';
import { Button } from '@/app/aceternity-ui/moving-border';

const Hero = () => {
  return (
    <div className='h-[50rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased'>
      <div className='max-w-2xl mx-auto p-4'>
        <h1 className='relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>
          Ali Mousavi
        </h1>
        <p></p>
        <p className='text-neutral-500 max-w-lg mx-auto my-5 text-md text-center relative z-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et
          eligendi saepe exercitationem ut cumque fuga quae. Quibusdam dolorum
          consequatur illo, corrupti pariatur eius harum quam vitae error beatae
          officiis.
        </p>
      </div>
      <MovingBorderDemo />
      <BackgroundBeams />
    </div>
  );
};

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius='1.75rem'
        className='bg-slate-900 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800'
      >
        Contact Me
      </Button>
    </div>
  );
}

export default Hero;
