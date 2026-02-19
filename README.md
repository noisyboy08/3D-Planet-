#  3D Planets Explorer

A visually stunning 3D space exploration experience built with React, Three.js, and GSAP. Explore Earth and 7 unique fictional planets with immersive animations, realistic textures, and smooth interactions.

![3D Planets Preview](https://via.placeholder.com/800x400?text=3D+Planets+Preview) <!-- Ideally replace with a real screenshot once deployed -->

##  Features

- **Hyper-Realistic 3D Planets**: Rendered using Three.js and @react-three/fiber with custom shaders for atmosphere and texture.
- **Smooth Scroll Animations**: Powered by **GSAP ScrollTrigger** for cinematic parallax effects and element transitions.
- **Interactive Starmap**: A dynamic background star field that reacts to mouse movement.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **Atmospheric Glow**: Custom shader-like effects for realistic planet atmospheres.
- **Planet Details**: Detailed information cards with animated statistics for diameter, gravity, and surface area.
- **Custom Cursor**: A sleek, space-themed custom cursor for enhanced immersion.
- **Cinematic Loading**: A full-screen loading sequence with progress tracking.

---

##  Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **3D Rendering**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Smooth Scrolling**: [Lenis](https://lenis.studio/)
- **Routing**: [React Router v6](https://reactrouter.com/)

---

##  Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    `ash
    git clone https://github.com/yourusername/3d-planets-explorer.git
    cd 3d-planets-explorer
    `

2.  **Install dependencies**
    `ash
    npm install
    # or
    yarn install
    `

3.  **Start the development server**
    `ash
    npm run dev
    # or
    yarn dev
    `

4.  **Open your browser**
    Navigate to http://localhost:5173 to view the app.

---

##  Project Structure

`
src/
 assets/          # Images, textures, and video assets
 components/      # Reusable UI components (Nav, Button, PlanetLoader, etc.)
 constants/       # Static data (Planet details, Earth info)
 PlanetsComponents/ # Individual 3D planet components (EarthView, BlazeonView, etc.)
 routes/          # Page components (PlanetDetail, PlanetLists)
 sections/        # Section components for Home page (Hero, EarthDetail)
 utils/           # Utility functions and asset imports
 App.jsx          # Main application component with routing
 index.css        # Global styles and Tailwind directives
`

---

##  The Planets

Explore a variety of celestial bodies:

| Planet | Type | Key Feature |
| :--- | :--- | :--- |
| **Earth**  | Terrestrial | Our home, vibrant and full of life. |
| **Blazeon**  | Scorched | Closest to its star, extremly hot surface. |
| **Aurora**  | Gas Giant | Famous for its mesmerizing auroras. |
| **Zephyrion**  | Aquatic | Covered almost entirely by vast oceans. |
| **Ignis Major**  | Gas Giant | Shrouded in mysterious mist and floating islands. |
| **Verdantia**  | Terrestrial | Lush, green, and rich in biodiversity. |
| **Spectra**  | Crystalline | Refracts light into dazzling rainbows. |
| **Nebulon**  | Volcanic | A fiery inferno of constant volcanic activity. |

---

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (git checkout -b feature/AmazingFeature)
3.  Commit your changes (git commit -m 'Add some AmazingFeature')
4.  Push to the branch (git push origin feature/AmazingFeature)
5.  Open a Pull Request

---

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with  by Uday</p>
</div>