import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/CharacterListPage.css'; 

function CharacterListPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track error

  useEffect(() => {
    // Fetching characters data from the API
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        // Set characters state with fetched data
        setCharacters(response.data.results);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        // Log error if fetching characters data fails
        console.error('Error fetching characters:', error);
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      {error && <div className="error-message">Error: Failed to fetch characters data</div>}
      {loading ? ( // Render loader if characters data is being fetched
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <ul className="character-list">
          {characters?.map((character, index) => (
            <li key={character.id} className="character-item">
              <div className="character-card">
                {/* Link to navigate to character details page */}
                <Link to={`/character/${character.id}`} className="character-link">
                  {/* Character image */}
                  <img src={character.image} alt={character.name} className="character-image" />
                </Link>
                {/* Character name */}
                <span className="character-name">{character.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CharacterListPage;
