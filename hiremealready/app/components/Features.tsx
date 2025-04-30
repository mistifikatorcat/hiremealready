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
    <section className="px-4 py-10 sm:py-24">
      <div className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center flex flex-col items-center justify-start"
          >
            <img src={feature.icon} alt="icon" className="w-16 h-16 mb-4" />
            <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="font-body text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
