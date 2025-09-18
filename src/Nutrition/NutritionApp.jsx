import { useEffect, useState } from 'react'
import Nutrition from './Nutrition';
import { LoaderPage } from '../Loader/LoaderPage';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './style.css'
import video from '../assets/food.mp4';


function NutritionApp() {

  const [mySearch, setMySearch] = useState();
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [myNutrition, setMyNutrition] = useState();
  const [stateLoader, setStateLoader] = useState(false);

  const APP_ID = 'dc43f5c9';
  const APP_KEY = '41004f36187693a52846881269bea7f0';
  const APP_URL = 'https://api.edamam.com/api/nutrition-details'

  const fetchData = async (ingr) => {
    setStateLoader(true);

    const response = await fetch(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingr })
    })

    if (response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyNutrition(data);
    } else {
      setStateLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter more detailed ingredients, e.g.: 1 cup rice, 2 eggs, 1 tbsp olive oil"
      });
    }
  }

  const myRecipeSearch = e => {
    setMySearch(e.target.value);
  }

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
      fetchData(ingr);
    }
  }, [wordSubmitted])


  return (
    <div className='nutritionContainer'>

      <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
      </video>

      <div className='back'>
        <Link to="/">← Back to Recipes</Link>
      </div>

      {stateLoader && <LoaderPage />}

      <h1>Nutrition Analysis</h1>

      <form onSubmit={finalSearch}>
        <input
          placeholder="Search ingredients..."
          onChange={myRecipeSearch}
        />
        <button className='searchBtn' type="submit">Search</button>
      </form>

      <div className='nutritionList'>
        {
          myNutrition && <p>{myNutrition.calories} kcal</p>
        }
        {
          myNutrition && Object.entries(myNutrition.totalNutrients)
          .map(([key, { label, quantity, unit }]) =>
            <Nutrition
              key={key}
              label={label}
              quantity={quantity}
              unit={unit}
            />
        )        
        }
      </div>
    </div>
  );
}


export default NutritionApp;
