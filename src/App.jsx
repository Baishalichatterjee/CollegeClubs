import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ClubCard from "./components/ClubCard";
import ClubDetails from "./components/ClubDetails";
import StudentForm from "./components/StudentForm";
import AdminDashboard from "./components/AdminDashboard";
import EventsPage from "./components/EventsPage";
import "./styles.css";

const clubs = [
  {
    name: "Coding Club",
    leader: "John Doe",
    faculty: "Prof. Smith",
    description: "A club for coding enthusiasts to learn and grow.",
  },
  {
    name: "Singing Club",
    leader: "Alice Johnson",
    faculty: "Prof. Richards",
    description: "For music lovers and aspiring singers. Join us to perform and improve your vocal skills.",
  },
  {
    name: "Dancing Club",
    leader: "James Brown",
    faculty: "Prof. Thompson",
    description: "A group for dance lovers. Whether you're into hip hop, ballet, or contemporary, there's a place for you here.",
  },
  {
    name: "Public Speaking Club",
    leader: "Sarah Lee",
    faculty: "Prof. Williams",
    description: "Improve your public speaking skills and gain confidence while speaking in front of others.",
  },
  {
    name: "Social Work Club",
    leader: "David Harris",
    faculty: "Prof. Wilson",
    description: "For students interested in social service and making a positive impact on society.",
  },
  {
    name: "Mathematics Club",
    leader: "Emily Clark",
    faculty: "Prof. Davis",
    description: "A place for math enthusiasts to solve problems and engage in mathematical discussions.",
  },
  {
    name: "Art and Design Club",
    leader: "Sophia Green",
    faculty: "Prof. Lewis",
    description: "For creative minds who are passionate about art and design. Explore new techniques and showcase your work.",
  },
];

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/clubs" className="nav-link">Clubs</Link>
        <Link to="/events" className="nav-link">Events</Link>
        <Link to="/admin" className="nav-link">Admin Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubs" element={<ClubCard clubs={clubs} />} />
        <Route path="/club/:clubName" element={<ClubDetails clubs={clubs} />} />
        <Route path="/join" element={<StudentForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
};

export default App;