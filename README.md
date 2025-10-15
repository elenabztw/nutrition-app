
# Recipe & Nutrition React App
A modern React application for searching recipes and analyzing nutritional information using the Edamam API.

---

## Project Overview

This React application allows users to:

- Search for recipes based on ingredients.
- View recipe details, including image, calories, and ingredient list.
- Analyze nutritional information for selected ingredients.

The app consists of a **Home** page for recipes and a **Nutrition** page for nutritional analysis. It uses React Router for navigation between pages.

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- **Recipe Search** - Search thousands of recipes by ingredients
- **Nutrition Analysis** - Get detailed nutritional breakdown of ingredients
- **Smart Caching** - Reduces API calls by caching results locally
- **Modern UI** - Beautiful interface with video backgrounds and smooth animations
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Fast Performance** - Optimized with React hooks and lazy loading
- **Error Handling** - User-friendly error messages and retry functionality

## 🚀 Demo

<img width="742" height="587" alt="image" src="https://github.com/user-attachments/assets/2429afd9-9632-4d2d-bfd4-65b658c8fed0" />

<img width="742" height="616" alt="image" src="https://github.com/user-attachments/assets/d00a19a7-48b3-47ed-ae4e-5b77efd13a41" />


**[Live Demo](https://nutrition-edamam-app.netlify.app/)**

## 🛠️ Tech Stack

**Frontend:**
- React 18
- React Router v6
- Vite
- CSS Modules

**APIs:**
- [Edamam Recipe API](https://developer.edamam.com/edamam-recipe-api)
- [Edamam Nutrition API](https://developer.edamam.com/edamam-nutrition-api)

**Features:**
- Custom React Hooks
- LocalStorage caching
- Responsive design
- Error boundaries

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Edamam API keys ([Get them here](https://developer.edamam.com/))

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/elenabztw/nutrition-app.git
cd nutrition-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_EDAMAM_RECIPE_ID=your_recipe_app_id
VITE_EDAMAM_RECIPE_KEY=your_recipe_app_key
VITE_EDAMAM_NUTRITION_ID=your_nutrition_app_id
VITE_EDAMAM_NUTRITION_KEY=your_nutrition_app_key
```

> **Note:** Get your free API keys from [Edamam Developer Portal](https://developer.edamam.com/)

4. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure
```
nutrition-app/
├── public/
├── src/
│   ├── assets/              # Images, videos, etc.
│   ├── components/
│   │   ├── Nutrition/       # Nutrition components
│   │   ├── Recipe/          # Recipe card components
│   │   └── shared/          # Reusable components
│   │       ├── EmptyState/
│   │       ├── ErrorMessage/
│   │       ├── Loader/
│   │       └── VideoBackground/
│   ├── hooks/               # Custom React hooks
│   │   ├── useRecipes.js
│   │   └── useNutrition.js
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   └── NutritionPage/
│   ├── services/            # API services
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Usage

### Recipe Search

1. Enter ingredients (e.g., "chicken", "pasta", "vegetables")
2. Click the search button or press Enter
3. Browse through recipe results with:
   - Recipe name
   - Image
   - Calorie count
   - Full ingredient list

### Nutrition Analysis

1. Navigate to "Nutrition App" page
2. Enter ingredients with quantities (one per line):
```
   1 cup rice
   2 eggs
   1 tbsp olive oil
```
3. Click "Analyze Nutrition"
4. View detailed nutritional information:
   - Total calories
   - Macronutrients (protein, carbs, fat)
   - Vitamins and minerals

## Key Features Explained

### Smart Caching

The app caches API responses for 1 hour to:
- Reduce API calls and stay within rate limits
- Improve performance
- Provide instant results for repeated searches

### Custom Hooks

**`useRecipes`** - Manages recipe search logic
```javascript
const { recipes, loading, error, searchRecipes } = useRecipes();
```

**`useNutrition`** - Handles nutrition analysis
```javascript
const { nutrition, loading, error, analyzeNutrition } = useNutrition();
```

### Error Handling

- Rate limit detection (429 errors)
- User-friendly error messages
- Retry functionality
- Empty state displays

## API Rate Limits

**Edamam Free Tier:**
- Recipe API: 10 requests/minute, 10,000/month
- Nutrition API: 10 requests/minute, 10,000/month

The app includes caching to minimize API calls and stay within limits.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to [Netlify](https://netlify.com)

3. Add environment variables in Netlify settings

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License 

## Author

**Elena Bozoeva**

- GitHub: [@elenabztw](https://github.com/elenabztw)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/elena-b-tw/)

## Acknowledgments

- [Edamam](https://www.edamam.com/) for providing the APIs
- [Icons8](https://icons8.com/) for the icons
- [Unsplash](https://unsplash.com/) for images

## Support

If you have any questions or run into issues, please:
- Open an [issue](https://github.com/elenabztw/nutrition-app/issues)

## Roadmap

- [ ] User authentication
- [ ] Save favorite recipes
- [ ] Create meal plans
- [ ] Export nutrition data as PDF
- [ ] Dark mode
- [ ] Recipe sharing
- [ ] Shopping list generator
- [ ] Barcode scanner for packaged foods

---

Made  by Elena Bozoeva


---

MIT License

Copyright (c) 2025 Elena Bozoeva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

Elena - [@elenabztw](https://github.com/elenabztw)
