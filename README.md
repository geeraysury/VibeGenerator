Vibe Generator is a web application that recommends a Spotify song and an aesthetic image based on the user's mood.

The app is built with React on the frontend and AWS Lambda on the backend. It uses APIs from Spotify and Unsplash to fetch personalized content.

## Features

- Choose your mood using emojis and filters (time of day and vibe)
- Get a matching Spotify track and aesthetic image
- Clean and responsive interface

## Technologies Used

- React
- Tailwind CSS
- AWS Lambda (Function URL)
- Spotify API
- Unsplash API

## How to Run the Website: 
1. Clone the repository:
git clone https://github.com/geeraysury/VibeGenerator.git
cd VibeGenerator

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

4. Then open `http://localhost:3000` in your browser.

## Backend (AWS Lambda)

The backend is deployed via AWS Lambda and handles:
- Fetching Spotify track and Unsplash image
- (Optional) Logging mood history to DynamoDB

## To-Do

- Add DynamoDB integration for mood history
- Add user streak tracking and stats
