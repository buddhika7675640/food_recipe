import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./Component/recipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "ac468a98";
  const YOUR_APP_KEY = "c70435efb391e9a443e68ee1ddce8eda";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&health=${healthLabels}`;

  // https://api.edamam.com/search?q=apple&app_id=ac468a98&app_key=c70435efb391e9a443e68ee1ddce8eda&from=0&to=30&health=tree-nut-free
  // https://api.edamam.com/search?q=apple&app_id=ac468a98&app_key=c70435efb391e9a443e68ee1ddce8eda&from=0&to=30&health=tree-nut-free

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1>Food Recipe Haven 😋</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app_helthLables">
          <option value="vegan" onClick={() => sethealthLabels("vegan")}>
            Vegan
          </option>
          <option
            value="vegiterian"
            onClick={() => sethealthLabels("vegetarian")}
          >
            Vegetarian
          </option>
          <option
            value="dairy-free"
            onClick={() => sethealthLabels("dairy-free")}
          >
            Dairy-free
          </option>
          <option
            value="gluten-free"
            onClick={() => sethealthLabels("gluten-free")}
          >
            Gluten-free
          </option>
          <option
            value="wheat-free"
            onClick={() => sethealthLabels("wheat-free")}
          >
            Wheat-free
          </option>
          <option
            value="low-sugar"
            onClick={() => sethealthLabels("low-sugar")}
          >
            Low-sugar
          </option>
          <option value="egg-free" onClick={() => sethealthLabels("egg-free")}>
            Egg-free
          </option>
          <option
            value="peanut-free"
            onClick={() => sethealthLabels("peanut-free")}
          >
            Peanut-free
          </option>
          <option
            value="tree-nut-free"
            onClick={() => sethealthLabels("tree-nut-free")}
          >
            Tree-nut-free
          </option>
          <option value="soy-free" onClick={() => sethealthLabels("soy-free")}>
            Soy-free
          </option>
          <option
            value="fish-free"
            onClick={() => sethealthLabels("fish-free")}
          >
            Fish-free
          </option>
          <option
            value="shellfish-free"
            onClick={() => sethealthLabels("shellfish-free")}
          >
            Shellfish-free
          </option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
