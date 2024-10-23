# SharedReadingOnline
Online version of the shared tool deployed on Glitch node server. updated design and functionality and certain code lines changed to configure it for Glitches server

# Shared Reading Tool

## Overview
The Shared Reading Tool is a web application designed to facilitate synchronized reading sessions. It allows users to upload a PDF, navigate through its pages, and share notes in real-time. The tool is optimized for both desktop and mobile devices, ensuring a seamless experience across different platforms.

## Features
- **PDF Upload and Viewing**: Users can upload a PDF file and view it directly within the application.
- **Page Navigation**: Users can navigate through the PDF pages using next and previous buttons.
- **Progress Bar**: A visual progress bar shows the user's current position in the PDF.
- **Notes Section**: A dedicated section for users to take and share notes.
- **Zoom Controls (Mobile Only)**: Users on mobile devices can zoom in and out of the PDF for better readability.
- **Real-Time Sync**: Page turns and notes are synchronized in real-time between users.
- **WebSocket Integration**: Ensures seamless real-time communication for synchronization.

## How It Was Made
The Shared Reading Tool was created using HTML, CSS, and JavaScript. It utilizes the PDF.js library for rendering PDFs in the browser and WebSockets for real-time communication. The user interface is designed to be intuitive and responsive, providing an optimized experience on both desktop and mobile devices.

## Constraints
- **Zoom Controls**: Zoom functionality is limited to mobile devices only.
- **PDF Size**: Performance may vary with very large PDF files.
- **Internet Dependency**: Requires a stable internet connection for real-time synchronization.
- **Browser Compatibility**: Best viewed on modern browsers. Older browsers may have compatibility issues.

## Getting Started
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
2.Install dependencies (if using a backend server):
npm install

3.Run the application:
npm start

4.Open the application in your browser:
http://localhost:3000

Usage
Upload a PDF: Click the file input to select and upload your PDF.

Navigate Pages: Use the "Previous Page" and "Next Page" buttons to navigate through the PDF.

Zoom (Mobile): Use the zoom buttons to zoom in and out of the PDF.

Take Notes: Use the notes section to write and share notes with others.

Sync: Changes are synchronized in real-time across connected users.

Contributing
Feel free to contribute by opening issues and submitting pull requests. Contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Made by Maalik
