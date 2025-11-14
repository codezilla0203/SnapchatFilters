import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from './SnapchatFilters';
import './ContentArea.css';

// Sample data items to be filtered by categories
const items = [
  { id: 1, label: '🤓 Nerd Glasses', categories: ['faces'] },
  { id: 2, label: '😍 Heart Eyes', categories: ['faces'] },
  { id: 3, label: '🤡 Clown Nose', categories: ['faces','party'] },
  { id: 4, label: '👑 Royal Crown', categories: ['faces','fantasy'] },
  { id: 5, label: '🐶 Puppy Dog', categories: ['animals'] },
  { id: 6, label: '🐱 Kitty Cat', categories: ['animals'] },
  { id: 7, label: '🐰 Bunny Ears', categories: ['animals','fantasy'] },
  { id: 8, label: '� Fox Face', categories: ['animals'] },
  { id: 9, label: '🦄 Unicorn Horn', categories: ['fantasy'] },
  { id: 10, label: '🧚‍♀️ Fairy Wings', categories: ['fantasy','nature'] },
  { id: 11, label: '🐉 Dragon Breath', categories: ['fantasy'] },
  { id: 12, label: '✨ Sparkle Magic', categories: ['fantasy','party'] },
  { id: 13, label: '📺 Old TV', categories: ['vintage'] },
  { id: 14, label: '📼 VHS Glitch', categories: ['vintage','neon'] },
  { id: 15, label: '📻 Radio Waves', categories: ['vintage'] },
  { id: 16, label: '🎞️ Film Grain', categories: ['vintage'] },
  { id: 17, label: '⚡ Lightning Bolt', categories: ['neon'] },
  { id: 18, label: '🌈 Neon Rainbow', categories: ['neon','party'] },
  { id: 19, label: '🔥 Electric Fire', categories: ['neon'] },
  { id: 20, label: '💎 Glowing Gems', categories: ['neon','fantasy'] },
  { id: 21, label: '🚀 Rocket Ship', categories: ['space'] },
  { id: 22, label: '👽 Alien Face', categories: ['space'] },
  { id: 23, label: '🌟 Shooting Star', categories: ['space','fantasy'] },
  { id: 24, label: '🪐 Planet Rings', categories: ['space'] },
  { id: 25, label: '� Flower Crown', categories: ['nature','faces'] },
  { id: 26, label: '🦋 Butterfly Wings', categories: ['nature','fantasy'] },
  { id: 27, label: '🌱 Growing Plants', categories: ['nature'] },
  { id: 28, label: '☀️ Sun Rays', categories: ['nature'] },
  { id: 29, label: '🎊 Confetti Burst', categories: ['party'] },
  { id: 30, label: '🎈 Balloon Pop', categories: ['party'] },
  { id: 31, label: '🎂 Birthday Cake', categories: ['party','food'] },
  { id: 32, label: '🥳 Party Hat', categories: ['party'] },
  { id: 33, label: '🍕 Pizza Slice', categories: ['food'] },
  { id: 34, label: '🍔 Burger Bite', categories: ['food'] },
  { id: 35, label: '🍦 Ice Cream', categories: ['food'] },
  { id: 36, label: '� Sweet Treats', categories: ['food','party'] }
];

const ContentArea = ({ activeFilter }) => {
  const activeCategory = categories.find(c => c.id === activeFilter) || categories[0];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return items;
    return items.filter(item => item.categories.includes(activeFilter));
  }, [activeFilter]);

  const background = activeCategory.gradient;
  const title = `${activeCategory.icon} ${activeCategory.name} Filters`;
  const description = activeFilter === 'all' ? 'Explore every amazing filter in our collection' : `Showing ${filteredItems.length} ${activeCategory.name.toLowerCase()} filter${filteredItems.length === 1 ? '' : 's'}`;

  return (
    <div className="content-area">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="content-wrapper"
          style={{ background }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="content-header"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h2>{title}</h2>
            <p>{description}</p>
          </motion.div>

          <motion.div 
            className="content-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="content-item"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [-1, 1, -1, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating elements for extra animation */}
          <motion.div
            className="floating-elements"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="floating-dot" />
            <div className="floating-dot" />
            <div className="floating-dot" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContentArea;