"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Valentine = () => {
    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <motion.div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    initial={{ y: '100%' }}
                    animate={{ y: '-100%' }}
                    transition={{
                        duration: 100,
                        loop: Infinity,
                        ease: 'linear'
                    }}
                >
                    <div>
                        {[...Array(10)].map((_, index) => (
                            <motion.img
                                key={index}
                                src="https://media.discordapp.net/attachments/1283830529933840507/1336932987983499305/Heart-Balloon-PNG-Background.png?ex=67a59b5f&is=67a449df&hm=1ec550c195592b9389cdf470f5af30431c957dcfcb0a4e168756bdd10b3a3308&=&format=webp&quality=lossless&width=540&height=701"
                                alt="Balloon"
                                className="absolute"
                                style={{
                                    left: `${Math.random() * 100}vw`,
                                    top: `${Math.random() * 100}vh`,
                                    width: `${Math.random() * 2 + 6}vw`,
                                    opacity: 0.6,
                                }}
                                initial={{ y: '100%' }}
                                animate={{ y: '-100%' }}
                                transition={{
                                    duration: Math.random() * 50 + 50,
                                    loop: Infinity,
                                    delay: Math.random() * 10,
                                    ease: 'backIn'
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-md"
                >
                    <h1 className="text-5xl font-bold">สวัสดีจ้า</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100, y: 0 }}
                    animate={{ 
                        opacity: 1, 
                        x: 0,
                        y: [-10, 10]
                    }}
                    transition={{ 
                        duration: 1,
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }
                    }}
                    className="max-w-sm"
                >
                    <img
                        src="https://media.discordapp.net/attachments/1283830529933840507/1336869766895505459/valentine.png?ex=67a5607e&is=67a40efe&hm=2fb5acf6b4e0fbfd075af94e43b9b98745dcb498b8c029779fd040273c8b1666&=&format=webp&quality=lossless&width=701&height=701"
                        width={500}
                        height={300}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Valentine's Image"
                    />
                </motion.div>
            </div>
          
        </div>
    );
    
};

export default Valentine;


