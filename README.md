# 📸 Snapchat-Style Swipeable Filters Demo

An interactive React application featuring Snapchat-style swipeable category filters with smooth animations using Framer Motion.

## ✨ Features

- **Snapchat-style swipeable filters**: Horizontal gesture navigation
- **Smooth animations**: Powered by Framer Motion
- **Creative filter categories**: 10 unique categories with custom icons and gradients
- **Mobile-friendly**: Responsive design with touch gesture support
- **Interactive content**: Dynamic content area that changes with filter selection

## 🚀 Quick Start

### 1. Install Dependencies

First, make sure you have Node.js installed, then run:

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## 🎮 How to Use

1. **Swipe horizontally** on the filter bar at the bottom to navigate between categories
2. **Tap** any filter to select it instantly
3. **Watch** the content area transform with smooth animations
4. **Enjoy** the responsive design on mobile devices

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Framer Motion**: Advanced animations and gestures
- **CSS Grid & Flexbox**: Responsive layouts
- **Webpack**: Module bundling and development server
- **Babel**: JavaScript transpilation

## 📱 Filter Categories

1. **✨ All**: Overview of all available filters
2. **😎 Faces**: Face transformation filters
3. **🐶 Animals**: Animal mask filters
4. **🦄 Fantasy**: Magical and mystical effects
5. **📷 Vintage**: Retro and nostalgic filters
6. **⚡ Neon**: Electric and glowing effects
7. **🌌 Space**: Cosmic and galaxy themes
8. **🌿 Nature**: Natural and organic elements
9. **🎉 Party**: Celebration and fun effects
10. **🍕 Food**: Delicious food-themed filters

## 💡 Key Features Implemented

### Swipe Gestures
- Horizontal drag detection using Framer Motion
- Smooth transitions between filter categories
- Visual feedback during swipe actions

### Animations
- Scale and rotation effects on filter selection
- Staggered content animations
- Floating elements with continuous motion
- Color transitions and gradient effects

### Mobile Optimization
- Touch-friendly gesture controls
- Responsive breakpoints for all screen sizes
- Optimized performance for mobile devices
- Accessibility features included

## 🎨 Design Highlights

- **Glassmorphism UI**: Backdrop blur effects and transparency
- **Gradient backgrounds**: Each filter has unique gradient styling
- **Smooth transitions**: All state changes are animated
- **Interactive feedback**: Hover and tap states for better UX
- **Modern typography**: Clean, readable font choices

## 🔧 Troubleshooting

### Script Execution Policy (Windows PowerShell)
If you encounter script execution issues, run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Alternative Installation
You can also use yarn instead of npm:
```bash
yarn install
yarn start
```

## 📝 Project Structure

```
src/
├── components/
│   ├── SnapchatFilters.js    # Main swipeable filters component
│   ├── SnapchatFilters.css   # Filter styling
│   ├── ContentArea.js        # Dynamic content display
│   └── ContentArea.css       # Content area styling
├── styles/
│   ├── global.css           # Global styles
│   └── App.css              # Main app styling
├── App.js                   # Root component
└── index.js                 # App entry point
```

## 🌟 Demo Features

This demo showcases:
- **Real swipe detection** with threshold-based navigation
- **Dynamic content updates** based on selected filter
- **Smooth visual feedback** for all interactions
- **Professional UI/UX** following modern design principles
- **Cross-platform compatibility** (desktop and mobile)

Enjoy exploring the interactive demo! 🚀