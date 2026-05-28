# Poovannaraajan's Creative Portfolio

<div align="center">
  <img src="./public/preview.gif" alt="Scrollytelling Portfolio Preview" width="100%" />
</div>

A high-performance "Scrollytelling" personal portfolio website featuring scroll-linked animations, HTML5 Canvas image sequence scrubbing, and modern glassmorphism UI.

## 🚀 Features
- **Scrollytelling Canvas:** Smoothly scrubs through a high-resolution image sequence as the user scrolls, optimized via HTML5 Canvas for 60fps performance (bypassing native `<video>` limitations).
- **Parallax Typography:** Framer Motion-powered text overlays that beautifully fade and translate based on scroll progress mapping.
- **Glassmorphism Grid:** Selected works and educational history displayed using blurred backdrops, subtle hover glows, and smooth expanding grid animations.
- **Dynamic Content:** Showcases actual resume details including GitHub project redirections.

## 🛠️ Tech Stack
- **Framework:** [Vite](https://vitejs.dev/) + React 19
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)

## 📦 Getting Started

1. **Navigate to the project directory:**
   ```bash
   cd myportfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure
- `src/components/ScrollyCanvas.tsx`: Core scrolling mechanic handling the image sequence and dynamic `object-fit: cover` canvas calculations.
- `src/components/Overlay.tsx`: Synchronized parallax text overlay sitting securely above the canvas.
- `src/components/Projects.tsx`: Interactive glassmorphism grid showcasing projects, technologies, and GitHub links.
- `src/components/Education.tsx`: Education history section matching the premium aesthetic.
- `src/App.tsx`: Main application entry combining all components sequentially.
- `src/profileinfo/`: Contains the source resume markdown file from which data was populated.

## 💡 Customization
The image sequence currently uses Apple's public AirPods Pro sequence for a premium high-end demonstration. You can seamlessly swap these out for your own customized frame sequence inside `ScrollyCanvas.tsx` by updating the `img.src` URL inside the `useEffect` preload loop.
