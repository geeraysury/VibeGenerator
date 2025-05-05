const MoodInput = ({ moodEmoji, setMoodEmoji }) => {
    const emojiData = [
      { emoji: '😊', keyword: 'happy' },
      { emoji: '😔', keyword: 'sad' },
      { emoji: '😡', keyword: 'angry' },
      { emoji: '😴', keyword: 'sleepy' },
      { emoji: '😨', keyword: 'anxious' },
      { emoji: '🥳', keyword: 'celebratory' },
      { emoji: '😍', keyword: 'loving' }
    ];
  
    return (
      <div className="overflow-x-auto pb-2">
        <div className="flex justify-center gap-1 min-w-max">
          {emojiData.map((item, index) => (
            <button
              key={index}
              onClick={() => setMoodEmoji(item)}
              className={`
                text-2xl p-2 rounded-lg cursor-pointer bg-transparent 
                transition-all duration-200
                ${moodEmoji?.emoji === item.emoji 
                  ? 'border-2 border-green-500 scale-110 bg-gray-100' 
                  : 'border-none scale-100 hover:scale-105 hover:bg-gray-100'}
              `}
              title={item.keyword}
            >
              {item.emoji}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default MoodInput;