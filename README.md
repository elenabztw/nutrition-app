# Recipe & Nutrition React App

> A modern React application for searching recipes and analyzing nutritional information using the Edamam API.

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


## API Integration

Recipes API: Edamam Recipe Search API

Nutrition API: Edamam Nutrition Analysis API

You need your own API credentials (APP_ID and APP_KEY) from Edamam to fetch data.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
