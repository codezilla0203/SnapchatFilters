# 📸 Snapchat-Style Swipeable Filters Demo

An interactive React application featuring Snapchat-style swipeable category filters with smooth animations using Framer Motion.

## ✨ Features

- **Snapchat-style swipeable filters**: Horizontal gesture navigation
- **Smooth animations**: Powered by Framer Motion
- **Creative filter categories**: 10 unique categories with custom icons and gradients
- **Mobile-friendly**: Responsive design with touch gesture support
- **Interactive content**: Dynamic content area that changes with filter selection
- **Real filtering logic**: Items are filtered by category rather than static text
- **Keyboard & screen reader friendly**: ARIA roles, focus, live announcements

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
5. **Keyboard navigation**: Focus the filter bar and use Left/Right/Home/End

### Component Integration (Quick API)

`<SnapchatFilters />` expects:

```
activeFilter: string (category id)
onFilterChange: (id: string) => void
```

Categories data exported as `categories` from `SnapchatFilters.js` so you can reuse it or replace it with your own.

### Accessibility

- Filter list: `role="listbox"`, items: `role="option"`
- Active item announced via `aria-live`
- Keyboard: ArrowLeft / ArrowRight / Home / End
- Reduced motion respected for users with that preference by OS

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
- Horizontal drag + velocity-based flick detection (fast swipe advances)
- Spring snap-back after release
- Visual scale, depth, glow and rotation feedback

### Animations
- Scale, rotation, glow pulsation for active filter
- Staggered list reveal, hover wiggle
- Floating decorative dots (reduces motion aware)
- Gradient-driven dynamic backgrounds

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
### Execution Policy (Cannot run npm scripts)
If you're blocked by PowerShell policy, directly invoke webpack:
```
node node_modules/webpack-cli/bin/cli.js serve --mode development --port 8080 --host 0.0.0.0
```
Then open http://localhost:8080

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
- **Velocity-based flick advancement** for natural gestures
- **Dynamic content updates** filtering items by category
- **Smooth visual feedback** for all interactions
- **Professional UI/UX** following modern design principles
- **Cross-platform compatibility** (desktop and mobile)

Enjoy exploring the interactive demo! 🚀