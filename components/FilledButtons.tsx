"use client";

import { FilledButtonProps } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const FilledButton: React.FC<FilledButtonProps> = ({
    text,
    onClick,
    link,
    bgColor = "#6AA4D9", // Default background color
    hoverColor = "#683695", // Default hover color
}) => {
    const buttonContent = (
        <motion.div
            whileHover={{
                scale: 1.1,
                backgroundColor: hoverColor, // Dynamic hover color
                transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white rounded-2xl shadow-lg text-lg font-semibold text-center cursor-pointer"
            style={{ backgroundColor: bgColor }} // Apply dynamic background color
        >
            {text}
        </motion.div>
    );

    return link ? (
        <Link href={link} onClick={onClick}>
            {buttonContent}
        </Link>
    ) : (
        <button onClick={onClick} className="focus:outline-none">
            {buttonContent}
        </button>
    );
};

export default FilledButton;
