import { useEffect, useState } from 'react'
import video from './assets/food.mp4'
import './App.css'
import RecipeComp from './RecipeComp';


function Home() {

  const MY_ID = "5a12ab18";
  const MY_KEY = "a85c1fa7a96997eb437c4fca022554e6";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState("beef");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);       // Сохраняет массив рецептов в myRecipes.
    }
    getRecipe()
  }, [wordSubmit])

  const myRecipeSearch = (e) => {     // Вызывается при вводе текста в поле поиска.
    setMySearch(e.target.value)       // Обновляем mySearch, чтобы хранить ввод пользователя (текущее значение input)
  }

  const finalSearch = (e) => {       // Вызывается при отправке формы или клике на кнопку
    e.preventDefault();
    setWordSubmit(mySearch);       // сохраняет слово поиска и запускает useEffect, чтобы получить новые рецепты.
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input onChange={myRecipeSearch} className='search' 
          placeholder='Search ingredients ...' value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>

        {myRecipes.map((element, index) => (
          <RecipeComp key={index}
          label={element.recipe.label} 
          image={element.recipe.image} 
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}/>
        ))}

        
    </div>
  )
}

export default Home;