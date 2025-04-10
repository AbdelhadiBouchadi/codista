'use client';
import About from '@/components/shared/About/About';
import Cursor from '@/components/shared/Cursor';
import Hero from '@/components/shared/Hero/Hero';
import Intro from '@/components/shared/Intro';
import Projects from '@/components/shared/Projects/Projects';
import Services from '@/components/shared/Services/Services';
import { Skills } from '@/components/shared/Skills/Skills';
import Testimonials from '@/components/shared/Testimonials/Testimonials';
import { Transition } from '@/components/shared/Transition';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MouseEvent } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main
      onContextMenu={(e: MouseEvent) => {
        e.preventDefault();
      }}
    >
      <Transition>
        <Cursor />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
      </Transition>
      {/* 
      
     
      
      
      
      <Contact />
      <Doodle />
      <Footer /> */}
    </main>
  );
}
