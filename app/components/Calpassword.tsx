"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "=") {
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "=",
    "C",
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-base-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-5xl text-right mb-4">{display}</div>
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`btn btn-primary ${
                  button === "=" ? "col-span-2" : ""
                } ${button === "0" ? "col-span-2" : ""}`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Calculator;
