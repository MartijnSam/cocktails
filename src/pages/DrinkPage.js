import React, { useEffect, useState} from "react";
import Axios from "axios";
import { useParams, Link} from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'
import Tab from 'react-bootstrap/Tab'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

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
    else return <div>{drink.drinks[0].strInstructions}</div>


}


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
                    <Nav.Link eventKey="third">Extra</Nav.Link>
                </Nav.Item>
                </Nav>
                </Col>
                <Col sm={4}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                {drinkInstr()}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                {drinkInstr()}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Button href={linkCategory} variant="outline-success">{categoryName}</Button>
                <p>{drinkAlco()}</p>
                </Tab.Pane>
                </Tab.Content>
                </Col>
                <Col sm={3}>{drinkThumb()}</Col>
                </Row>
                
                
               
                </Tab.Container>

                
            
            
        
      </div>
    );
  }