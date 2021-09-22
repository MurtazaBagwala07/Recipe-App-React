
import './App.css';

function App() {
  
  const APP_ID = 'eb4c92a5';
  const APP_KEY = '1c27c36edf9d69df8b1e0e86ff6a730f';
  
  
  useEffect(()=>{
      getRecipe();
  },[])

  const getRecipe = async ()=>{
    const response = await  fetch(`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}D&app_key=${APP_KEY}&type=public`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
        <form className="search-form">
          <input className="srarch-bar" type="text" />
          <button type="submit" className="search-button">Search</button>
        </form>
    </div>
  );
}

export default App;
