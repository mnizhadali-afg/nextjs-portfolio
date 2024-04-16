import Image from 'next/image';
import { IconAppWindow } from '@tabler/icons-react';

import Navigation from '@/app/navigation/page.tsx';
import Boxes from '@/app/background-boxes/';
import BackgroundGradient from '@/app/background-gradient/';

import Hero from '@/app/hero';
import Hobbies from '@/app/hobbies';
import Skills from '@/app/skills';
import GridBG from '@/app/grid-bg';
import HeroHighlight from '@/app/hero-highlight-dotted';
import Projects from '@/app/projects';
import MeteorCard from '@/app/meteor-card';
import SparkleHero from '@/app/sparkle-section';

export default function Home() {
  return (
    <>
      <Hero />
      <Hobbies />
      <SparkleHero />
      <div className='columns-4 container'>
        <Skills />
        <Skills />
        <Skills />
        <Skills />
      </div>
      <GridBG />
      <Projects />
      <div className='container py-48'>
        <div className='flex justify-between '>
          <MeteorCard />
          <MeteorCard />
          <MeteorCard />
          <MeteorCard />
        </div>
      </div>
    </>
  );
}
