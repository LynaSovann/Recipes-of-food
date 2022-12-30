import React from "react";
import myLogo from "./myLogo.png";
import Recipes from "./recipes/Recipes";
const {useState, useEffect} = React;
const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);
    const id = "f82ca157";
    const key = "02b9a7dea182a865f0c841dfd416bfd9";
    const api = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;
    useEffect(() => {
        getRecipes();
    }, [query]);
    const getRecipes = async () => {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
        fetch(api);
    }
    const createSearch = e => {
        e.preventDefault();
        setQuery(value);
        setValue("");
        setShow(true);
    }
    const enterNothing = () => {
        if(value === "") {
            return;
        } 
    }
    const presskeyNothing = (e) => {
        if(e.key === "Enter") {
            return ;
        }
    }
    return (
        <main>
            <header>
                <a href="/">
                    <h1>L <span>xx</span> H</h1>
                    <img src={myLogo}/>
                </a>
                <div className="title">
                    <h1>Food Recipe</h1>
                    <form className="btn" onSubmit={ value.length <= 0 ? enterNothing : createSearch}>
                        <input id="input" type="text" placeholder="Search name of food..." value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={presskeyNothing} autoComplete="off"/>
                        <button type="submit" onClick={enterNothing}>find</button>
                    </form>
                    <h2 style={{display: show === true ? "" : "none"}}>The result of <span>{query}</span> is being shown...</h2>
                </div>
            </header>
            <div className="loading" style={{display: recipes.length <= 0 ? "" : "none"}}>
                <div className="in"></div>
                <div className="out"></div>
            </div>
            <div className="container">
                {
                    recipes.map(recipe => (
                        <Recipes
                        key={recipe.recipe.label}
                        name={recipe.recipe.label}
                        image = {recipe.recipe.image}
                        ingredients = {recipe.recipe.ingredients}
                        />
                    ))
                }
            </div>
            {/* <a href="#input">
                <button>More</button>
            </a> */}
            <footer>
                <div className="credit">
                    <p>Contact me <a href="https://www.facebook.com/sovann.lyna.311?mibextid=LQQJ4d" target= "_blank">Lee Hour</a></p>
                </div>
            </footer>
        </main>
    )
}
export default App;