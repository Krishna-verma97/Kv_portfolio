# Personal Portfolio Website

A modern developer portfolio built with React and Tailwind CSS.
The website showcases projects, skills, achievements and provides a working contact form powered by Firebase.

The goal of this project is to present a professional frontend portfolio with smooth UI interactions, responsive design and real backend integration.

---

## Tech Stack

* React.js
* Tailwind CSS
* React Router DOM
* Firebase (Firestore + Contact Form Backend)
* EmailJS
* Vercel Deployment

---

## Features

### UI & Experience

* Fully responsive layout (mobile, tablet, desktop)
* Smooth animations and transitions
* Multi-page routing
* Dark / Light mode
* Interactive project cards
* Animated hero section

### Portfolio Content

* About section
* Skills / Tech stack timeline
* Projects showcase
* Achievements section
* Resume download
* Contact form

### Backend Integration

* Contact form connected to Firebase Firestore
* Email sending using EmailJS
* Form validation and error handling

---

## Project Structure

```
src
 ├── components
 ├── pages
 ├── assets
 ├── firebase
 ├── App.jsx
 └── main.jsx
```

---

## Setup Instructions

### 1. Clone repository

```
git clone <repo-url>
cd portfolio
```

### 2. Install dependencies

```
npm install
```

### 3. Add environment variables

Create `.env` file:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

### 4. Run locally

```
npm run dev
```

---

## Deployment

This project is deployed using Vercel.

Build command:

```
npm run build
```

---

## Purpose

This portfolio demonstrates:

* Modern frontend development using React
* Responsive UI design with Tailwind CSS
* Integration with real backend services
* Component-based architecture
* Clean UI/UX practices

---

## License

This project is for personal portfolio use.
