import React from "react";
import { useParams, Link } from "react-router-dom";

const ClubDetails = ({ clubs }) => {
  const { clubName } = useParams();
  const club = clubs.find((club) => club.name === clubName);

  if (!club) {
    return <div>Club not found!</div>;
  }

  return (
    <div className="club-details">
      <h2>{club.name}</h2>
      <p><strong>Leader:</strong> {club.leader}</p>
      <p><strong>Faculty:</strong> {club.faculty}</p>
      <p><strong>Description:</strong> {club.description}</p>
      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default ClubDetails;