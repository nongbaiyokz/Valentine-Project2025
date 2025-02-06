"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {
    const [display, setDisplay] = useState('0');

    const handleButtonClick = (value: string) => {
        if (value === 'C') {
            setDisplay('0');
        } else if (value === '=') {
            try {
                setDisplay(eval(display).toString());
            } catch (error) {
                setDisplay('Error');
            }
        } else {
            setDisplay(display === '0' ? value : display + value);
        }
    };

    return (
        <motion.div
            className="flex justify-center items-center h-screen bg-base-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="text-right text-4xl font-bold mb-4">{display}</div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="btn btn-error" onClick={() => handleButtonClick('C')}>C</button>
                        <button className="btn btn-secondary" onClick={() => handleButtonClick('/')}>/</button>
                        <button className="btn btn-secondary" onClick={() => handleButtonClick('*')}>*</button>
                        <button className="btn btn-secondary" onClick={() => handleButtonClick('-')}>-</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('7')}>7</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('8')}>8</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('9')}>9</button>
                        <button className="btn btn-secondary" onClick={() => handleButtonClick('+')}>+</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('4')}>4</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('5')}>5</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('6')}>6</button>
                        <button className="btn btn-primary row-span-2" onClick={() => handleButtonClick('=')}>=</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('1')}>1</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('2')}>2</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('3')}>3</button>
                        <button className="btn btn-primary col-span-2" onClick={() => handleButtonClick('0')}>0</button>
                        <button className="btn btn-primary" onClick={() => handleButtonClick('.')}>.</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Calculator;