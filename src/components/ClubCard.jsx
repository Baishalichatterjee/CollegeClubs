import React from "react";
import { Link } from "react-router-dom";

const ClubCard = ({ clubs }) => {
  return (
    <div className="club-container">
      {/* <h1 className="card-heading">Clubs</h1> */}
      {clubs.map((club) => (
        <div key={club.name} className="club-card">
          <h3>{club.name}</h3>
          <Link to={`/club/${club.name}`}>
            <button className="view-details-btn">View Details</button>
          </Link>
          <Link to="/join">
            <button className="view-details-btn">Join</button>
          </Link>
        </div>
      ))}
      {/* <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link> */}
    </div>
  );
};

export default ClubCard;