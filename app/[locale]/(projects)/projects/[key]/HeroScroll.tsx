'use client';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import React from 'react';
import { ProjectDescription } from './ProjectDescription';
import { ProjectLink } from './ProjectLink';
import { cn } from '@/lib/utils';

interface HeroScrollProps {
  title: string;
  description: string[];
  image: string;
  link: string;
  isArabic?: boolean;
  isFrench?: boolean;
  isEnglish?: boolean;
}

export function HeroScroll({
  title,
  description,
  image,
  link,
  isArabic,
  isFrench,
  isEnglish,
}: HeroScrollProps) {
  return (
    <>
      <AuroraBackground data-scroll-container>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                {/* <h1
                  className={cn(
                    'text-4xl font-semibold text-white',
                    isArabic ? 'tajawal-font' : 'houseMontage-font'
                  )}
                >
                  {title}
                </h1> */}
              </>
            }
          >
            <img
              src={image}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-fit h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </AuroraBackground>

      {/* Project Description Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <ProjectDescription
            description={description || ''}
            isArabic={isArabic}
            isFrench={isFrench}
            isEnglish={isEnglish}
          />
          {link && <ProjectLink link={link} title={title} />}
        </div>
      </section>
    </>
  );
}
