import React from "react";

const MoodResult = ({ result }) => {
  if (!result?.track) return null;

  return (
    <div className="mt-8 text-center max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold text-green-600 mb-6">Your Perfect Soundtrack</h2>

      {result.track.id && (
        <div className="mb-6">
          <iframe
            title="Spotify Player"
            src={`https://open.spotify.com/embed/track/${result.track.id}`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-xl shadow-lg"
          ></iframe>

          {/*preview audio */}
          {result.track.preview && (
            <div className="mt-4">
              <p className="text-green-600 font-semibold mb-2">30s Preview:</p>
              <audio 
                controls 
                className="w-full rounded-lg focus:outline-none"
              >
                <source src={result.track.preview} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}

      {/* track info */}
      <div className="bg-gray-800 p-4 rounded-xl text-white">
        <h3 className="text-xl font-semibold mb-1">🎵 {result.track.name}</h3>
        <p className="mb-3">by {result.track.artist}</p>
        <a
          href={result.track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-5 py-2 bg-green-500 text-white rounded-full 
            font-bold no-underline mt-3 hover:bg-green-600 transition-colors
          "
        >
          Open in Spotify
        </a>
      </div>
    </div>
  );
};

export default MoodResult;