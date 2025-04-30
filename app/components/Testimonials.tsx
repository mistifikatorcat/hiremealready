'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
    {
        name: 'Definitely not me... I mean, definitely not Daniel with comically fake moustasche.',
        quote: `Daniel has a solid sense of design, detail, and dark humor. Hire him before we do.`,
    },
    {
        name: 'Former Teammate, Probably',
        quote: `Knows his way around React, Sass, and a crisis of confidence. Ship-ready.`,
    },
    {
        name: `Best friend, who doesn't know much about development.`,
        quote: `Dude, this thing is sick! Did you do it yourself? Awesome!`,
    },
    {
        name: 'Anonymous Reviewer Who Gets It',
        quote: `Clean code. Good vibes. Not afraid to admit his own mistakes. Rare breed.`,
    },
    {
        name: 'My Mom',
        quote: `I don’t understand what he does, but I’m sure he’s very good at it.`,
    },
    {
        name: 'Startup That Never Replied',
        quote: `Yeah, we didn't take that guy, and now we struggle. Should've take him.`,
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="bg-backgroundLight dark:bg-backgroundDark px-4 py-20 sm:py-24">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-heading text-gray-900 dark:text-white mb-10">
                    What (Alleged) People Say
                </h2>

                <div className="relative">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 p-6 rounded-xl shadow-sm min-h-[160px]"
                    >
                        <p className="font-body text-base text-gray-700 dark:text-gray-300 italic mb-3">
                            “{testimonials[index].quote}”
                        </p>
                        <p className="font-heading text-sm text-primary">— {testimonials[index].name}</p>
                    </motion.div>

                    <div className="mt-6 flex justify-center gap-6">
                        <button
                            onClick={prev}
                            className="text-sm px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700"
                        >
                            ← Prev
                        </button>
                        <button
                            onClick={next}
                            className="text-sm px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
