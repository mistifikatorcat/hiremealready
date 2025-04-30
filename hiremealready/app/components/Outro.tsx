
'use client';

import { motion } from 'framer-motion';

export default function Outro() {
    return (
        <section className="px-4 py-24 sm:py-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-xl mx-auto"
            >
                <h2 className="text-2xl sm:text-3xl font-heading text-gray-900 dark:text-white mb-4">
                    Wow, you made it to the end.
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 font-body mb-6">
                    Honestly? Thanks. You’re either really bored or slightly impressed — either way, I respect it.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 font-body mb-6">
                    In all seriousness <br />
                    <a
                        href="https://myportfolio-gilt-delta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:no-underline text-black dark:text-white"
                    >
                        here's my actual portfolio
                    </a>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 font-body">
                    And if you're not hiring, at least share this with someone who is, I really appreciate it.
                    <br />
                    And if you are, <strong className='text-red-500'>don’t ghost me</strong>. That’s just mean.
                </p>
            </motion.div>
        </section>
    );
}
