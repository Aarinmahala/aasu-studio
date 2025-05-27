# AaSU STUDIO Website

A modern, responsive website for AaSU STUDIO, a photography and videography business.

## How to Run the Website

There are two ways to view the website:

### Option 1: Open HTML Files Directly

1. Navigate to the `aasu-studio-website` folder
2. Double-click on `index.html` to open it in your default browser

### Option 2: Using a Local Server (Recommended)

If you have Node.js installed:

1. Navigate to the `aasu-studio-website` folder in your terminal
2. Run `node server.js`
3. Open your browser and go to `http://localhost:3000`

If you're on Windows, you can also simply double-click the `start-server.bat` file, which will start the server for you.

## Features

- Responsive design for all devices
- Modern animations and transitions
- Interactive elements
- Single-page application with smooth scrolling

## Technologies Used

- React.js
- JavaScript ES6+
- CSS3
- AOS (Animate On Scroll)
- React Router
- React Intersection Observer
- EmailJS for contact form

## Project Structure

```
aasu-studio-website/
├── index.html        # Main HTML file (standalone)
├── public/           # Public assets (for server mode)
│   └── demo.html     # Demo page for server mode
├── server.js         # Simple Node.js server
├── start-server.bat  # Windows batch file to start server
└── README.md         # This file
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```
npm run build
```

## Brand Guidelines

- Logo: "AaSU STUDIO" with lowercase 'a' and uppercase 'SU' in red (#ff0000)
- Color scheme: Black backgrounds (#000000), white text (#ffffff), red accents (#ff0000)
- Typography: Playfair Display and Inter font families

## License

Copyright © 2024 AaSU STUDIO. All rights reserved. 