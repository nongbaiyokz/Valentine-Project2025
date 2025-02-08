"use client";
import React from "react";
import Calculator from "./Calculator";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

function TimerClose() {
    const [progress, setProgress] = useState(0);
    const totalTime = 30000;
    
    useEffect(() => {
        const intervalTime = 100;
        const increment = (intervalTime / totalTime) * 100;
        const interval = setInterval(() => {
            setProgress((prev) => Math.min(prev + increment, 100));
        }, intervalTime);

        const timer = setTimeout(() => {
            const dialog = document.getElementById("my_modal_1") as HTMLDialogElement;
            if (dialog) {
                dialog.close();
            }
        }, totalTime);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);
    
    return (
        <progress className="progress progress-info" value={progress} max="100"></progress>
    );
}

const Valentine = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      {/* <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
                {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                    x: `${Math.random() * 100}vw`,
                    y: '100vh',
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: Math.random()
                    }}
                    animate={{
                    y: '-100vh',
                    x: `${Math.random() * 100}vw`,
                    opacity: 0.5,
                    }}
                    transition={{
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    delay: Math.random() * -20,
                    ease: 'linear'
                    }}
                 className="absolute w-[120px] h-[120px] bg-[url('/12.png')] bg-cover pointer-events-auto"
                />
                ))}
            </div> */}
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="btn btn-primary"
            onClick={() =>
              (
                document.getElementById("my_modal_1") as HTMLDialogElement
              ).showModal()
            }
          >
            Click Me! ❤️
          </motion.button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-base-200">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Will you be my Valentine?</p>
              <Calculator />
              <div className="card-footer">
                
              <div className="pt-2 text-center">Time Out</div>
            <div className="flex items-center">
                <div className="w-full">
                    <TimerClose />
                </div>
            </div>
        </div>
              <div className="modal-action">
                
               <form method="dialog">
                
              <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [-10, 10],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          className="max-w-sm"
        >
          <Image
            src="/valentine.webp"
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
