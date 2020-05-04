import React, { useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
 

export default function Categories() {

const [categories, setCategories]= useState(false);

useEffect(() => {async function getCategories(){
    console.log(`getting the categories`)
    const data = await Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    console.log(`here is the categories data:`, data.data);
    setCategories(data.data)
}getCategories()}, [])

const render = () =>{
    if (categories === false){
        return "Getting the categories"
    }
    else {return categories.drinks.map(category => {
        let removeDash = category.strCategory.split(' /').join('')
        let categoryname = removeDash.split(' ').join('_')
        return <li><Link to={`/categories/${categoryname}`} >{category.strCategory}</Link></li>})}

}


    return (
      <div className="categories">
        Here are the cocktail categories:
        <ul>
        {render()}
        </ul>
      </div>
    );
  }