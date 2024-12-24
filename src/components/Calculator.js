import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-4 bg-white rounded-xl shadow-xl">
      <div className="flex justify-end p-2">
        <input
          type="text"
          value={input}
          className={`text-3xl font-bold text-gray-700 w-full text-right bg-transparent border-none focus:outline-none ${
            input === 'Error' ? 'animate-shake' : ''
          }`}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <button
          onClick={() => handlePress('1')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          1
        </button>
        <button
          onClick={() => handlePress('2')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          2
        </button>
        <button
          onClick={() => handlePress('3')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          3
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 p-4 rounded-lg text-xl text-white transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          C
        </button>

        <button
          onClick={() => handlePress('4')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          4
        </button>
        <button
          onClick={() => handlePress('5')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          5
        </button>
        <button
          onClick={() => handlePress('6')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          6
        </button>
        <button
          onClick={() => handlePress('+')}
          className="bg-yellow-500 p-4 rounded-lg text-xl text-white transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          +
        </button>

        <button
          onClick={() => handlePress('7')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          7
        </button>
        <button
          onClick={() => handlePress('8')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          8
        </button>
        <button
          onClick={() => handlePress('9')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          9
        </button>
        <button
          onClick={() => handlePress('-')}
          className="bg-yellow-500 p-4 rounded-lg text-xl text-white transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          -
        </button>

        <button
          onClick={() => handlePress('0')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          0
        </button>
        <button
          onClick={() => handlePress('.')}
          className="bg-gray-200 p-4 rounded-lg text-xl text-gray-700 transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          .
        </button>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 p-4 rounded-lg text-xl text-white transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          =
        </button>
        <button
          onClick={() => handlePress('*')}
          className="bg-yellow-500 p-4 rounded-lg text-xl text-white transition transform hover:scale-110 active:scale-95 hover:rotate-2 hover:shadow-xl active:animate-ping"
        >
          *
        </button>
      </div>
    </div>
  );
};

export default Calculator;
