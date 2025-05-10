
# 🎬 OTT Platform

A full-fledged OTT (Over-The-Top) streaming platform built using **Next.js** and **React.js** for the frontend and **Node.js** for the backend. The platform integrates with the **TMDB API** to provide movie data like trailers, descriptions, ratings, and more.

## 🚀 Features

- Browse trending and popular movies
- Watch trailers and stream full movies
- View detailed movie descriptions and ratings
- Responsive UI using modern web technologies
- Backend API with Node.js for user and content management

## 🛠 Tech Stack

- **Frontend**: Next.js, React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **API**: TMDB (The Movie Database)
- **Authentication**: JWT-based auth (if implemented)
- **Database**: MongoDB (optional/if included)

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/d23it162/OTT-platform.git
   cd OTT-platform
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Run the app**
   - Start the backend:
     ```bash
     npm start
     ```
   - Start the frontend:
     ```bash
     cd ../client
     npm run dev
     ```

## 🌐 API Reference

- Uses [TMDB API](https://www.themoviedb.org/documentation/api) to fetch movie and TV show data.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
