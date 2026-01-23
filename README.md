# Personal Homepage - Yingyi Kong

## Author

Yingyi Kong

## Project Objective

This is a personal homepage project built with vanilla HTML5, CSS3, and ES6+ JavaScript. The website showcases my projects, background, and contact information. It features a responsive design that works across different devices and includes dynamic project pages generated using JavaScript modules.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Dynamic Project Pages**: JavaScript-powered project detail pages using ES6 modules
- **Multiple Pages**: Homepage, About page, and dynamically generated project pages
- **Creative Component**: Interactive footer with large brand letters (Y.K) and hover effects on project images

## Screenshot

[Screenshot placeholder - Add your screenshot here]

## Instructions to Build

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, for testing)

### Setup

1. Clone or download this repository
2. Open the project folder in your terminal
3. If using a local server, navigate to the project directory:
   ```bash
   cd "Personal Website"
   ```
4. Start a local server (optional):

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

5. Open your browser and navigate to:
   - `http://localhost:8000/index.html` (if using local server)
   - Or simply open `index.html` directly in your browser

### Project Structure

```
Personal Website/
├── index.html          # Homepage
├── about.html          # About page
├── projects.html       # Project detail page (dynamic)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── projects.js     # Main project page logic
│   ├── projectsData.js # Project data
│   └── projectRenderer.js # Project rendering function
├── images/             # Image assets
├── videos/             # Video assets
└── package.json        # Project configuration

```

### Technologies Used

- HTML5
- CSS3 (Flexbox for layout)
- ES6+ JavaScript (Modules)
- No frameworks or libraries (vanilla JavaScript only)

## GenAI Usage

<!-- Provide what models were used, versions, prompts, and how it was used. -->

Cursor: for code completion in projects.html and README.md.
Prompts: "Generate a README.md file for a personal website project."
"Generate a projects.html file for a personal website project based on the image provided."

Gemini 3: for instruction of unfamiliar code like hover effects on project images.
Prompt: "I want to add a hover effect to the project images. Please tell me the basic idea with the code."
