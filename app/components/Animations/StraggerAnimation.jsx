'use client';
import { motion, useInView } from 'framer-motion';
import React from 'react';

const LetterStagger = ({ children, speed = 30 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                visible: {
                    transition: { staggerChildren: speed / 1000 }, // Converts speed into seconds
                },
            }}
            className="inline-block" // Prevents unintended line breaks
        >
            {children.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default LetterStagger;
