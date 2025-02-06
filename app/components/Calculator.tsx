import { useState } from "react";
import { motion } from "framer-motion";
const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult(null);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2.5 }}
>
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Cal</h2>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <label className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>
 
 

            <input
              type="text"
              value={input}
              readOnly
              className="grow animate-pulse"
              placeholder="Enter your password!"
            />
            
      
          </label>
        </ul>
        <div className="grid grid-cols-3 gap-4">
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button className="btn btn-active btn-info" onClick={handleClear}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
            >
              <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
              <path
                fillRule="evenodd"
                d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Clear
          </button>
          <button
            className="btn btn-active btn-success"
            onClick={handleCalculate}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
                clipRule="evenodd"
              />
            </svg>
            Enter
          </button>
        </div>
        {result !== null && <div>Result: {result}</div>}
      </div>

    </div>
    </motion.div>
  );
};

export default Calculator;



