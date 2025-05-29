
# ⚽ Soccer Live Match App

A full-stack web application that shows **live soccer match updates** using the [API-SPORTS Football API](https://www.api-football.com/). Built using **React** (frontend) and **Express.js** (backend), it offers real-time match data, smooth UI, and social links.

---

## 🔧 Tech Stack

### Frontend
- **React.js** (with Hooks)
- **React Icons**
- **CSS** (custom styling)

### Backend
- **Node.js**
- **Express.js**
- **Axios**
- **CORS**

---

## 📁 Project Structure

```
soccer-live-app/
├── backend/
│   ├── server.js         # Express API server
│   └── .env              # API key (not committed)
├── frontend/
│   ├── src/
│   │   ├── components/   # Footer, Loader
│   │   ├── pages/        # Matches page
│   │   ├── App.js        # Root component
│   │   └── *.css         # Styling
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/soccer-live-app.git
cd soccer-live-app
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

#### Create `.env` file in `backend/`:
```
API_KEY=your_rapidapi_key_here
```

#### Start Backend
```bash
node server.js
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

The frontend will run at `http://localhost:3000` and fetch data from the backend at `http://localhost:5000`.

---

## 💡 Features

- ✅ Live match data from top soccer leagues
- ✅ Modern, responsive UI
- ✅ Loader animation while data fetches
- ✅ “No Live Matches” fallback message
- ✅ Developer footer with social icons and email

---

## 🔒 API Key Handling

- Your **RapidAPI key** is stored in `.env` and accessed via `process.env.API_KEY` in the backend.
- **Do NOT** commit `.env` to version control.

---

## 📸 Screenshots

> You can add screenshots or a short demo video/gif here.

---

## 👨‍💻 Developer

**Tripurari Kumar**  
📧 [tripurarikumar18feb@gmail.com](mailto:tripurarikumar18feb@gmail.com)  
🔗 [GitHub](https://github.com/tripurari2004) | [LinkedIn](https://linkedin.com/in/yourprofile)

---

## 📜 License

This project is for educational and personal use only. Please follow API usage terms provided by [API-SPORTS](https://www.api-football.com/).
