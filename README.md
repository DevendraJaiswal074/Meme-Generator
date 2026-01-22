# 😂 Live Meme Generator

A clean, responsive **Live Meme Generator** built using **HTML, CSS, and Vanilla JavaScript**.  
It fetches fresh memes from a public API and allows users to **browse**, **download**, and **share memes** seamlessly on both mobile and desktop devices.

🔗 **Live Demo:**  
https://meme-generator-mu-beige.vercel.app

---

## ✨ Features

- 🎲 Fetch random memes in real-time
- ⏭️ Next Meme button
- 📥 Download memes directly to device
- 📤 Share memes via native share / WhatsApp
- 🔔 Toast notifications for user actions
- 📱 Fully responsive (Android, Linux, Desktop)
- ⚡ Fast & lightweight (no frameworks)

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Meme API** – https://meme-api.com
- **Vercel** – Deployment

---

## 📂 Project Structure

├── index.html

├── style.css

├── script.js

├── Assets/

│ └── icons / favicon

└── README.md


---

## ⚙️ How It Works

1. Fetches a random meme using the Meme API
2. Displays:
   - Meme title
   - Meme image
   - Author name
3. Buttons allow users to:
   - Load next meme
   - Download meme locally
   - Share meme via supported apps
4. Toast notifications confirm successful actions

---

## 📥 Download Feature

- Uses **Blob & Object URLs**
- Prevents opening meme in a new browser tab
- Works smoothly on:
  - Android
  - Linux
  - Windows
  - macOS

---

## 📤 Share Feature

- Uses `navigator.share()` when supported
- Fallback sharing via WhatsApp for unsupported browsers

---

## 🚀 Deployment

The project is deployed using **Vercel** and optimized for performance.

---
<img width="575" height="769" alt="brave_screenshot_meme-generator-mu-beige vercel app" src="https://github.com/user-attachments/assets/e7a04eaf-c4ac-447a-a981-778da51d5a41" />       <img width="437" height="411" alt="Screenshot 2026-01-23 010827" src="https://github.com/user-attachments/assets/142b2360-6a0b-4ad8-ae33-1384fbbad127" />

---
