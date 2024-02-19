import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import '../styles/CharacterDetailsPage.css'; 

function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track error


  useEffect(() => {
    // Fetch character details based on the provided id parameter
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        // Set character state with fetched data
        setCharacter(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
     
       .catch(error => {
        // Log error if fetching characters data fails
          console.error('Error fetching character details:', error);
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false if there's an error
      });
  }, [id]);

  // Function to render a dot based on character's status
const renderStatusDot = () => {
  let statusClassName = '';

  switch (character.status) {
    case 'Alive':
      statusClassName = 'status-dot-alive';
      break;
    case 'Dead':
      statusClassName = 'status-dot-dead';
      break;
    case 'unknown':
      statusClassName = 'status-dot-unknown';
      break;
    default:
      statusClassName = '';
  }

  return <span className={`status-dot ${statusClassName}`}></span>;
};

  // Render loading spinner if character data is not yet fetched
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  // Render character details once data is fetched
  return (
    <div className="character-card">
     {/* Link to navigate back */}
        <Link to="/" className="go-back-link">Go back</Link> 
      {/* Character image */}
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-details">
        {/* Character name */}
        <h2 className="character-name">{character.name}</h2>
        {/* Character status with rendered dot */}
        <p>Status: {character.status} {renderStatusDot()}</p>
        {/* Character species */}
        <p>Species: {character.species}</p>
      
       
      </div>
    </div>
  );
}

export default CharacterDetailsPage;
