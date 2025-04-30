'use client';
import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Brain-Compiled',
        icon: '/images/brain.gif',
        text: `Written by me. Not ChatGPT. Okay fine — assisted by ChatGPT. It's 2025. Why use a rock when you've got a hammer?`,
    },
    {
        title: 'Fast & Furious',
        icon: '/images/flash.gif',
        text: (
            <>
                Unlike the movie saga, I build things that make sense. Sliders that slide.
                Forms that actually{' '}
                <span className="text-primary font-bold text-red-500">work</span>
                . (You listening, Company-With-Broken-Masking-Form™?)
            </>
        ),
    },
    {
        title: 'Fully Charged',
        icon: '/images/battery.gif',
        text: `Fueled by caffeine, panic, and impostor syndrome. I’ll tackle anything: JS, Kotlin, Swift, Elm, Go, Finnish, Turbo Pascal... Or a wind generator in a shed if you need one.`,
    },
    {
        title: 'Ready Anywhere',
        icon: '/images/space.gif',
        text: `Remote? Hybrid? Office-based with questionable coffee? I’m good either way. Might just rethink my sleeping schedule`,
    },
    {
        title: 'Rare Knowledge',
        icon: '/images/quit.gif',
        text: "I know how to quit Vim."
    }
];

export default function Features() {
    return (
      <section className="px-4 sm:px-6 lg:px-12 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div
          className={`
            max-w-7xl mx-auto
            /* mobile-first: grid 1→2 cols */
            grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12
            /* at lg: switch to flex, wrap & center */
            lg:flex lg:flex-wrap lg:justify-center lg:gap-16
          `}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`
                flex flex-col items-center text-center space-y-4
                hover:-translate-y-1 hover:shadow-lg
                transition-transform duration-300
                /* sizing: full width → half → one-third */
                basis-full sm:basis-1/2 lg:basis-1/3
              `}
            >
              <img
                src={feature.icon}
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
              />
  
              <h3 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-white">
                {feature.title}
              </h3>
  
              <p className="font-body text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-xs">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
