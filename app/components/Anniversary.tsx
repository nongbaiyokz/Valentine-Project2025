'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Anniversary() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const anniversaryDate = new Date('2024-11-22'); // Set your anniversary date

        const calculateTimeLeft = () => {
            const difference = -anniversaryDate + +new Date();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center p-8"
        >
            <h2 className="text-2xl font-bold text-primary mb-6">XXX Anniversary</h2>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <motion.div className="flex flex-col p-2 bg-base-200 border border-base-300 shadow-lg rounded-lg text-base-content">
                    <motion.span 
                        key={timeLeft.days}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-mono text-5xl"
                    >
                        {timeLeft.days}
                    </motion.span>
                    days
                </motion.div>
                <motion.div className="flex flex-col p-2 bg-base-200 border border-base-300 shadow-lg rounded-lg text-base-content">
                    <motion.span 
                        key={timeLeft.hours}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-mono text-5xl"
                    >
                        {timeLeft.hours}
                    </motion.span>
                    hours
                </motion.div>
                <motion.div className="flex flex-col p-2 bg-base-200 border border-base-300 shadow-lg rounded-lg text-base-content">
                    <motion.span 
                        key={timeLeft.minutes}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-mono text-5xl"
                    >
                        {timeLeft.minutes}
                    </motion.span>
                    min
                </motion.div>
                <motion.div className="flex flex-col p-2 bg-base-200 border border-base-300 shadow-lg rounded-lg text-base-content">
                    <motion.span 
                        key={timeLeft.seconds}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-mono text-5xl countdown"
                    >
                        {timeLeft.seconds}
                    </motion.span>
                    <span className="text-sm opacity-70">sec</span>
                </motion.div>
            </div>
        </motion.div>
    );
}