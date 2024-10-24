//    "use client"

// // // // // import { useState, useEffect } from 'react';

// // // // // export default function JumbleGame() {
// // // // //   const [words, setWords] = useState<string[]>([]);
// // // // //   const [names, setNames] = useState<string[]>([]);
// // // // //   const [selectedNames, setSelectedNames] = useState<string[]>([]);
// // // // //   const [currentWord, setCurrentWord] = useState('');
// // // // //   const [actualWord, setActualWord] = useState('');
// // // // //   const [timer, setTimer] = useState(10);
// // // // //   const [gameState, setGameState] = useState(false);
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // //   const [results, setResults] = useState<{ name: string; word: string; time: number }[]>([]);
// // // // //   const [showActualWord, setShowActualWord] = useState(false);
// // // // //   const [gameOver, setGameOver] = useState(false);
// // // // //   const [gameStarted, setGameStarted] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       const wordsRes = await fetch('/words.json');
// // // // //       const namesRes = await fetch('/names.json');
// // // // //       const wordsData = await wordsRes.json();
// // // // //       const namesData = await namesRes.json();
// // // // //       setWords(wordsData.words);
// // // // //       setNames(namesData.names);
// // // // //     };

// // // // //     fetchData();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (gameState && timer > 0) {
// // // // //       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
// // // // //       return () => clearInterval(interval);
// // // // //     } else if (timer === 0) {
// // // // //       handleStop();
// // // // //     }
// // // // //   }, [timer, gameState]);

// // // // //   const jumbleWord = (word: string) => {
// // // // //     return word.split('').sort(() => Math.random() - 0.5).join('');
// // // // //   };

// // // // //   const handleStart = () => {
// // // // //     setGameState(true);
// // // // //     setGameStarted(true);
// // // // //     setTimer(10);
// // // // //     setCurrentIndex(0);
// // // // //     setActualWord('');
// // // // //     setResults([]);
// // // // //     setShowActualWord(false);
// // // // //     setGameOver(false);

// // // // //     if (selectedNames.length > 0 && words.length > 0) {
// // // // //       setCurrentWord(jumbleWord(words[0]));
// // // // //     }
// // // // //   };

// // // // //   const handleStop = () => {
// // // // //     if (gameState) {
// // // // //       setGameState(false);
// // // // //       const selectedName = selectedNames[currentIndex % selectedNames.length];
// // // // //       setResults((prev) => [
// // // // //         ...prev,
// // // // //         { name: selectedName, word: words[currentIndex], time: 10 - timer },
// // // // //       ]);
// // // // //       setActualWord(words[currentIndex]);
// // // // //       setShowActualWord(true);

// // // // //       if (currentIndex + 1 >= words.length) {
// // // // //         setGameOver(true);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const handleNext = () => {
// // // // //     if (currentIndex + 1 < words.length) {
// // // // //       setCurrentIndex((prev) => prev + 1);
// // // // //       setCurrentWord(jumbleWord(words[currentIndex + 1]));
// // // // //       setTimer(10);
// // // // //       setGameState(true);
// // // // //       setShowActualWord(false);
// // // // //     } else {
// // // // //       setGameOver(true);
// // // // //     }
// // // // //   };

// // // // //   const handleNameSelection = (name: string) => {
// // // // //     if (selectedNames.includes(name)) {
// // // // //       setSelectedNames(selectedNames.filter((n) => n !== name));
// // // // //     } else {
// // // // //       setSelectedNames([...selectedNames, name]);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (showActualWord) {
// // // // //       const timerId = setTimeout(() => {
// // // // //         setShowActualWord(false);
// // // // //       }, 5000);

// // // // //       return () => clearTimeout(timerId);
// // // // //     }
// // // // //   }, [showActualWord]);

// // // // //   const totalTimes = selectedNames.reduce((acc, name) => {
// // // // //     const totalTime = results
// // // // //       .filter(result => result.name === name)
// // // // //       .reduce((sum, result) => sum + result.time, 0);
// // // // //     acc[name] = totalTime;
// // // // //     return acc;
// // // // //   }, {} as Record<string, number>);

// // // // //   const currentParticipant = selectedNames[currentIndex % selectedNames.length];
// // // // //   const totalWords = Math.floor(words.length / selectedNames.length);

// // // // //   const sortedResults = results
// // // // //     .map(result => ({ ...result, time: 10 - result.time })) // Adjust time for display
// // // // //     .sort((a, b) => a.time - b.time);

// // // // //   const handleRestart = () => {
// // // // //     setGameStarted(false);
// // // // //     setGameOver(false);
// // // // //     setSelectedNames([]);
// // // // //     setResults([]);
// // // // //     setCurrentIndex(0);
// // // // //     setTimer(10);
// // // // //     setShowActualWord(false);
// // // // //     setGameState(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex min-h-screen bg-gray-100">
// // // // //       <div className="w-1/4 p-6">
// // // // //         <h2 className="text-2xl mb-6">Select Participants</h2>
// // // // //         <div className="mb-6">
// // // // //           {names.map((name, idx) => (
// // // // //             <label key={idx} className="flex items-center mb-2">
// // // // //               <input
// // // // //                 type="checkbox"
// // // // //                 value={name}
// // // // //                 onChange={() => handleNameSelection(name)}
// // // // //                 className="mr-2"
// // // // //               />
// // // // //               {name}
// // // // //             </label>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="flex flex-col items-center justify-center w-3/4 p-6">
// // // // //         <div className="bg-white rounded shadow-md w-full max-w-lg p-6">
// // // // //           {selectedNames.length > 0 && (
// // // // //             <h3 className="text-lg mb-4">
// // // // //               Each participant will get {totalWords} words to guess, and they will have 10 seconds to guess each word.
// // // // //             </h3>
// // // // //           )}

// // // // //           {/* Only show Participant: label during the game */}
// // // // //           {!gameOver && (
// // // // //             <h2 className="text-3xl font-bold mb-4">
// // // // //               Participant: <span className="text-blue-600">{currentParticipant}</span>
// // // // //             </h2>
// // // // //           )}

// // // // //           {gameState && (
// // // // //             <div className="mt-4">
// // // // //               <h3 className="text-xl">
// // // // //                 Jumbled Word: <div className="font-bold">{currentWord}</div>
// // // // //               </h3>
// // // // //               <h4 className="text-lg text-red-500 mt-4">Time: {timer}s</h4>
// // // // //             </div>
// // // // //           )}

// // // // //           {showActualWord && (
// // // // //             <div className="mt-4">
// // // // //               <h4 className="text-lg text-green-500">
// // // // //                 The actual word is: <strong>{actualWord}</strong>
// // // // //               </h4>
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="mt-8">
// // // // //             {!gameStarted && (
// // // // //               <button
// // // // //                 onClick={handleStart}
// // // // //                 disabled={selectedNames.length === 0}
// // // // //                 className={`bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 ${
// // // // //                   selectedNames.length === 0 ? 'cursor-not-allowed' : 'hover:bg-blue-600'
// // // // //                 } mb-4`}
// // // // //               >
// // // // //                 Start Game
// // // // //               </button>
// // // // //             )}

// // // // //             <div className="flex space-x-4">
// // // // //               <button
// // // // //                 onClick={handleNext}
// // // // //                 className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${gameOver ? 'hidden' : ''}`}
// // // // //                 disabled={gameOver}
// // // // //               >
// // // // //                 Next
// // // // //               </button>

