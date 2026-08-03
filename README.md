# 🚀 CVSense

> **AI-powered Interview Preparation Platform** that analyzes job descriptions and resumes to generate personalized interview strategies, identify skill gaps, technical & behavioral interview questions, and a structured preparation roadmap.

<p align="center">
  <img src="./assets/home.png" alt="CVSense Banner" width="100%">
</p>

<p align="center">
  <a href="https://cv-sense.vercel.app">
    <img src="https://img.shields.io/badge/Live-Demo-ff2d75?style=for-the-badge&logo=vercel&logoColor=white">
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/mkcodedev/CVSense?style=for-the-badge">
  <img src="https://img.shields.io/github/forks/mkcodedev/CVSense?style=for-the-badge">
</p>

---

## 📖 About

**CVSense** is an AI-powered interview preparation platform designed to help job seekers prepare efficiently for interviews.

Instead of spending hours figuring out what to study, users simply upload their resume and paste a job description. CVSense analyzes both and generates a personalized interview preparation strategy tailored to the target role.

The platform identifies missing skills, estimates profile compatibility, generates interview questions, and creates a day-wise learning roadmap to maximize interview success.

---

# ✨ Features

- 🤖 AI-powered Resume & Job Description Analysis
- 📄 Resume Upload (PDF/DOCX)
- 🎯 Job Description Matching
- 📊 Match Score Calculation
- 📉 Skill Gap Detection
- 💡 Personalized Interview Strategy
- 🧠 Technical Interview Questions
- 💬 Behavioral Interview Questions
- 🗓️ Day-wise Preparation Roadmap
- 📥 Resume Download
- 🌙 Modern Responsive Dark UI

---

# 🖥️ Screenshots

## Home

<img src="./assets/home.png" width="100%">

Users can:

- Paste a Job Description
- Upload Resume
- Add Self Description
- Generate AI Interview Strategy

---

## Preparation Roadmap

<img src="./assets/roadmap.png" width="100%">

CVSense creates a personalized roadmap that includes:

- Daily learning goals
- Recommended technologies
- Backend & frontend concepts
- Mock interview preparation
- Deployment topics

---

## Behavioral Questions

<img src="./assets/behavioral.png" width="100%">

AI generates personalized behavioral interview questions based on:

- Resume
- Projects
- Experience
- Target Job Description

---

# ⚙️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- React Router
- Axios

## Backend

- Node.js
- Express.js

## AI

- Google Gemini API / LLM

## Database

- MongoDB

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```
CVSense
│
├── Frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── config
│   └── server.js
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/mkcodedev/CVSense.git

cd CVSense
```

---

## Install Frontend

```bash
cd Frontend

npm install

npm run dev
```

---

## Install Backend

```bash
cd Backend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **Backend** directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

GEMINI_API_KEY=your_gemini_api_key

JWT_SECRET=your_secret
```

---

# 📊 Workflow

```text
Resume
      \
       \
        ---> AI Analysis -----> Match Score
       /
Job Description

                |
                |
                V

      Skill Gap Detection

                |
                V

 Technical Questions
 Behavioral Questions

                |
                V

     Personalized Roadmap
```

---

# 🎯 Use Cases

- Software Engineer Interviews
- Frontend Developer Preparation
- Backend Developer Preparation
- Full Stack Developer Interviews
- Internship Preparation
- Campus Placements
- Career Switching

---

# 🌟 Future Improvements

- Mock Interview with Voice AI
- ATS Resume Score
- Coding Interview Practice
- AI Resume Builder
- Company-specific Interview Questions
- Interview Performance Analytics
- Progress Tracking Dashboard
- Multiple Resume Management

---

# 🌐 Live Demo

👉 **https://cv-sense.vercel.app**

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Mohit Kumar**

GitHub: https://github.com/mkcodedev

---

# ⭐ Support

If you found this project helpful, please consider giving it a **Star ⭐** on GitHub.

It helps the project grow and motivates further development.

---

## 📜 License

This project is licensed under the **MIT License**.

---

<p align="center">
Made with ❤️ by <b>mkcodedev</b>
</p>