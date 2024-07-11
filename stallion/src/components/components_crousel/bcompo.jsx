import React, { useState } from 'react';


const Bcompo = () => {
  const [activeTab, setActiveTab] = useState('Place to Visit');

  const tabs = [
    'Place to Visit',
    'When to Reach',
    'How to Reach',
    'Why Should Go?',
    'Getting Around',
    'Weather'
  ];

  const tabContent = {
    'Place to Visit': (
      <div className="tab-content">
        <div className="tab-item">
          <h2>Ocean Park</h2>
          <p>Hong Kong is also a destination of many theme parks and Ocean parks is certainly the most exotic amongst all of them...</p>
          <img src="link_to_image1.jpg" alt="Ocean Park" />
        </div>
        <div className="tab-item">
          <h2>Hong Kong Disneyland</h2>
          <p>"For the First Time in Forever," you can immerse yourself fully in the epic world of the beloved "Frozen" films...</p>
          <img src="link_to_image2.jpg" alt="Hong Kong Disneyland" />
        </div>
        <div className="tab-item">
          <h2>Dragon's Back Hike</h2>
          <p>Hong Kong is not just about its skyscrapers and urban dwellings as there are also some natural landscapes to explore...</p>
          <img src="link_to_image3.jpg" alt="Dragon's Back Hike" />
        </div>
      </div>
    ),
    // Add other tabs content here...
  };

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tabs-body">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Bcompo;
