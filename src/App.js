import './App.css';
import React, { useState } from "react";
import MoodInput from "./components/MoodInput";
import MoodFilters from "./components/MoodFilters";
import GenerateButton from "./components/GenerateButton";
import MoodResult from "./components/MoodResult";

function App() {
  const [moodEmoji, setMoodEmoji] = useState(null);
  const [moodFilter, setMoodFilter] = useState({
    timeOfDay: "",
    vibe: ""
  });
  const [result, setResult] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      {result?.image && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 z-0"
          style={{ backgroundImage: `url(${result.image})` }}
        ></div>
      )}

      {/*foreground*/}
      <div className="relative z-10 px-5 py-8 max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8 font-serif tracking-tight">
          Vibe Generator
        </h1>
        
        <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-medium text-gray-800 mb-6">
            How are you feeling today?
          </h2>
          
          <div className="mb-6">
            <MoodInput moodEmoji={moodEmoji} setMoodEmoji={setMoodEmoji} />
            {moodEmoji && (
              <p className="text-green-600 font-medium mt-2">
                {moodEmoji.keyword}
              </p>
            )}
          </div>
          
          <MoodFilters moodFilter={moodFilter} setMoodFilter={setMoodFilter} />
          <GenerateButton
            moodEmoji={moodEmoji}
            moodFilter={moodFilter}
            setResult={setResult}
          />
        </div>
        
        <MoodResult result={result} />
      </div>
    </div>
  );
}

export default App;