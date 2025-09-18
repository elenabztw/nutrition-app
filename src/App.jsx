import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Home';
import NutritionApp from './Nutrition/NutritionApp';



function App() {
  return (
      <Router>
        <nav>
          <Link to = "/" className="link">Home</Link>
          <Link to="/nutrition" className="link">Nutrition App</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nutrition" element = {<NutritionApp/>} />
        </Routes>
      </Router>
  )
}

export default App;