// // // // //               <button
// // // // //                 onClick={handleStop}
// // // // //                 disabled={timer === 0}
// // // // //                 className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
// // // // //                   timer === 0 ? 'opacity-50 cursor-not-allowed' : ''
// // // // //                 }`}
// // // // //               >
// // // // //                 Stop
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {gameOver && (
// // // // //             <div className="mt-8">
// // // // //               <h2 className="text-2xl">Results</h2>
// // // // //               <table className="min-w-full border-collapse border border-gray-300 mt-4">
// // // // //                 <thead>
// // // // //                   <tr>
// // // // //                     <th className="border border-gray-300 px-4 py-2">Name</th>
// // // // //                     <th className="border border-gray-300 px-4 py-2">Word</th>
// // // // //                     <th className="border border-gray-300 px-4 py-2">Time (s)</th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                   {sortedResults.map((result, index) => (
// // // // //                     <tr key={index}>
// // // // //                       <td className="border border-gray-300 px-4 py-2">{result.name}</td>
// // // // //                       <td className="border border-gray-300 px-4 py-2">{result.word}</td>
// // // // //                       <td className="border border-gray-300 px-4 py-2">{result.time}</td>
// // // // //                     </tr>
// // // // //                   ))}
// // // // //                 </tbody>
// // // // //               </table>
// // // // //               <button
// // // // //                 onClick={handleRestart}
// // // // //                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
// // // // //               >
// // // // //                 Restart
// // // // //               </button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useState, useEffect } from 'react';

// // // // export default function JumbleGame() {
// // // //   const [words, setWords] = useState<string[]>([]);
// // // //   const [names, setNames] = useState<string[]>([]);
// // // //   const [selectedNames, setSelectedNames] = useState<string[]>([]);
// // // //   const [currentWord, setCurrentWord] = useState('');
// // // //   const [actualWord, setActualWord] = useState('');
// // // //   const [timer, setTimer] = useState(10);
// // // //   const [gameState, setGameState] = useState(false);
// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const [results, setResults] = useState<{ name: string; word: string; time: number }[]>([]);
// // // //   const [showActualWord, setShowActualWord] = useState(false);
// // // //   const [gameOver, setGameOver] = useState(false);
// // // //   const [gameStarted, setGameStarted] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       const wordsRes = await fetch('/words.json');
// // // //       const namesRes = await fetch('/names.json');
// // // //       const wordsData = await wordsRes.json();
// // // //       const namesData = await namesRes.json();
// // // //       setWords(wordsData.words);
// // // //       setNames(namesData.names);
// // // //     };

// // // //     fetchData();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (gameState && timer > 0) {
// // // //       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
// // // //       return () => clearInterval(interval);
// // // //     } else if (timer === 0) {
// // // //       handleStop();
// // // //     }
// // // //   }, [timer, gameState]);

// // // //   const jumbleWord = (word: string) => {
// // // //     return word.split('').sort(() => Math.random() - 0.5).join('');
// // // //   };

// // // //   const handleStart = () => {
// // // //     setGameState(true);
// // // //     setGameStarted(true);
// // // //     setTimer(10);
// // // //     setCurrentIndex(0);
// // // //     setActualWord('');
// // // //     setResults([]);
// // // //     setShowActualWord(false);
// // // //     setGameOver(false);

// // // //     if (selectedNames.length > 0 && words.length > 0) {
// // // //       setCurrentWord(jumbleWord(words[0]));
// // // //     }
// // // //   };

// // // //   const handleStop = () => {
// // // //     if (gameState) {
// // // //       setGameState(false);
// // // //       const selectedName = selectedNames[currentIndex % selectedNames.length];
// // // //       setResults((prev) => [
// // // //         ...prev,
// // // //         { name: selectedName, word: words[currentIndex], time: 10 - timer },
// // // //       ]);
// // // //       setActualWord(words[currentIndex]);
// // // //       setShowActualWord(true);

// // // //       if (currentIndex + 1 >= words.length) {
// // // //         setGameOver(true);
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleNext = () => {
// // // //     if (currentIndex + 1 < words.length) {
// // // //       setCurrentIndex((prev) => prev + 1);
// // // //       setCurrentWord(jumbleWord(words[currentIndex + 1]));
// // // //       setTimer(10);
// // // //       setGameState(true);
// // // //       setShowActualWord(false);
// // // //     } else {
// // // //       setGameOver(true);
// // // //     }
// // // //   };

// // // //   const handleNameSelection = (name: string) => {
// // // //     if (selectedNames.includes(name)) {
// // // //       setSelectedNames(selectedNames.filter((n) => n !== name));
// // // //     } else {
// // // //       setSelectedNames([...selectedNames, name]);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (showActualWord) {
// // // //       const timerId = setTimeout(() => {
// // // //         setShowActualWord(false);
// // // //       }, 5000);

// // // //       return () => clearTimeout(timerId);
// // // //     }
// // // //   }, [showActualWord]);

// // // //   const totalTimes = selectedNames.reduce((acc, name) => {
// // // //     const totalTime = results
// // // //       .filter(result => result.name === name)
// // // //       .reduce((sum, result) => sum + result.time, 0);
// // // //     acc[name] = totalTime;
// // // //     return acc;
// // // //   }, {} as Record<string, number>);

// // // //   const currentParticipant = selectedNames[currentIndex % selectedNames.length];
// // // //   const totalWords = Math.floor(words.length / selectedNames.length);

// // // //   const sortedResults = results
// // // //     .map(result => ({ ...result, time: 10 - result.time })) // Adjust time for display
// // // //     .sort((a, b) => a.time - b.time);

// // // //   const handleRestart = () => {
// // // //     setGameStarted(false);
// // // //     setGameOver(false);
// // // //     setSelectedNames([]);
// // // //     setResults([]);
// // // //     setCurrentIndex(0);
// // // //     setTimer(10);
// // // //     setShowActualWord(false);
// // // //     setGameState(false);
// // // //   };

// // // //   return (
// // // //     <div className="flex min-h-screen bg-gray-100">
// // // //       <div className="w-1/4 p-6">
// // // //         <h2 className="text-2xl mb-6">Select Participants</h2>
// // // //         <div className="mb-6">
// // // //           {names.map((name, idx) => (
// // // //             <label key={idx} className="flex items-center mb-2">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 value={name}
// // // //                 onChange={() => handleNameSelection(name)}
// // // //                 className="mr-2"
// // // //               />
// // // //               {name}
// // // //             </label>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <div className="flex flex-col items-center justify-center w-3/4 p-6">
// // // //         <div className="bg-white rounded shadow-md w-full max-w-lg p-6">
// // // //           {selectedNames.length > 0 && (
// // // //             <h3 className="text-lg mb-4">
// // // //               Each participant will get {totalWords} words to guess, and they will have 10 seconds to guess each word.
// // // //             </h3>
// // // //           )}

// // // //           {/* Only show Participant: label during the game */}
// // // //           {!gameOver && (
// // // //             <h2 className="text-3xl font-bold mb-4">
// // // //               Participant: <span className="text-blue-600">{currentParticipant}</span>
// // // //             </h2>
// // // //           )}

// // // //           {gameState && (
// // // //             <div className="mt-4">
// // // //               <h3 className="text-xl">
// // // //                 Jumbled Word: <div className="font-bold">{currentWord}</div>
// // // //               </h3>
// // // //               <h4 className="text-lg text-red-500 mt-4">Time: {timer}s</h4>
// // // //             </div>
// // // //           )}

// // // //           {showActualWord && (
// // // //             <div className="mt-4">
// // // //               <h4 className="text-lg text-green-500">
// // // //                 The actual word is: <strong>{actualWord}</strong>
// // // //               </h4>
// // // //             </div>
// // // //           )}

// // // //           <div className="mt-8">
// // // //             {!gameStarted && (
// // // //               <button
// // // //                 onClick={handleStart}
// // // //                 disabled={selectedNames.length === 0}
// // // //                 className={`bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 ${
// // // //                   selectedNames.length === 0 ? 'cursor-not-allowed' : 'hover:bg-blue-600'
// // // //                 } mb-4`}
// // // //               >
// // // //                 Start Game
// // // //               </button>
// // // //             )}

// // // //             <div className="flex space-x-4">
// // // //               <button
// // // //                 onClick={handleNext}
// // // //                 className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${gameOver ? 'hidden' : ''}`}
// // // //                 disabled={gameOver}
// // // //               >
// // // //                 Next
// // // //               </button>

// // // //               {/* Conditionally render the Stop button */}
// // // //               {!gameOver && (
// // // //                 <button
// // // //                   onClick={handleStop}
// // // //                   disabled={timer === 0}
// // // //                   className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
// // // //                     timer === 0 ? 'opacity-50 cursor-not-allowed' : ''
// // // //                   }`}
// // // //                 >
// // // //                   Stop
// // // //                 </button>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           {gameOver && (
// // // //             <div className="mt-8">
// // // //               <h2 className="text-2xl">Results</h2>
// // // //               <table className="min-w-full border-collapse border border-gray-300 mt-4">
// // // //                 <thead>
// // // //                   <tr>
// // // //                     <th className="border border-gray-300 px-4 py-2">Name</th>
// // // //                     <th className="border border-gray-300 px-4 py-2">Word</th>
// // // //                     <th className="border border-gray-300 px-4 py-2">Time (s)</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {sortedResults.map((result, index) => (
// // // //                     <tr key={index}>
// // // //                       <td className="border border-gray-300 px-4 py-2">{result.name}</td>
// // // //                       <td className="border border-gray-300 px-4 py-2">{result.word}</td>
// // // //                       <td className="border border-gray-300 px-4 py-2">{result.time}</td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //               <button
// // // //                 onClick={handleRestart}
// // // //                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
// // // //               >
// // // //                 Restart
// // // //               </button>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState, useEffect } from 'react';

// // // export default function JumbleGame() {
// // //   const [words, setWords] = useState<string[]>([]);
// // //   const [names, setNames] = useState<string[]>([]);
// // //   const [selectedNames, setSelectedNames] = useState<string[]>([]);
// // //   const [currentWord, setCurrentWord] = useState('');
// // //   const [actualWord, setActualWord] = useState('');
// // //   const [timer, setTimer] = useState(10);
// // //   const [gameState, setGameState] = useState(false);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [results, setResults] = useState<{ name: string; word: string; time: number }[]>([]);
// // //   const [showActualWord, setShowActualWord] = useState(false);
// // //   const [gameOver, setGameOver] = useState(false);
// // //   const [gameStarted, setGameStarted] = useState(false);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       const wordsRes = await fetch('/words.json');
// // //       const namesRes = await fetch('/names.json');
// // //       const wordsData = await wordsRes.json();
// // //       const namesData = await namesRes.json();
// // //       setWords(wordsData.words);
// // //       setNames(namesData.names);
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (gameState && timer > 0) {
// // //       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
// // //       return () => clearInterval(interval);
// // //     } else if (timer === 0) {
// // //       handleStop(); // Automatically stop the game when timer hits zero
// // //     }
// // //   }, [timer, gameState]);

// // //   const jumbleWord = (word: string) => {
// // //     return word.split('').sort(() => Math.random() - 0.5).join('');
// // //   };

// // //   const handleStart = () => {
// // //     setGameState(true);
// // //     setGameStarted(true);
// // //     setTimer(10);
// // //     setCurrentIndex(0);
// // //     setActualWord('');
// // //     setResults([]);
// // //     setShowActualWord(false);
// // //     setGameOver(false);

// // //     if (selectedNames.length > 0 && words.length > 0) {
// // //       setCurrentWord(jumbleWord(words[0]));
// // //     }
// // //   };

// // //   const handleStop = () => {
// // //     if (gameState) {
// // //       setGameState(false);
// // //       const selectedName = selectedNames[currentIndex % selectedNames.length];
// // //       let adjustedTime;

// // //       // If the timer is zero, that means the user failed to guess
// // //       if (timer === 0) {
// // //         adjustedTime = 10; // Penalty time added for not guessing
// // //       } else {
// // //         // Calculate the time taken as 10 - remaining time
// // //         adjustedTime = 10 - timer;
// // //       }

// // //       // Add the result for the current round
// // //       setResults((prev) => [
// // //         ...prev,
// // //         { name: selectedName, word: words[currentIndex], time: adjustedTime },
// // //       ]);

// // //       setActualWord(words[currentIndex]);
// // //       setShowActualWord(true);

// // //       if (currentIndex + 1 >= words.length) {
// // //         setGameOver(true);
// // //       }
// // //     }
// // //   };

// // //   const handleNext = () => {
// // //     if (currentIndex + 1 < words.length) {
// // //       setCurrentIndex((prev) => prev + 1);
// // //       setCurrentWord(jumbleWord(words[currentIndex + 1]));
// // //       setTimer(10);
// // //       setGameState(true);
// // //       setShowActualWord(false);
// // //     } else {
// // //       setGameOver(true);
// // //     }
// // //   };

// // //   const handleNameSelection = (name: string) => {
// // //     if (selectedNames.includes(name)) {
// // //       setSelectedNames(selectedNames.filter((n) => n !== name));
// // //     } else {
// // //       setSelectedNames([...selectedNames, name]);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (showActualWord) {
// // //       const timerId = setTimeout(() => {
// // //         setShowActualWord(false);
// // //       }, 5000);

// // //       return () => clearTimeout(timerId);
// // //     }
// // //   }, [showActualWord]);

// // //   const totalTimes = selectedNames.reduce((acc, name) => {
// // //     const totalTime = results
// // //       .filter(result => result.name === name)
// // //       .reduce((sum, result) => sum + result.time, 0);
// // //     acc[name] = totalTime;
// // //     return acc;
// // //   }, {} as Record<string, number>);

// // //   const currentParticipant = selectedNames[currentIndex % selectedNames.length];
// // //   const totalWords = Math.floor(words.length / selectedNames.length);

// // //   const sortedResults = results
// // //     .map(result => ({ ...result, time: result.time })) // Adjust time for display
// // //     .sort((a, b) => a.time - b.time);

// // //   const handleRestart = () => {
// // //     setGameStarted(false);
// // //     setGameOver(false);
// // //     setSelectedNames([]);
// // //     setResults([]);
// // //     setCurrentIndex(0);
// // //     setTimer(10);
// // //     setShowActualWord(false);
// // //     setGameState(false);
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen bg-gray-100">
// // //       <div className="w-1/4 p-6">
// // //         <h2 className="text-2xl mb-6">Select Participants</h2>
// // //         <div className="mb-6">
// // //           {names.map((name, idx) => (
// // //             <label key={idx} className="flex items-center mb-2">
// // //               <input
// // //                 type="checkbox"
// // //                 value={name}
// // //                 onChange={() => handleNameSelection(name)}
// // //                 className="mr-2"
// // //               />
// // //               {name}
// // //             </label>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="flex flex-col items-center justify-center w-3/4 p-6">
// // //         <div className="bg-white rounded shadow-md w-full max-w-lg p-6">
// // //           {selectedNames.length > 0 && (
// // //             <h3 className="text-lg mb-4">
// // //               Each participant will get {totalWords} words to guess, and they will have 10 seconds to guess each word.
// // //             </h3>
// // //           )}

// // //           {/* Only show Participant: label during the game */}
// // //           {!gameOver && (
// // //             <h2 className="text-3xl font-bold mb-4">
// // //               Participant: <span className="text-blue-600">{currentParticipant}</span>
// // //             </h2>
// // //           )}

// // //           {gameState && (
// // //             <div className="mt-4">
// // //               <h3 className="text-xl">
// // //                 Jumbled Word: <div className="font-bold">{currentWord}</div>
// // //               </h3>
// // //               <h4 className="text-lg text-red-500 mt-4">Time: {timer}s</h4>
// // //             </div>
// // //           )}

// // //           {showActualWord && (
// // //             <div className="mt-4">
// // //               <h4 className="text-lg text-green-500">
// // //                 The actual word is: <strong>{actualWord}</strong>
// // //               </h4>
// // //             </div>
// // //           )}

// // //           <div className="mt-8">
// // //             {!gameStarted && (
// // //               <button
// // //                 onClick={handleStart}
// // //                 disabled={selectedNames.length === 0}
// // //                 className={`bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 ${
// // //                   selectedNames.length === 0 ? 'cursor-not-allowed' : 'hover:bg-blue-600'
// // //                 } mb-4`}
// // //               >
// // //                 Start Game
// // //               </button>
// // //             )}

// // //             <div className="flex space-x-4">
// // //               <button
// // //                 onClick={handleNext}
// // //                 className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${gameOver ? 'hidden' : ''}`}
// // //                 disabled={gameOver}
// // //               >
// // //                 Next
// // //               </button>

// // //               {/* Conditionally render the Stop button */}
// // //               {!gameOver && (
// // //                 <button
// // //                   onClick={handleStop}
// // //                   disabled={timer === 0}
// // //                   className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
// // //                     timer === 0 ? 'opacity-50 cursor-not-allowed' : ''
// // //                   }`}
// // //                 >
// // //                   Stop
// // //                 </button>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {gameOver && (
// // //             <div className="mt-8">
// // //               <h2 className="text-2xl">Results</h2>
// // //               <table className="min-w-full border-collapse border border-gray-300 mt-4">
// // //                 <thead>
// // //                   <tr>
// // //                     <th className="border border-gray-300 px-4 py-2">Name</th>
// // //                     <th className="border border-gray-300 px-4 py-2">Word</th>
// // //                     <th className="border border-gray-300 px-4 py-2">Time (s)</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {sortedResults.map((result, index) => (
// // //                     <tr key={index}>
// // //                       <td className="border border-gray-300 px-4 py-2">{result.name}</td>
// // //                       <td className="border border-gray-300 px-4 py-2">{result.word}</td>
// // //                       <td className="border border-gray-300 px-4 py-2">{result.time}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //               <button
// // //                 onClick={handleRestart}
// // //                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
// // //               >
// // //                 Restart
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useState, useEffect } from 'react';

// // export default function JumbleGame() {
// //   const [words, setWords] = useState<string[]>([]);
// //   const [names, setNames] = useState<string[]>([]);
// //   const [selectedNames, setSelectedNames] = useState<string[]>([]);
// //   const [currentWord, setCurrentWord] = useState('');
// //   const [actualWord, setActualWord] = useState('');
// //   const [timer, setTimer] = useState(10);
// //   const [gameState, setGameState] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [results, setResults] = useState<{ name: string; word: string; time: number }[]>([]);
// //   const [showActualWord, setShowActualWord] = useState(false);
// //   const [gameOver, setGameOver] = useState(false);
// //   const [gameStarted, setGameStarted] = useState(false);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const wordsRes = await fetch('/words.json');
// //       const namesRes = await fetch('/names.json');
// //       const wordsData = await wordsRes.json();
// //       const namesData = await namesRes.json();
// //       setWords(wordsData.words);
// //       setNames(namesData.names);
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     if (gameState && timer > 0) {
// //       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
// //       return () => clearInterval(interval);
// //     } else if (timer === 0) {
// //       handleStop(); // Automatically stop the game when timer hits zero
// //     }
// //   }, [timer, gameState]);

// //   const jumbleWord = (word: string) => {
// //     return word.split('').sort(() => Math.random() - 0.5).join('');
// //   };

// //   const handleStart = () => {
// //     setGameState(true);
// //     setGameStarted(true);
// //     setTimer(10);
// //     setCurrentIndex(0);
// //     setActualWord('');
// //     setResults([]);
// //     setShowActualWord(false);
// //     setGameOver(false);

// //     if (selectedNames.length > 0 && words.length > 0) {
// //       setCurrentWord(jumbleWord(words[0]));
// //     }
// //   };

// //   const handleStop = () => {
// //     if (gameState) {
// //       setGameState(false);
// //       const selectedName = selectedNames[currentIndex % selectedNames.length];
// //       let adjustedTime;

// //       // If the timer is zero, that means the user failed to guess
// //       if (timer === 0) {
// //         adjustedTime = 10; // Penalty time added for not guessing
// //       } else {
// //         // Calculate the time taken as 10 - remaining time
// //         adjustedTime = 10 - timer;
// //       }

// //       // Add the result for the current round
// //       setResults((prev) => [
// //         ...prev,
// //         { name: selectedName, word: words[currentIndex], time: adjustedTime },
// //       ]);

// //       setActualWord(words[currentIndex]);
// //       setShowActualWord(true);

// //       if (currentIndex + 1 >= words.length) {
// //         setGameOver(true);
// //       }
// //     }
// //   };

// //   const handleNext = () => {
// //     if (currentIndex + 1 < words.length) {
// //       setCurrentIndex((prev) => prev + 1);
// //       setCurrentWord(jumbleWord(words[currentIndex + 1]));
// //       setTimer(10);
// //       setGameState(true);
// //       setShowActualWord(false);
// //     } else {
// //       setGameOver(true);
// //     }
// //   };

// //   const handleNameSelection = (name: string) => {
// //     if (selectedNames.includes(name)) {
// //       setSelectedNames(selectedNames.filter((n) => n !== name));
// //     } else {
// //       setSelectedNames([...selectedNames, name]);
// //     }
// //   };

// //   useEffect(() => {
// //     if (showActualWord) {
// //       const timerId = setTimeout(() => {
// //         setShowActualWord(false);
// //       }, 5000);

// //       return () => clearTimeout(timerId);
// //     }
// //   }, [showActualWord]);

// //   const totalTimes = selectedNames.reduce((acc, name) => {
// //     const totalTime = results
// //       .filter(result => result.name === name)
// //       .reduce((sum, result) => sum + result.time, 0);
// //     acc[name] = totalTime;
// //     return acc;
// //   }, {} as Record<string, number>);

// //   const currentParticipant = selectedNames[currentIndex % selectedNames.length];
// //   const totalWords = Math.floor(words.length / selectedNames.length);

// //   const sortedResults = results
// //     .map(result => ({ ...result, time: result.time })) // Adjust time for display
// //     .sort((a, b) => a.time - b.time);

// //   // Create an array of participants with their total times
// //   const totalParticipantsTimes = selectedNames.map(name => ({
// //     name,
// //     totalTime: totalTimes[name] || 0,
// //   }));

// //   // Sort participants by their total time
// //   const sortedParticipants = totalParticipantsTimes.sort((a, b) => a.totalTime - b.totalTime);

// //   const handleRestart = () => {
// //     setGameStarted(false);
// //     setGameOver(false);
// //     setSelectedNames([]);
// //     setResults([]);
// //     setCurrentIndex(0);
// //     setTimer(10);
// //     setShowActualWord(false);
// //     setGameState(false);
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-gray-100">
// //       <div className="w-1/4 p-6">
// //         <h2 className="text-2xl mb-6">Select Participants</h2>
// //         <div className="mb-6">
// //           {names.map((name, idx) => (
// //             <label key={idx} className="flex items-center mb-2">
// //               <input
// //                 type="checkbox"
// //                 value={name}
// //                 onChange={() => handleNameSelection(name)}
// //                 className="mr-2"
// //               />
// //               {name}
// //             </label>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="flex flex-col items-center justify-center w-3/4 p-6">
// //         <div className="bg-white rounded shadow-md w-full max-w-lg p-6">
// //           {selectedNames.length > 0 && (
// //             <h3 className="text-lg mb-4">
// //               Each participant will get {totalWords} words to guess, and they will have 10 seconds to guess each word.
// //             </h3>
// //           )}

// //           {/* Only show Participant: label during the game */}
// //           {!gameOver && (
// //             <h2 className="text-3xl font-bold mb-4">
// //               Participant: <span className="text-blue-600">{currentParticipant}</span>
// //             </h2>
// //           )}

// //           {gameState && (
// //             <div className="mt-4">
// //               <h3 className="text-xl">
// //                 Jumbled Word: <div className="font-bold">{currentWord}</div>
// //               </h3>
// //               <h4 className="text-lg text-red-500 mt-4">Time: {timer}s</h4>
// //             </div>
// //           )}

// //           {showActualWord && (
// //             <div className="mt-4">
// //               <h4 className="text-lg text-green-500">
// //                 The actual word is: <strong>{actualWord}</strong>
// //               </h4>
// //             </div>
// //           )}

// //           <div className="mt-8">
// //             {!gameStarted && (
// //               <button
// //                 onClick={handleStart}
// //                 disabled={selectedNames.length === 0}
// //                 className={`bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 ${
// //                   selectedNames.length === 0 ? 'cursor-not-allowed' : 'hover:bg-blue-600'
// //                 } mb-4`}
// //               >
// //                 Start Game
// //               </button>
// //             )}

// //             <div className="flex space-x-4">
// //               <button
// //                 onClick={handleNext}
// //                 className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${gameOver ? 'hidden' : ''}`}
// //                 disabled={gameOver}
// //               >
// //                 Next
// //               </button>

// //               {/* Conditionally render the Stop button */}
// //               {!gameOver && (
// //                 <button
// //                   onClick={handleStop}
// //                   disabled={timer === 0}
// //                   className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
// //                     timer === 0 ? 'opacity-50 cursor-not-allowed' : ''
// //                   }`}
// //                 >
// //                   Stop
// //                 </button>
// //               )}
// //             </div>
// //           </div>

// //           {gameOver && (
// //             <div className="mt-8">
// //               <h2 className="text-2xl">Results</h2>
// //               <table className="min-w-full border-collapse border border-gray-300 mt-4">
// //                 <thead>
// //                   <tr>
// //                     <th className="border border-gray-300 px-4 py-2">Name</th>
// //                     <th className="border border-gray-300 px-4 py-2">Word</th>
// //                     <th className="border border-gray-300 px-4 py-2">Time (s)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {sortedResults.map((result, index) => (
// //                     <tr key={index}>
// //                       <td className="border border-gray-300 px-4 py-2">{result.name}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{result.word}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{result.time}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //               <button
// //                 onClick={handleRestart}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
// //               >
// //                 Restart
// //               </button>
// //             </div>
// //           )}

// //           {/* New table displaying sorted participants by total time */}
// //           {gameOver && (
// //             <div className="mt-8">
// //               <h2 className="text-2xl">Sorted Participants by Total Time</h2>
// //               <table className="min-w-full border-collapse border border-gray-300 mt-4">
// //                 <thead>
// //                   <tr>
// //                     <th className="border border-gray-300 px-4 py-2">Name</th>
// //                     <th className="border border-gray-300 px-4 py-2">Total Time (s)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {sortedParticipants.map((participant, index) => (
// //                     <tr key={index}>
// //                       <td className="border border-gray-300 px-4 py-2">{participant.name}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{participant.totalTime}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useState, useEffect } from 'react';

// // export default function JumbleGame() {
// //   const [words, setWords] = useState<string[]>([]);
// //   const [names, setNames] = useState<string[]>([]);
// //   const [selectedNames, setSelectedNames] = useState<string[]>([]);
// //   const [currentWord, setCurrentWord] = useState('');
// //   const [actualWord, setActualWord] = useState('');
// //   const [timer, setTimer] = useState(10);
// //   const [gameState, setGameState] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [results, setResults] = useState<{ name: string; word: string; time: number }[]>([]);
// //   const [showActualWord, setShowActualWord] = useState(false);
// //   const [gameOver, setGameOver] = useState(false);
// //   const [gameStarted, setGameStarted] = useState(false);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const wordsRes = await fetch('/words.json');
// //       const namesRes = await fetch('/names.json');
// //       const wordsData = await wordsRes.json();
// //       const namesData = await namesRes.json();
// //       setWords(wordsData.words);
// //       setNames(namesData.names);
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     if (gameState && timer > 0) {
// //       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
// //       return () => clearInterval(interval);
// //     } else if (timer === 0) {
// //       handleStop(); // Automatically stop the game when timer hits zero
// //     }
// //   }, [timer, gameState]);

// //   const jumbleWord = (word: string) => {
// //     return word.split('').sort(() => Math.random() - 0.5).join('');
// //   };

// //   const handleStart = () => {
// //     setGameState(true);
// //     setGameStarted(true);
// //     setTimer(10);
// //     setCurrentIndex(0);
// //     setActualWord('');
// //     setResults([]);
// //     setShowActualWord(false);
// //     setGameOver(false);

// //     if (selectedNames.length > 0 && words.length > 0) {
// //       setCurrentWord(jumbleWord(words[0]));
// //     }
// //   };

// //   const handleStop = () => {
// //     if (gameState) {
// //       setGameState(false);
// //       const selectedName = selectedNames[currentIndex % selectedNames.length];
// //       let adjustedTime;

// //       // If the timer is zero, that means the user failed to guess
// //       if (timer === 0) {
// //         adjustedTime = 10; // Penalty time added for not guessing
// //       } else {
// //         // Calculate the time taken as 10 - remaining time
// //         adjustedTime = 10 - timer;
// //       }

// //       // Add the result for the current round
// //       setResults((prev) => [
// //         ...prev,
// //         { name: selectedName, word: words[currentIndex], time: adjustedTime },
// //       ]);

// //       setActualWord(words[currentIndex]);
// //       setShowActualWord(true);

// //       if (currentIndex + 1 >= words.length) {
// //         setGameOver(true);
// //       }
// //     }
// //   };

// //   const handleNext = () => {
// //     if (currentIndex + 1 < words.length) {
// //       setCurrentIndex((prev) => prev + 1);
// //       setCurrentWord(jumbleWord(words[currentIndex + 1]));
// //       setTimer(10);
// //       setGameState(true);
// //       setShowActualWord(false);
// //     } else {
// //       setGameOver(true);
// //     }
// //   };

// //   const handleNameSelection = (name: string) => {
// //     if (selectedNames.includes(name)) {
// //       setSelectedNames(selectedNames.filter((n) => n !== name));
// //     } else {
// //       setSelectedNames([...selectedNames, name]);
// //     }
// //   };

// //   useEffect(() => {
// //     if (showActualWord) {
// //       const timerId = setTimeout(() => {
// //         setShowActualWord(false);
// //       }, 5000);

// //       return () => clearTimeout(timerId);
// //     }
// //   }, [showActualWord]);

// //   const totalTimes = selectedNames.reduce((acc, name) => {
// //     const totalTime = results
// //       .filter(result => result.name === name)
// //       .reduce((sum, result) => sum + result.time, 0);
// //     acc[name] = totalTime;
// //     return acc;
// //   }, {} as Record<string, number>);

// //   const answeredCounts = selectedNames.reduce((acc, name) => {
// //     const count = results.filter(result => result.name === name).length;
// //     acc[name] = count;
// //     return acc;
// //   }, {} as Record<string, number>);

// //   const currentParticipant = selectedNames[currentIndex % selectedNames.length];
// //   const totalWords = Math.floor(words.length / selectedNames.length);

// //   const sortedResults = results
// //     .map(result => ({ ...result, time: result.time })) // Adjust time for display
// //     .sort((a, b) => a.time - b.time);

// //   // Create an array of participants with their total times and answered counts
// //   const totalParticipantsTimes = selectedNames.map(name => ({
// //     name,
// //     totalTime: totalTimes[name] || 0,
// //     answeredCount: answeredCounts[name] || 0,
// //   }));

// //   // Sort participants by their total time
// //   const sortedParticipants = totalParticipantsTimes.sort((a, b) => a.totalTime - b.totalTime);

// //   const handleRestart = () => {
// //     setGameStarted(false);
// //     setGameOver(false);
// //     setSelectedNames([]);
// //     setResults([]);
// //     setCurrentIndex(0);
// //     setTimer(10);
// //     setShowActualWord(false);
// //     setGameState(false);
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-gray-100">
// //       <div className="w-1/4 p-6">
// //         <h2 className="text-2xl mb-6">Select Participants</h2>
// //         <div className="mb-6">
// //           {names.map((name, idx) => (
// //             <label key={idx} className="flex items-center mb-2">
// //               <input
// //                 type="checkbox"
// //                 value={name}
// //                 onChange={() => handleNameSelection(name)}
// //                 className="mr-2"
// //               />
// //               {name}
// //             </label>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="flex flex-col items-center justify-center w-3/4 p-6">
// //         <div className="bg-white rounded shadow-md h-full max-h-96 w-full max-w-2xl p-6">
// //           {selectedNames.length > 0 && (
// //             <h3 className="text-lg mb-4">
// //               Each participant will get {totalWords} words to guess, and they will have 10 seconds to guess each word.
// //             </h3>
// //           )}

// //           {/* Only show Participant: label during the game */}
// //           {!gameOver && (
// //             <h2 className="text-3xl font-bold mb-4">
// //               Participant: <span className="text-blue-600">{currentParticipant}</span>
// //             </h2>
// //           )}

// //           {gameState && (
// //             <div className="mt-4">
// //               <h3 className="text-xl">
// //                 Jumbled Word: <div className="font-bold">{currentWord}</div>
// //               </h3>
// //               <h4 className="text-lg text-red-500 mt-4">Time: {timer}s</h4>
// //             </div>
// //           )}

// //           {showActualWord && (
// //             <div className="mt-4">
// //               <h4 className="text-lg text-green-500">
// //                 The actual word is: <strong>{actualWord}</strong>
// //               </h4>
// //             </div>
// //           )}

// //           <div className="mt-8">
// //             {!gameStarted && (
// //               <button
// //                 onClick={handleStart}
// //                 disabled={selectedNames.length === 0}
// //                 className={`bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 ${
// //                   selectedNames.length === 0 ? 'cursor-not-allowed' : 'hover:bg-blue-600'
// //                 } mb-4`}
// //               >
// //                 Start Game
// //               </button>
// //             )}

// //             <div className="flex space-x-4">
// //               <button
// //                 onClick={handleNext}
// //                 className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${gameOver ? 'hidden' : ''}`}
// //                 disabled={gameOver}
// //               >
// //                 Next
// //               </button>

// //               {/* Conditionally render the Stop button */}
// //               {!gameOver && (
// //                 <button
// //                   onClick={handleStop}
// //                   disabled={timer === 0}
// //                   className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
// //                     timer === 0 ? 'opacity-50 cursor-not-allowed' : ''
// //                   }`}
// //                 >
// //                   Stop
// //                 </button>
// //               )}
// //             </div>
// //           </div>

// //           {gameOver && (
// //             <div className="mt-8">
// //               <h2 className="text-2xl">Results</h2>
// //               <table className="min-w-full border-collapse border border-gray-300 mt-4">
// //                 <thead>
// //                   <tr>
// //                     <th className="border border-gray-300 px-4 py-2">Name</th>
// //                     <th className="border border-gray-300 px-4 py-2">Word</th>
// //                     <th className="border border-gray-300 px-4 py-2">Time (s)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {sortedResults.map((result, index) => (
// //                     <tr key={index}>
// //                       <td className="border border-gray-300 px-4 py-2">{result.name}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{result.word}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{result.time}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //               <button
// //                 onClick={handleRestart}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
// //               >
// //                 Restart
// //               </button>
// //             </div>
// //           )}

// //           {/* New table displaying sorted participants by total time */}
// //           {gameOver && (
// //             <div className="mt-8">
// //               <h2 className="text-2xl">Sorted Participants by Total Time</h2>
// //               <table className="min-w-full border-collapse border border-gray-300 mt-4">
// //                 <thead>
// //                   <tr>
// //                     <th className="border border-gray-300 px-4 py-2">Name</th>
// //                     <th className="border border-gray-300 px-4 py-2">Total Time took(s)</th>
// //                     <th className="border border-gray-300 px-4 py-2">No:of Questions</th>
// //                     <th className="border border-gray-300 px-4 py-2">Total Time (s)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {sortedParticipants.map((participant, index) => (
// //                     <tr key={index}>
// //                       <td className="border border-gray-300 px-4 py-2">{participant.name}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{participant.totalTime}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{participant.answeredCount}</td>
// //                       <td className="border border-gray-300 px-4 py-2">{participant.answeredCount*10}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';
// import { useState, useEffect } from 'react';
// import LinearProgress from '@mui/material/LinearProgress'; // Import Material UI's progress bar
// import { styled } from '@mui/material/styles';
 
// export default function JumbleGame() {
//   const [words, setWords] = useState<string[]>([]);
//   const [names, setNames] = useState<string[]>([]);
//   const [selectedNames, setSelectedNames] = useState<string[]>([]);
//   const [currentWord, setCurrentWord] = useState('');
//   const [actualWord, setActualWord] = useState('');
//   const [timer, setTimer] = useState(10);
//   const [gameState, setGameState] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [results, setResults] = useState<{ name: string; word: string; time: number }[]>([]);
//   const [showActualWord, setShowActualWord] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [message, setMessage] = useState(''); // New state for the message
//   const [emoji, setEmoji] = useState(''); // New state for the emoji
//   const [showParticipantNames, setShowParticipantNames] = useState(true);
 
 
//   useEffect(() => {
//     const fetchData = async () => {
//       const wordsRes = await fetch('/words.json');
//       const namesRes = await fetch('/names.json');
//       const wordsData = await wordsRes.json();
//       const namesData = await namesRes.json();
//       setWords(wordsData.words);
//       setNames(namesData.names);
//     };
 
//     fetchData();
//   }, []);
 
//   useEffect(() => {
//     if (gameState && timer > 0) {
//       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0) {
//       handleStop(); // Automatically stop the game when timer hits zero
//     }
//   }, [timer, gameState]);
 
//   const jumbleWord = (word: string) => {
//     return word.split('').sort(() => Math.random() - 0.5).join('');
//   };
 
//   const handleStart = () => {
//     setGameState(true);
//     setGameStarted(true);
//     setTimer(10);
//     setCurrentIndex(0);
//     setActualWord('');
//     setResults([]);
//     setShowActualWord(false);
//     setGameOver(false);
//     setMessage(''); // Reset message on start
//     setEmoji(''); // Reset emoji on start
//     setShowParticipantNames(false);
 
//     if (selectedNames.length > 0 && words.length > 0) {
//       setCurrentWord(jumbleWord(words[0]));
//     }
//   };
 
//   const handleStop = () => {
//     if (gameState) {
//       setGameState(false);
//       const selectedName = selectedNames[currentIndex % selectedNames.length];
//       let adjustedTime;
 
//       // If the timer is zero, the participant failed to guess
//       if (timer === 0) {
//         adjustedTime = 10; // Penalty time added for not guessing
//         setMessage('BETTER LUCK NEXT TIME'); // Set failure message
//         setEmoji('😞'); // Set sad emoji
//       } else {
//         // Participant guessed correctly
//         adjustedTime = 10 - timer;
//         setMessage('YOU DID A GREAT JOB!'); // Set success message
//         setEmoji('🎉'); // Set celebratory emoji
//       }
 
//       // Add the result for the current round
//       setResults((prev) => [
//         ...prev,
//         { name: selectedName, word: words[currentIndex], time: adjustedTime },
//       ]);
 
//       setActualWord(words[currentIndex]);
//       setShowActualWord(true);
 
//       if (currentIndex + 1 >= words.length) {
//         setGameOver(true);
//         setMessage('');
//         setEmoji('');
//       }
//     }
//   };
//   const handleNext = () => {
//     if (currentIndex + 1 < words.length) {
//       setCurrentIndex((prev) => prev + 1);
//       setCurrentWord(jumbleWord(words[currentIndex + 1]));
//       setTimer(10);
//       setGameState(true);
//       setShowActualWord(false);
//       setMessage(''); // Reset message on next word
//       setEmoji(''); // Reset emoji on next word
//     } else {
//       setGameOver(true);
//     }
//   };
 
//   const handlePause = () => {
//     setShowParticipantNames(true);
//     setGameState(false);
//   };
//   const handleResume = () => {
//     setShowParticipantNames(false);
//     setGameState(true);
//   };
 
//   const handleNameSelection = (name: string) => {
//     if (selectedNames.includes(name)) {
//       setSelectedNames(selectedNames.filter((n) => n !== name));
//     } else {
//       setSelectedNames([...selectedNames, name]);
//     }
//   };
 
//   const totalTimes = selectedNames.reduce((acc, name) => {
//     const totalTime = results
//       .filter(result => result.name === name)
//       .reduce((sum, result) => sum + result.time, 0);
//     acc[name] = totalTime;
//     return acc;
//   }, {} as Record<string, number>);
 
//   const answeredCounts = selectedNames.reduce((acc, name) => {
//     const count = results.filter(result => result.name === name).length;
//     acc[name] = count;
//     return acc;
//   }, {} as Record<string, number>);
 
//   const currentParticipant = selectedNames[currentIndex % selectedNames.length];
//   const totalWords = Math.floor(words.length / selectedNames.length);
 
//   const sortedResults = results
//     .map(result => ({ ...result, time: result.time })) // Adjust time for display
//     .sort((a, b) => a.time - b.time);
 
//   // Create an array of participants with their total times and answered counts
//   const totalParticipantsTimes = selectedNames.map(name => ({
//     name,
//     totalTime: totalTimes[name] || 0,
//     answeredCount: answeredCounts[name] || 0,
//   }));
 
//   // Sort participants by their total time
//   const sortedParticipants = totalParticipantsTimes.sort((a, b) => a.totalTime - b.totalTime);
 
//   const handleRestart = () => {
//     setGameStarted(false);
//     setGameOver(false);
//     setSelectedNames([]);
//     setResults([]);
//     setCurrentIndex(0);
//     setTimer(10);
//     setShowActualWord(false);
//     setGameState(false);
//     setShowParticipantNames(true);
//   };
 
//   // Styled progress bar component
//   const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 5,
//     [`& .MuiLinearProgress-bar`]: {
//       backgroundColor: timer <= 3 ? '#ff1744' : '#1a90ff', // Red when timer <= 3, blue otherwise
//     },
//   }));
 
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//          <div className="w-1/4 p-6">
//          <h2 className="text-2xl mb-6">Select Participants</h2>
//          <div className="mb-6">
//            {names.map((name, idx) => (
//              <label key={idx} className="flex items-center mb-2">
//                <input
//                  type="checkbox"
//                  value={name}
//                  onChange={() => handleNameSelection(name)}
//                  className="mr-2"
//                />
//                {name}
//              </label>
//            ))}
//          </div>
//        </div>
     
 
//       <div className="flex flex-col items-center justify-center w-full p-6">
//         <div className="flex flex-row items-center justify-center bg-violet-100 rounded shadow-md w-full h-3/4 max-w-lg p-6 text-center">
//         <div>
//           {selectedNames.length > 0 && !gameStarted && (
//             <h3 className="text-lg mb-4">
//               Each participant will get {totalWords} words to guess, and they will have 10 seconds to guess each word.
//             </h3>
//           )}
 
//           {gameStarted && gameState && (
//             <h2 className="text-3xl font-bold mb-4">
//               Participant: <span className="text-blue-600">{currentParticipant}</span>
//             </h2>
//           )}
 
//           {gameState && (
//             <div className="mt-4">
//               <h3 className="text-xl">
//                 Jumbled Word: <span className="font-bold">{currentWord}</span>
//               </h3>
//               <h4 className="text-lg text-red-500 mt-4">Time: {timer}s</h4>
 
//               {/* Add the animated progress bar here */}
//               <CustomLinearProgress variant="determinate" value={(timer / 10) * 100} className="mt-2" />
//             </div>
//           )}
 
//           {/* Display message and emoji */}
//           {message && (
//               <div className="mt-4">
//                 <h2 className={`text-2xl ${timer === 0 ? 'text-red-500' : 'text-green-500'}`}>
//                 <span style={{ fontSize: '3rem' }}>{emoji}</span> {message}
//                 </h2>
//               </div>
//             )}
         
//           {showActualWord && !gameOver && (
//             <div className="mt-4">
//               <h4 className="text-lg text-green-500">
//                 The actual word is: <strong>{actualWord}</strong>
//               </h4>
//               <h2 className='text-blue-500'>Ready for the next...</h2>
//             </div>
//           )}
 
//           <div className="mt-8 text-center">
//             {selectedNames.length === 0 && <h4 className="text-lg text-red-500 mb-4 font-bold">Please select at least one participant</h4>}
//             {!gameStarted && (
//               <button
//                 onClick={handleStart}
//                 disabled={selectedNames.length === 0}
//                 className={`bg-blue-500 text-white px-4 py-2 rounded-md`}
//               >
//                 Start Game
//               </button>
//             )}
 
// {gameStarted && ( <div className="flex justify-center space-x-4">
//               <button
//                 onClick={handleNext}
//                 className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${gameOver ? 'hidden' : ''}`}
//                 disabled={gameOver}
//               >
//                 Next
//               </button>
 
//               {/* Conditionally render the Stop button */}
//               {!gameOver && (
//                 <button
//                   onClick={handleStop}
//                   disabled={timer === 0}
//                   className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
//                     timer === 0 ? 'opacity-50 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   Stop
//                 </button>
//               )}
//             </div>)}
 
//             {/* New table displaying sorted participants by total time */}
//           {gameOver && (
//             <div className="mt-8">
//               <h2 className="text-3xl font-bold"> 🏆🎉 LEADERBOARD 🎉🏆</h2>
//               {/* <h2 className="text-2xl">Sorted Participants by Total Time</h2> */}
//               <table className="min-w-full border-collapse border border-gray-300 mt-4">
//                 <thead>
//                   <tr>
//                     <th className="border border-gray-300 px-4 py-2">Name</th>
//                     <th className="border border-gray-300 px-4 py-2">Total Time taken/Total Time(s)</th>
//                     <th className="border border-gray-300 px-4 py-2">No:of Questions</th>
//                     {/* <th className="border border-gray-300 px-4 py-2">Total Time (s)</th> */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sortedParticipants.map((participant, index) => (
//                     <tr key={index}>
//                       <td className="border border-gray-300 px-4 py-2">{participant.name}</td>
//                       <td className="border border-gray-300 px-4 py-2">{participant.totalTime}/{participant.answeredCount*10}</td>
//                       <td className="border border-gray-300 px-4 py-2">{participant.answeredCount}</td>
//                       {/* <td className="border border-gray-300 px-4 py-2">{participant.answeredCount*10}</td> */}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button
//                 onClick={handleRestart}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
//               >
//                 Restart
//               </button>
//             </div>
//           )}
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }
 



'use client';
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress'; // Import Material UI's progress bar
import { CircularProgress, Box, Typography, styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from 'react-lottie';
import fireWorks from '../lottie/fireWorks.json';
import wrongGuess from '../lottie/wrongGuess.json';
interface CircularProgressWithTimerProps {
  value: number; // Progress value (0-100)
  timer: number; // Time in seconds
  size?: number;
}


// export CircularProgressWithTimer;
export default function JumbleGame() {
  const [words, setWords] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState('');
  const [actualWord, setActualWord] = useState('');
  const [timer, setTimer] = useState(10);
  const [gameState, setGameState] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<{ name: string; word: string; time: number }[]>([]);
  const [showActualWord, setShowActualWord] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState(''); // New state for the message
  const [emoji, setEmoji] = useState(''); // New state for the emoji
  const [messageType, setMessageType] = useState("Correct");
  const [correctAnswers, setCorrectAnswers] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      const wordsRes = await fetch('/words1.json');
      const namesRes = await fetch('/names.json');
      const wordsData = await wordsRes.json();
      const namesData = await namesRes.json();
      setWords(wordsData.words1);
      setNames(namesData.names);
      setSelectedNames(namesData.names);
    };
 
    fetchData();
  }, []);
 
  useEffect(() => {
    if (gameState && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleStop(); // Automatically stop the game when timer hits zero
    }
  }, [timer, gameState]);
 
  const jumbleWord = (word: string) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };
 
  const handleStart = () => {
    setGameState(true);
    setGameStarted(true);
    setTimer(10);
    setCurrentIndex(0);
    setActualWord('');
    setResults([]);
    setCorrectAnswers({});
    setShowActualWord(false);
    setGameOver(false);
    setMessage(''); // Reset message on start
    setEmoji(''); // Reset emoji on start
    // setShowParticipantNames(false);
 
    if (selectedNames.length > 0 && words.length > 0) {
      setCurrentWord(jumbleWord(words[0]));
    }
  };

 
  const handleStop = () => {
    if (gameState) {
      setGameState(false);
      const selectedName = selectedNames[currentIndex % selectedNames.length];
      let adjustedTime;
 
      // If the timer is zero, the participant failed to guess
      if (timer === 0) {
        adjustedTime = 10; // Penalty time added for not guessing
        setMessage(`😞 SORRY "${currentParticipant.toLocaleUpperCase()}", BETTER LUCK NEXT TIME`);
        setMessageType("Wrong") ;// Set failure message
      } else {
        // Participant guessed correctly
        adjustedTime = 10 - timer;
        setMessage(`🎉YOU DID A GREAT JOB "${currentParticipant.toLocaleUpperCase()}" !`); // Set success message
        setMessageType("Correct") ;// Set failure message
        setCorrectAnswers((prev) => ({
          ...prev,
          [selectedName]: (prev[selectedName] || 0) + 1,
        }));
      }
  
      // Add the result for the current round
      setResults((prev) => [
        ...prev,
        { name: selectedName, word: words[currentIndex], time: adjustedTime },
      ]);
 
      setActualWord(words[currentIndex]);
      setShowActualWord(true);
 
      if (currentIndex + 1 >= words.length) {
        setGameOver(true);
        setMessage('');
        setEmoji('');
      }
    }
  };
  const setFireWorks = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: messageType=="Correct" ? fireWorks : wrongGuess,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return (
      <div style={{ position: 'relative', textAlign: 'center', padding: '20px', overflow: 'hidden' }}>
      <Lottie
        options={defaultOptions}
        height={250}
        width={400}
      />
      <h1 style={{
        position: 'absolute',
        top: '50%',        // Position vertically in the center
        left: '50%',       // Position horizontally in the center
        transform: 'translate(-50%, -50%)', // Center the text
        color: 'green',    // Text color
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Optional: add shadow for better visibility
      }}>
        {message}
      </h1>
    </div>
    
    );
  };
  const handleNext = () => {
    if (currentIndex + 1 < words.length) {
      setCurrentIndex((prev) => prev + 1);
      setCurrentWord(jumbleWord(words[currentIndex + 1]));
      setTimer(10);
      setGameState(true);
      setCorrectAnswers({});
      setShowActualWord(false);
      setMessage(''); // Reset message on next word
      setEmoji(''); // Reset emoji on next word
    } else {
      setGameOver(true);
    }
  };
 

 
  const handleNameSelection = (name: string) => {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((n) => n !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };
 
  const totalTimes = selectedNames.reduce((acc, name) => {
    const totalTime = results
      .filter(result => result.name === name)
      .reduce((sum, result) => sum + result.time, 0);
    acc[name] = totalTime;
    return acc;
  }, {} as Record<string, number>);
 
  const questionsCount = selectedNames.reduce((acc, name) => {
    const count = results.filter(result => result.name === name).length;
    acc[name] = count;
    return acc;
  }, {} as Record<string, number>);
 
  const currentParticipant = selectedNames[currentIndex % selectedNames.length];
  const totalWords = Math.floor(words.length / selectedNames.length);
 
  const sortedResults = results
    .map(result => ({ ...result, time: result.time })) // Adjust time for display
    .sort((a, b) => a.time - b.time);
 
  // Create an array of participants with their total times and answered counts
  const totalParticipantsTimes = selectedNames.map(name => ({
    name,
    totalTime: totalTimes[name] || 0,
    questionsCount: questionsCount[name] || 0,
    correctAnswers: correctAnswers[name] || 0,

  }));
 
  // Sort participants by their total time
  const sortedParticipants = totalParticipantsTimes.sort((a, b) => a.totalTime - b.totalTime);
 
  const handleRestart = () => {
    setGameStarted(false);
    setGameOver(false);
    setSelectedNames([]);
    setResults([]);
    setCurrentIndex(0);
    setTimer(10);
    setShowActualWord(false);
    setGameState(false);
   
  };
  const CustomCircularProgress = styled(CircularProgress)<{ timer: number }>(({ theme, timer }) => ({
    position: 'relative',
    '& .MuiCircularProgress-circle': {
      stroke: timer <= 3 ? '#ff1744' : '#22c55e', // Red when timer <= 3, blue otherwise
    },
  }));
  
  const CircularProgressWithTimer: React.FC<CircularProgressWithTimerProps> = ({ value, timer, size=40 }) => {
    return (
      <Box position="relative" display="inline-flex">
        <CustomCircularProgress variant="determinate" value={value} timer={timer} size={size}/>
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Display the timer inside the circular progress */}
          <Typography variant="h6" component="div"  color={timer <= 3 ? '#ff1744' : '#22c55e'}>
            <div className="text-xl">{timer}s</div>
          </Typography>
        </Box>
      </Box>
    );
  };
  

 
  return (
    <div className="flex min-h-screen bg-gray-100 ">
       <div className='m-10 w-1/4' >
       <Accordion defaultExpanded >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Select Participants
        </AccordionSummary>
        <AccordionDetails>
        <div className="mb-6">
           {names.map((name, idx) => (
             <label key={idx} className="flex items-center mb-2">
               <input
                 type="checkbox"
                 value={name}
                 checked={selectedNames.includes(name)}
                 onChange={() => handleNameSelection(name)}
                 className="mr-2"
               />
               {name}
             </label>
           ))}
         </div>
        </AccordionDetails>
       
      </Accordion>
      </div>

      <div className="flex flex-col justify-items-start justify-center  w-full p-6">
        <div className="flex flex-col justify-between bg-white rounded shadow-md w-full  max-w-3xl p-6 text-center">
        <div>
          {selectedNames.length > 0 && !gameStarted && (
            <h3 className="text-lg mb-4">
              Each participant will get {totalWords} words to guess, and they will have 10 seconds to guess each word.
            </h3>
          )}
          {gameStarted && gameState && (
            <div className='flex flex-row justify-between bg-gray-100 rounded shadow-md h-36 p-6 text-start'>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-black-600">{currentParticipant}</span>
            </h2>
            {gameState && (
            <div className=" ">
              <CircularProgressWithTimer value={(timer / 10) * 100} timer={timer} size={100} />
            </div>
          )}
            </div>
            
          )}
 
          <div>
          {gameState && (
            <div className="m-16">
              <h1 className="text-5xl">
               <span className="font-bold">{currentWord}</span>
              </h1>
            </div>
          )}
          </div>
 
          {/* Display message and emoji */}
          {message && (
              <div className="mt-4">
                <h2 className={`text-2xl ${timer === 0 ? 'text-red-500' : 'text-green-500'}`}>
                <span style={{ fontSize: '3rem' }}>{emoji}</span> {setFireWorks()}
                </h2>
              </div>
            )}
         
          {showActualWord && !gameOver && (
            <div className="mt-4">
              <h4 className="text-lg text-green-500">
                The actual word is: <strong className='font-bold text-2xl text-red-600'>{actualWord.toLocaleUpperCase()}</strong>
              </h4>
              <h2 className='text-blue-500'>Ready for the next...</h2>
            </div>
          )}
 
          <div className="mt-8 text-center">
            {!gameStarted && (
              <button
                onClick={handleStart}
                disabled={selectedNames.length === 0}
                className={`bg-blue-500 text-white px-4 py-2 rounded-md`}
              >
                Start Game
              </button>
            )}

{gameStarted && !gameOver &&( <div className="flex justify-center space-x-4 flex-row bg-gray-100 rounded shadow-md h-1/2 p-6 text-start">
              <button
                onClick={handleNext}
                className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${gameOver ? 'hidden' : ''}`}
                disabled={gameOver}
              >
                Next
              </button>
 
              {/* Conditionally render the Stop button */}
              {!gameOver && (
                <button
                  onClick={handleStop}
                  disabled={timer === 0}
                  className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
                    timer === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Stop
                </button>
              )}
            </div>)}
          
 
            {/* New table displaying sorted participants by total time */}
          {gameOver && (
            <div className="mt-8">
              <h2 className="text-3xl font-bold"> 🏆🎉 RESULTS 🎉🏆</h2>
              {/* <h2 className="text-2xl">Sorted Participants by Total Time</h2> */}
              <table className="min-w-full border-collapse border border-gray-300 mt-4">
                <thead>
                  <tr className='bg-gray-100' >
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Total Time taken/Total Time(s)</th>
                    <th className="border border-gray-300 px-4 py-2">No:of Questions</th>
                    <th className="border border-gray-300 px-4 py-2">Correct Answers</th>
                    {/* <th className="border border-gray-300 px-4 py-2">Total Time (s)</th> */}
                  </tr>
                </thead>
                <tbody>
                  {sortedParticipants.map((participant, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{participant.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{participant.totalTime}/{participant.questionsCount*10}</td>
                      <td className="border border-gray-300 px-4 py-2">{participant.questionsCount}</td>
                      <td className="border border-gray-300 px-4 py-2">{participant.correctAnswers}</td>                      {/* <td className="border border-gray-300 px-4 py-2">{participant.answeredCount*10}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={handleRestart}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
              >
                Restart
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}