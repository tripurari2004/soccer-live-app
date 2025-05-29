require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/matches", async (req, res) => {
  try {
    const response = await axios.get(
      "https://v3.football.api-sports.io/fixtures?live=all",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": process.env.API_KEY, // Use env variable here
        },
      }
    );

    const matches = response.data.response.map((match) => ({
      date: match.fixture.date,
      homeTeam: match.teams.home.name,
      homeLogo: match.teams.home.logo,
      awayTeam: match.teams.away.name,
      awayLogo: match.teams.away.logo,
      status: match.fixture.status.long,
      league: match.league.name,
      country: match.league.country,
      flag: match.league.flag,
      score: {
        home: match.goals.home,
        away: match.goals.away,
      },
    }));

    res.json(matches);
  } catch (err) {
    console.error("Failed to fetch data:", err.message);
    res.status(500).json({ error: "Could not fetch match data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
