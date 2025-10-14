
# Recipe & Nutrition React App
A modern React application for searching recipes and analyzing nutritional information using the Edamam API.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Usage](#usage)
- [React Features Used](#react-features-used)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [License](#license)

---

## Project Overview

This React application allows users to:

- Search for recipes based on ingredients.
- View recipe details, including image, calories, and ingredient list.
- Analyze nutritional information for selected ingredients.

The app consists of a **Home** page for recipes and a **Nutrition** page for nutritional analysis. It uses React Router for navigation between pages.

<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/cf325b6b-94ec-41e1-a5c6-544439a0396e" />


---

## Features

- **Search Recipes**: Search recipes dynamically by typing ingredients.
- **View Recipe Details**: See recipe image, calories, and a full list of ingredients.
- **Nutrition Analysis**: Input ingredients to calculate calories and nutrients.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Smooth UI/UX**: Video background, hover effects, and loading animations.

---

## Usage

**Home Page:**

Enter an ingredient in the search bar.

Press Enter or click the search button.

Browse recipes with images, calories, and ingredients.

**Nutrition Page:**

Enter detailed ingredients (e.g., "1 cup rice, 2 eggs").

Click Search to see calorie count and nutrient breakdown.

## React Features Used

useState – for managing search input, recipe list, and nutritional data.

useEffect – to fetch data when search terms are updated.

React Router – for page navigation between Home and Nutrition.

Functional Components – with props to render recipes and nutrients.

Dynamic Rendering – mapping arrays to JSX components.

Conditional Rendering – showing loader or nutrition details based on state.


## Project Structure
```
src/
├── App.css
├── App.jsx
├── Home.jsx
├── RecipeComp.jsx
├── Nutrition/
│   ├── NutritionApp.jsx
│   └── Nutrition.jsx
├── Loader/
│   └── LoaderPage.jsx
├── assets/
│   └── food.mp4
├── data.js
```

## API Integration

Recipes API: Edamam Recipe Search API

Nutrition API: Edamam Nutrition Analysis API

You need your own API credentials (APP_ID and APP_KEY) from Edamam to fetch data.



# React + Vite
=======
# 🍽️ Nutrition App

A modern React application for searching recipes and analyzing nutrition information.

![Demo Screenshot](./screenshot.png)

## Features

- **Recipe Search** - Search thousands of recipes by ingredients
- **Nutrition Analysis** - Get detailed nutritional breakdown
- **Beautiful UI** - Modern design with video backgrounds
- **Responsive** - Works on all devices
- **Fast** - Optimized performance

## Tech Stack

- React 18 + Vite
- React Router v6
- Edamam API (Recipes & Nutrition)
- SweetAlert2
- CSS Modules

## Getting Started

### Prerequisites
- Node.js 18+
- Edamam API keys ([Get them here](https://www.edamam.com/))

### Installation

1. Clone the repository
```bash
git clone https://github.com/elenabztw/nutrition-app.git
cd nutrition-app
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Add your API keys to `.env`

5. Start development server
```bash
npm run dev
```

Visit `http://localhost:5173`

## Project Structure
```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── services/       # API services
├── utils/          # Helper functions
└── assets/         # Static files
```

## Roadmap

- [ ] Add favorites functionality
- [ ] User authentication
- [ ] Save meal plans
- [ ] Share recipes
- [ ] Dark mode
- [ ] Export nutrition data

## License

MIT

## Author

Elena - [@elenabztw](https://github.com/elenabztw)