import React, { useEffect, useState} from "react";
import Axios from "axios";
import { useParams, Link} from "react-router-dom";
 

export default function DrinkPage() {

const [search, setSearch]= useState(false);

const searchText = useParams()
const searchedFor = decodeURIComponent(searchText.searchtext)


useEffect(() => {async function getSearch(){
    console.log(`searching for:`, searchText.searchtext)
    const queryParam = encodeURIComponent(searchText.searchtext)
    const data = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`);
    console.log(`here is the cocktail data:`, data.data);
    setSearch(data.data)
}getSearch()}, [searchText])

const render = () =>{
    if (search === false){
        return "Searching for your drink"
    }
    if (search === undefined || typeof search !== "object" || search.drinks === null){
        return "Found nothing... sorry :("
    }
    else {return search.drinks.map(drink => {
        let categoryname = encodeURIComponent(drink.strCategory)
        
        return  <li><Link to={`/categories/${categoryname}/${drink.idDrink}`} >{drink.strDrink}</Link></li>
        
        

    })}

}





    return (
      <div className="searchlist">
        You've searched for "{searchedFor}", here are the results:
        <p>{render()}</p>
        
        
      </div>
    );
  }