import React from "react";

const MoodFilters = ({moodFilter, setMoodFilter}) => {
  const handleTimeChange = (e) => {
    setMoodFilter({
      ...moodFilter,
      timeOfDay: e.target.value,
    });
  };

  const handleVibeChange = (e) => {
    setMoodFilter({
      ...moodFilter,
      vibe: e.target.value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-xs mx-auto">
      <h3 className="text-md font-semibold mb-3 text-gray-800">Required Filters:</h3>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">Time of Day:</label>
        <select 
          value={moodFilter.timeOfDay} 
          onChange={handleTimeChange}
          className="
            w-48 p-1.5 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm
          "
        >
          <option value="">Select</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="night">Night</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Vibe:</label>
        <select 
          value={moodFilter.vibe} 
          onChange={handleVibeChange}
          className="
            w-48 p-1.5 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm
          "
        >
          <option value="">Select</option>
          <option value="chill">Calm</option>
          <option value="energized">Energized</option>
          <option value="sad">Vibrant</option>
          <option value="romantic">Instrumental</option>
        </select>
      </div>
    </div>
  );
};

export default MoodFilters;