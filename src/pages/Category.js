import React, { useEffect, useState} from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
 

export default function Category() {

const [category, setCategory]= useState(false);

const searchCategory = useParams()


useEffect(() => {async function getCategory(){
    console.log(`getting the category:`, searchCategory.category)
    const queryParam = encodeURIComponent(searchCategory.category)
    const data = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryParam}`);
    console.log(`here is the category data:`, data.data);
    setCategory(data.data)
}getCategory()}, [searchCategory])

const render = () =>{
    if (category === false){
        return "Getting the category"
    }
    else {return category.drinks.map(category => {
        
        return <li><Link to={`/categories/${searchCategory.category}/${category.idDrink}`} >{category.strDrink}</Link></li>})}

}


    return (
      <div className="category">
        Here are the cocktails in the category {searchCategory.category}:
        <ul>
        {render()}
        </ul>
      </div>
    );
  }