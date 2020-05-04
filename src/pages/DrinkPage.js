import React, { useEffect, useState} from "react";
import Axios from "axios";
import { useParams, Link} from "react-router-dom";
 

export default function DrinkPage() {

const [drink, setDrink]= useState(false);

const searchDrink = useParams()
const searchCategory = searchDrink.category

useEffect(() => {async function getDrink(){
    console.log(`getting the cocktail:`, searchDrink.cocktail)
    const queryParam = encodeURIComponent(searchDrink.cocktail)
    const data = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${queryParam}`);
    console.log(`here is the cocktail data:`, data.data);
    setDrink(data.data)
}getDrink()}, [searchDrink])

const render = () =>{
    if (drink === false){
        return "Getting the drink"
    }
    else {return drink.drinks.map(drink => {
        
        return  <div><h3>Name: {drink.strDrink}</h3><p><img src={drink.strDrinkThumb} alt="cocktail"></img>"</p>
        
        
        
        </div>
    })}

}


const categoryName = decodeURIComponent(searchCategory)


    return (
      <div className="drink">
        Here is the info of the drink:
        
        {render()}
        <p>Category: <Link to={`/categories/${searchCategory}`}>{categoryName}</Link></p>
      </div>
    );
  }