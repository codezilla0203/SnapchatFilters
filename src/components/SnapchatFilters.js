import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import './SnapchatFilters.css';

const filterCategories = [
  {
    id: 'all',
    name: 'All',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea'
  },
  {
    id: 'faces',
    name: 'Faces',
    icon: '😎',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb'
  },
  {
    id: 'animals',
    name: 'Animals',
    icon: '🐶',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe'
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    icon: '🦄',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    color: '#a8edea'
  },
  {
    id: 'vintage',
    name: 'Vintage',
    icon: '📷',
    gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    color: '#d299c2'
  },
  {
    id: 'neon',
    name: 'Neon',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: '#fa709a'
  },
  {
    id: 'space',
    name: 'Space',
    icon: '🌌',
    gradient: 'linear-gradient(135deg, #3b41c5 0%, #a981bb 50%, #ffc8a9 100%)',
    color: '#3b41c5'
  },
  {
    id: 'nature',
    name: 'Nature',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    color: '#96fbc4'
  },
  {
    id: 'party',
    name: 'Party',
    icon: '🎉',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
    color: '#ff9a9e'
  },
  {
    id: 'food',
    name: 'Food',
    icon: '🍕',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    color: '#ffecd2'
  }
];

// Export categories so other modules (e.g. filtering logic) can reuse them
export const categories = filterCategories;

const VELOCITY_FLICK_THRESHOLD = 800; // px/sec
const OFFSET_SWIPE_THRESHOLD = 80; // px

const SnapchatFilters = ({ activeFilter, onFilterChange }) => {
  const [dragX, setDragX] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const containerRef = useRef(null);
  const dragControls = useDragControls();
  const [announce, setAnnounce] = useState('');

  // Announce selected category for screen readers
  useEffect(() => {
    const active = filterCategories.find(f => f.id === activeFilter);
    if (active) setAnnounce(`Selected ${active.name} category`);
  }, [activeFilter]);

  const moveToIndex = useCallback((nextIndex) => {
    if (nextIndex >= 0 && nextIndex < filterCategories.length) {
      onFilterChange(filterCategories[nextIndex].id);
    }
  }, [onFilterChange]);

  const handleDragEnd = (event, info) => {
    setIsPressed(false);
    const currentIndex = filterCategories.findIndex(filter => filter.id === activeFilter);
    const { offset, velocity } = info;

    // Flick detection using velocity first
    if (velocity.x > VELOCITY_FLICK_THRESHOLD && currentIndex > 0) {
      moveToIndex(currentIndex - 1);
    } else if (velocity.x < -VELOCITY_FLICK_THRESHOLD && currentIndex < filterCategories.length - 1) {
      moveToIndex(currentIndex + 1);
    } else if (offset.x > OFFSET_SWIPE_THRESHOLD && currentIndex > 0) {
      moveToIndex(currentIndex - 1);
    } else if (offset.x < -OFFSET_SWIPE_THRESHOLD && currentIndex < filterCategories.length - 1) {
      moveToIndex(currentIndex + 1);
    }

    // Snap back
    setDragX(0);
  };

  const handleFilterClick = (filterId) => {
    onFilterChange(filterId);
  };

  // Keyboard navigation (arrow keys + Home/End)
  const handleKeyDown = (e) => {
    const currentIndex = filterCategories.findIndex(f => f.id === activeFilter);
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        moveToIndex(currentIndex + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        moveToIndex(currentIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        moveToIndex(0);
        break;
      case 'End':
        e.preventDefault();
        moveToIndex(filterCategories.length - 1);
        break;
      default:
        break;
    }
  };

  const activeIndex = filterCategories.findIndex(filter => filter.id === activeFilter);

  return (
    <div className="snapchat-filters" role="group" aria-label="Category filters">
      <div 
        className="filters-container" 
        ref={containerRef}
        role="listbox"
        aria-activedescendant={`filter-${activeFilter}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <motion.div 
          className="filters-wrapper"
          drag="x"
          dragControls={dragControls}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsPressed(true)}
          onDragEnd={handleDragEnd}
          onDrag={(event, info) => setDragX(info.offset.x)}
          style={{ x: dragX }}
          whileDrag={{ scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          {filterCategories.map((filter, index) => {
            const isActive = filter.id === activeFilter;
            const distance = Math.abs(index - activeIndex);
            const scale = isActive ? 1.2 : Math.max(0.7, 1 - distance * 0.1);
            const opacity = isActive ? 1 : Math.max(0.4, 1 - distance * 0.2);
            
            return (
              <motion.div
                key={filter.id}
                className={`filter-item ${isActive ? 'active' : ''}`}
                onClick={() => handleFilterClick(filter.id)}
                id={`filter-${filter.id}`}
                role="option"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                whileHover={{ scale: scale * 1.1 }}
                whileTap={{ scale: scale * 0.9 }}
                animate={{
                  scale,
                  opacity,
                  y: isActive ? -10 : 0
                }}
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 200
                }}
                style={{
                  background: isActive ? filter.gradient : filter.color,
                }}
              >
                <motion.div 
                  className="filter-icon"
                  animate={{
                    rotate: isActive ? [0, -10, 10, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: isActive ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                >
                  {filter.icon}
                </motion.div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="filter-name"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1 }}
                    >
                      {filter.name}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="active-indicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    />
                  )}
                </AnimatePresence>

                {/* Glow effect */}
                {isActive && (
                  <motion.div
                    className="filter-glow"
                    style={{
                      background: filter.gradient,
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Swipe indicators */}
      <div className="swipe-indicators">
        {activeIndex > 0 && (
          <motion.div
            className="swipe-indicator left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            ← Swipe
          </motion.div>
        )}
        
        {activeIndex < filterCategories.length - 1 && (
          <motion.div
            className="swipe-indicator right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            Swipe →
          </motion.div>
        )}
      </div>
      <div className="sr-only" aria-live="polite">{announce}</div>
    </div>
  );
};

export default SnapchatFilters;