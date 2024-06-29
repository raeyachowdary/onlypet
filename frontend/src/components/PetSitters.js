import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetSitters = () => {
  const [petSitters, setPetSitters] = useState([]);

  useEffect(() => {
    const fetchPetSitters = async () => {
      const res = await axios.get('http://localhost:5000/api/petSitters');
      setPetSitters(res.data);
    };

    fetchPetSitters();
  }, []);

  const bookSitter = async (id) => {
    try {
      await axios.post('http://localhost:5000/api/petSitters/book', { id });
      setPetSitters(petSitters.map(sitter => sitter._id === id ? { ...sitter, available: false } : sitter));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div id="pet-sitters">
      <h2>Available Pet Sitters</h2>
      <div className="sitter-grid">
        {petSitters.map(sitter => (
          <div className="sitter" key={sitter._id}>
            <h3>{sitter.name}</h3>
            <p>Age: {sitter.age}</p>
            <p>Experience: {sitter.experience}</p>
            <button onClick={() => bookSitter(sitter._id)} disabled={!sitter.available}>
              {sitter.available ? 'Book Appointment' : 'Not Available'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetSitters;
