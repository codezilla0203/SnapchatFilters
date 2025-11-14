import React, { useState } from 'react';
import SnapchatFilters from './components/SnapchatFilters';
import ContentArea from './components/ContentArea';
import './styles/App.css';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="app">
      {/* Header */}
      <div className="app-header">
        <div className="header-content">
          <h1>📸 Snapchat Filters</h1>
          <p>Swipe through categories</p>
        </div>
      </div>

      {/* Main Content Area */}
      <ContentArea activeFilter={activeFilter} />

      {/* Snapchat-Style Filters */}
      <SnapchatFilters 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Bottom Info */}
      <div className="app-footer">
        <div className="footer-content">
          <p>Swipe left/right on filters • Tap to select</p>
        </div>
      </div>
    </div>
  );
};

export default App;