# Health AI Adoption Tracker

A comprehensive analysis and interactive visualization of AI-related Current Procedural Terminology (CPT) codes and their adoption across the United States.

## About

This project analyzes the adoption of artificial intelligence technologies in clinical practice through CPT codes. Using data from the Cosmos database, we track AI-related healthcare encounters across the United States from 2021 to present.

### AI Classification Categories

The project identifies and categorizes AI-related CPT codes into three distinct classifications:

- **Assistive AI**: Optional computer-assisted procedures that enhance traditional techniques
  - Examples: Computer-assisted surgical navigation, CAD for mammography
  
- **Augmentative AI**: Required AI-driven analysis that augments physician interpretation
  - Examples: FFR-CT analysis, coronary plaque characterization
  
- **Autonomous AI**: Fully automated AI procedures requiring minimal human intervention

## Features

- 🗺️ Interactive animated map showing AI adoption over time
- 🎨 Modern motion art effects with cursor interaction
- 🎯 Clean, centered slider for temporal navigation
- 📱 Fully responsive design for mobile and desktop

## Data

The visualization shows geographic distribution of AI-related healthcare encounters across the United States from 2021 to 2025, normalized per 100,000 population.


## Technology Stack

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- GitHub Pages for hosting

## Live Website

Visit the live website at: [https://poorvabedmutha31.github.io/ai-cpt-codes-website/](https://poorvabedmutha31.github.io/ai-cpt-codes-website/)

## Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/poorvabedmutha31/ai-cpt-codes-website.git
   ```

2. Open `index.html` in your web browser or use a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Navigate to `http://localhost:8000`

## Project Structure

```
ai-cpt-codes-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── assets/
│   ├── map/           # Geographic visualizations
│   └── data/          # Dataset files
└── README.md          # This file
```

## License

© 2026 Health AI Adoption Tracker. All rights reserved.
