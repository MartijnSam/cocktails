import React, { useEffect, useState} from "react";
import Axios from "axios";
import { useParams} from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'
import Tab from 'react-bootstrap/Tab'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

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

const drinkName = () =>{
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    else return <h1>{drink.drinks[0].strDrink}</h1>}

const drinkThumb = () =>{
        if (drink === false){
            return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
        }
        else return <Image src={drink.drinks[0].strDrinkThumb} rounded />
  

}

const drinkAlco = () =>{
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    else return <div><p><Badge pill variant="success">
    {drink.drinks[0].strAlcoholic}</Badge></p><p>Glass: {drink.drinks[0].strGlass}</p></div>


}


const drinkInstr = () =>{
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    else return <div>{drink.drinks[0].strInstructions}</div>}

    
const drinkIngr = () =>{
        
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    if (drink.drinks[0].strIngredient1 !== null){
        return <tbody>
            <tr><td>{drink.drinks[0].strIngredient1}</td><td>{drink.drinks[0].strMeasure1}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient2}</td><td>{drink.drinks[0].strMeasure2}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient3}</td><td>{drink.drinks[0].strMeasure3}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient4}</td><td>{drink.drinks[0].strMeasure4}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient5}</td><td>{drink.drinks[0].strMeasure5}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient6}</td><td>{drink.drinks[0].strMeasure6}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient7}</td><td>{drink.drinks[0].strMeasure7}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient8}</td><td>{drink.drinks[0].strMeasure8}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient9}</td><td>{drink.drinks[0].strMeasure9}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient10}</td><td>{drink.drinks[0].strMeasure10}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient11}</td><td>{drink.drinks[0].strMeasure11}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient12}</td><td>{drink.drinks[0].strMeasure12}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient13}</td><td>{drink.drinks[0].strMeasure13}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient14}</td><td>{drink.drinks[0].strMeasure14}</td></tr>
            <tr><td>{drink.drinks[0].strIngredient15}</td><td>{drink.drinks[0].strMeasure15}</td></tr>           
        </tbody>
    }}             
           
const categoryName = decodeURIComponent(searchCategory)
let linkCategory = `/categories/${searchCategory}`


    return (<div className="drinkpage">
        <Container>
            <Row>
                <Col>{drinkName()}</Col>
            </Row>
        </Container>
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="first">Instructions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Ingredients</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Info</Nav.Link>
                </Nav.Item>
                </Nav>
                </Col>
                <Col sm={4}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                {drinkInstr()}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Ingredients</th>
      <th>Measures</th>
    </tr>
  </thead>
  {drinkIngr()}
                </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="third"><p>
                <Button href={linkCategory} variant="outline-success">{categoryName}</Button>
                </p><p>{drinkAlco()}</p>
                </Tab.Pane>
                </Tab.Content>
                </Col>
                <Col sm={3}>{drinkThumb()}</Col>
                </Row>
                
                
               
                </Tab.Container>

                
            
            
        
      </div>
    );
  }