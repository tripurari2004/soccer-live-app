import React, { useEffect, useState } from "react";
import "./Matches.css";
import Loader from "../components/Loader";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMatches = () => {
    setLoading(true);
    setError(false);

    fetch("http://localhost:5000/api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching matches:", err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="App">
      <div className="content-wrapper">
        <h1>Live Soccer Matches</h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="no-matches">
            <p>Failed to load matches. Please try again.</p>
            <button className="refresh-btn" onClick={fetchMatches}>Refresh</button>
          </div>
        ) : matches.length === 0 ? (
          <div className="no-matches">
            <p>No live match currently</p>
          </div>
        ) : (
          <div className="match-list">
            {matches.map((match, index) => (
              <div key={index} className="match-card">
                <div className="league-info">
                  {match.flag && (
                    <img src={match.flag} alt="flag" className="flag" />
                  )}
                  <span>
                    {match.league} - {match.country}
                  </span>
                </div>

                <div className="teams">
                  <div className="team">
                    <img src={match.homeLogo} alt="home logo" />
                    <span>{match.homeTeam}</span>
                  </div>

                  <div className="score">
                    <span>
                      {match.score.home} - {match.score.away}
                    </span>
                    <small>{new Date(match.date).toLocaleString()}</small>
                  </div>

                  <div className="team">
                    <img src={match.awayLogo} alt="away logo" />
                    <span>{match.awayTeam}</span>
                  </div>
                </div>

                <p className="status">Status: {match.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Matches;
