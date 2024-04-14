import Image from 'next/image';
import { IconAppWindow } from '@tabler/icons-react';

import Navigation from '@/app/navigation/page.tsx';
import Boxes from '@/app/background-boxes/';
import BackgroundGradient from '@/app/background-gradient/';

import Hobbies from '@/app/hobbies';
import Hero from '@/app/hero';
import Skills from '@/app/skills';
import GridBG from '@/app/grid-bg';
import HeroHighlight from '@/app/hero-highlight-dotted';
import Projects from '@/app/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <Hobbies />
      <div className='flex'>
        <Skills />
        <Skills />
        <Skills />
      </div>
      <GridBG />
      <HeroHighlight />
      <Projects />
    </>
  );
}
