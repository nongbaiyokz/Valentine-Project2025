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
                    
                    <Image
                        src="/images/valentine.png"
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


