'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';



export default function ValentineMail() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { 
            id: 1, 
            content: <img src="/valentine.webp" alt="Slide 1" className="max-h-[300px] object-contain" />
        },
        { 
            id: 2, 
            content: <img src="/path/to/image2.jpg" alt="Slide 2" className="max-h-[300px] object-contain" />
        },
        { 
            id: 3, 
            content: <img src="/path/to/image3.jpg" alt="Slide 3" className="max-h-[300px] object-contain" />
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full max-w-xl mx-auto p-4">
            <div className="carousel w-full">
                <motion.div
                    className="carousel-item relative w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full flex items-center justify-center min-h-[300px] bg-base-200 rounded-box">
                        {slides[currentSlide].content}
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button onClick={prevSlide} className="btn btn-circle">❮</button>
                        <button onClick={nextSlide} className="btn btn-circle">❯</button>
                    </div>
                </motion.div>
            </div>
            
            <div className="flex justify-center w-full py-2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-xs ${currentSlide === index ? 'btn-active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
           
        
        </div>
    );
}