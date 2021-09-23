import React,{useEffect, useState} from 'react'
import Recipe from './Components/Recipe';
import './App.css';

function App() {
  
  const APP_ID = 'eb4c92a5';
  const APP_KEY = '1c27c36edf9d69df8b1e0e86ff6a730f';
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("Chicken")
  
  useEffect(()=>{
      getRecipe();
  },[query])

  const getRecipe = async ()=>{
    const response = await  fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch=(e)=>{
    setSearch(e.target.value);
  }

  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

 const recipeList = recipes.map(recipe=>(
    <Recipe key={recipe.recipe.label} recipeItem={recipe}/>
  ))

  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input onChange={updateSearch} className="srarch-bar" type="text" />
          <button type="submit" className="search-button">Search</button>
        </form>
      {recipeList}
    </div>
  );
}

export default App;
