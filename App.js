import React, { useState } from 'react';
import './App.css';

const tracks = [
  { id: 1, name: "AI Ethics", color: "#ff00ff" },
  { id: 2, name: "Machine Learning", color: "#00ffff" },
  { id: 3, name: "AI in Healthcare", color: "#ffff00" },
  { id: 4, name: "Natural Language Processing", color: "#00ff00" }
];

function App() {
  const [activeTrack, setActiveTrack] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTrackClick = (track) => {
    setActiveTrack(track);
    setShowModal(true);
  };

  return (
    <div className="App">
      <header>
        <h1>Science For AI</h1>
        <p>July 31st at UCSF</p>
      </header>

      <main>
        <section className="keynote">
          <h2>Keynote</h2>
          <p>Dr. Jane Doe: "The Future of AI in Scientific Research"</p>
        </section>

        <section className="tracks">
          <h2>Workshop Tracks</h2>
          <div className="track-list">
            {tracks.map(track => (
              <button
                key={track.id}
                className="track-button"
                style={{ backgroundColor: track.color }}
                onClick={() => handleTrackClick(track)}
              >
                {track.name}
              </button>
            ))}
          </div>
        </section>

        <section className="info">
          <h2>Conference Information</h2>
          <p>Date: July 31st, 2024</p>
          <p>Venue: UCSF Campus</p>
          <p>Food: Vegan options available</p>
        </section>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{activeTrack.name}</h2>
            <p>Details about the {activeTrack.name} track would go here.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
