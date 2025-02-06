"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Valentine = () => {
    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
           
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


