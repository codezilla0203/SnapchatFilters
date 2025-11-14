import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContentArea.css';

const contentData = {
  all: {
    title: '✨ All Filters',
    description: 'Explore every amazing filter in our collection',
    items: ['😎 Face filters', '🐶 Animal masks', '🦄 Fantasy effects', '📷 Vintage vibes'],
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  faces: {
    title: '😎 Face Filters',
    description: 'Transform your selfies with cool face effects',
    items: ['🤓 Nerd glasses', '😍 Heart eyes', '🤡 Clown nose', '👑 Royal crown'],
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  animals: {
    title: '🐶 Animal Filters',
    description: 'Become your favorite animal with these cute filters',
    items: ['🐶 Puppy dog', '🐱 Kitty cat', '🐰 Bunny ears', '🦊 Fox face'],
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  fantasy: {
    title: '🦄 Fantasy Filters',
    description: 'Enter a magical world with mystical effects',
    items: ['🦄 Unicorn horn', '🧚‍♀️ Fairy wings', '🐉 Dragon breath', '✨ Sparkle magic'],
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  vintage: {
    title: '📷 Vintage Filters',
    description: 'Classic retro effects for that nostalgic feel',
    items: ['📺 Old TV', '📼 VHS glitch', '📻 Radio waves', '🎞️ Film grain'],
    background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
  },
  neon: {
    title: '⚡ Neon Filters',
    description: 'Electric vibes with glowing neon effects',
    items: ['💥 Lightning bolt', '🌈 Neon rainbow', '🔥 Electric fire', '💎 Glowing gems'],
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  space: {
    title: '🌌 Space Filters',
    description: 'Cosmic adventures await in the galaxy',
    items: ['🚀 Rocket ship', '👽 Alien face', '🌟 Shooting star', '🪐 Planet rings'],
    background: 'linear-gradient(135deg, #3b41c5 0%, #a981bb 50%, #ffc8a9 100%)'
  },
  nature: {
    title: '🌿 Nature Filters',
    description: 'Connect with the beauty of the natural world',
    items: ['🌸 Flower crown', '🦋 Butterfly wings', '🌱 Growing plants', '☀️ Sun rays'],
    background: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)'
  },
  party: {
    title: '🎉 Party Filters',
    description: 'Celebrate every moment with fun party effects',
    items: ['🎊 Confetti burst', '🎈 Balloon pop', '🎂 Birthday cake', '🥳 Party hat'],
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)'
  },
  food: {
    title: '🍕 Food Filters',
    description: 'Delicious effects that will make you hungry',
    items: ['🍕 Pizza slice', '🍔 Burger bite', '🍦 Ice cream', '🎂 Sweet treats'],
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  }
};

const ContentArea = ({ activeFilter }) => {
  const content = contentData[activeFilter] || contentData.all;

  return (
    <div className="content-area">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="content-wrapper"
          style={{ background: content.background }}
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
            <h2>{content.title}</h2>
            <p>{content.description}</p>
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
            {content.items.map((item, index) => (
              <motion.div
                key={index}
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
                <span>{item}</span>
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