# Scriptures React Project

[![Read on Substack](https://img.shields.io/badge/Substack-Read%20Article-orange)](https://substack.com/home/post/p-169357406)

A full-stack platform for browsing, searching, and contributing translations of user-preferred books.

Built with React.js, Express.js, and MongoDB, **Scriptures** provides a responsive interface for verse-by-verse navigation, unified search, and user-contributed translations. The project currently integrates Quran.com APIs for accurate translations and metadata, with future versions planned for multi-book support.

---

## Features

* 📖 Read the Quran in an organized way
* 🌐 Access hundreds of translations for each verse
* ✍️ Add your own translation for any verse
* 🔒 User authentication system

---

## Live Demo

https://scriptures-react-project.vercel.app/

---

## Backend Repository

https://github.com/Waheed-Labib/Scriptures_express_server

---

## Tech Stack

* **Frontend:** React.js, Tailwind CSS, Context API, React Router DOM, Axios, React Helmet
* **Backend:** Express.js, MongoDB (Mongoose)
* **Authentication & Security:** JWT, bcrypt
* **Email Services:** Nodemailer
* **Utilities:** dotenv, DOMPurify

---

## Requirements

* Node.js (>= 18)
* npm or yarn
* MongoDB instance (local or cloud)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Waheed-Labib/Scriptures_React_Project.git
   cd Scriptures_React_Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
   
---

## Running the Project

### Frontend (React)

```bash
npm start
```

The app will run at `http://localhost:5173/`.

### Backend (Express)

Clone and set up the backend repo: [Scriptures Express Server](https://github.com/Waheed-Labib/Scriptures_express_server)

```bash
npm run dev
```

---

## Roadmap / Future Versions

1. Add more books
2. Allow users to upload books
3. Provide dev options for book APIs
4. Add discussion panel on each verse

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with detailed information.

---

## Resources & Articles

* [Project Overview on Substack](https://substack.com/home/post/p-169357406)

---

## Acknowledgements

* [Quran.com APIs](https://quran.com/) for translations and metadata
* Open source libraries and contributors
