import React, { useEffect, useState} from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
 

export default function Category() {

const [category, setCategory]= useState(false);

const searchCategory = useParams()


useEffect(() => {async function getCategory(){
    console.log(`getting the category:`, searchCategory.category)
    const queryParam = searchCategory.category
    console.log(`getting data from: https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryParam}`)
    const data = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryParam}`);
    console.log(`here is the category data:`, data.data);
    setCategory(data.data)
}getCategory()}, [searchCategory])

const render = () =>{
    if (category === false){
        return "Getting the category"
    }
    if (category === undefined || category === null || typeof(category) !== "object"){
        return "Mhhh... Something went wrong :( Try again!"
    }
    else {return category.drinks.map(category => {

        let link = `/categories/${searchCategory.category}/${category.idDrink}`
        
        return <Col key={category.idDrink}><Card >
            <Card.Img variant="top" src={category.strDrinkThumb}/>
            <Card.Body>
                <Card.Title>{category.strDrink}</Card.Title>
            </Card.Body>
            <Card.Footer><Button href={link} variant="outline-success">More info</Button></Card.Footer>
        </Card></Col>})}

}

const categoryName = decodeURIComponent(searchCategory.category)

    return (
      <div className="category"><p>
        Here are the cocktails in the category {categoryName}:
        </p>
        <Container>
        <Row xs={2} md={4} lg={6}>
        {render()}
        </Row>
        </Container>
        
      </div>
    );
  }