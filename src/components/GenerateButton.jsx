import React from "react";
import axios from "axios";

const GenerateButton = ({ moodEmoji, moodFilter, setResult }) => {
  const handleClick = async () => {
    if (!moodEmoji || !moodFilter.timeOfDay || !moodFilter.vibe) {
      alert("Please select an emoji, time of day, and vibe before generating your vibe.");
      return;
    }

    try {
      const response = await axios.post(
        "https://45uo7uyojuesbsidpffrez3z4y0tvwnb.lambda-url.us-east-2.on.aws/",
        { 
          mood: `${moodEmoji.keyword} ${moodFilter.timeOfDay} ${moodFilter.vibe}`.trim() 
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: false
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleClick}
        className="
          px-6 py-3 text-lg rounded-lg cursor-pointer 
          bg-green-500 text-white border-none 
          transition-all duration-300 hover:bg-green-600 hover:scale-102
          active:scale-98 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
          shadow-md hover:shadow-lg
        "
      >
        Generate Your Vibe
      </button>
    </div>
  );
};

export default GenerateButton;