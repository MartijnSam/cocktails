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
import Table from 'react-bootstrap/Table'

export default function DrinkPage() {

const [drink, setDrink]= useState(false);

const searchDrink = useParams()
const searchCategory = searchDrink.category

useEffect(() => {async function getDrink(id){
    console.log(`getting the cocktail:`, id)
    const data = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(`here is the cocktail data:`, data.data);
    setDrink(data.data.drinks[0])
}getDrink(searchDrink.cocktail)}, [searchDrink])

const drinkName = () =>{
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    else return <h1>{drink.strDrink}</h1>}

const drinkThumb = () =>{
        if (drink === false){
            return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
        }
        else return <Image src={drink.strDrinkThumb} fluid />
  

}

const drinkAlco = () =>{
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    else return <div><p><Badge pill variant="success">
    {drink.strAlcoholic}</Badge></p><p>Glass: {drink.strGlass}</p></div>


}


const drinkInstr = () =>{
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    else return <div>{drink.strInstructions}</div>}

    
const drinkIngr = () =>{
        
    if (drink === false){
        return <div>"Getting the drink"<Spinner animation="border"></Spinner></div>
    }
    if (drink.strIngredient1 !== null){
        return <tbody>
            <tr><td>{drink.strIngredient1}</td><td>{drink.strMeasure1}</td></tr>
            <tr><td>{drink.strIngredient2}</td><td>{drink.strMeasure2}</td></tr>
            <tr><td>{drink.strIngredient3}</td><td>{drink.strMeasure3}</td></tr>
            <tr><td>{drink.strIngredient4}</td><td>{drink.strMeasure4}</td></tr>
            <tr><td>{drink.strIngredient5}</td><td>{drink.strMeasure5}</td></tr>
            <tr><td>{drink.strIngredient6}</td><td>{drink.strMeasure6}</td></tr>
            <tr><td>{drink.strIngredient7}</td><td>{drink.strMeasure7}</td></tr>
            <tr><td>{drink.strIngredient8}</td><td>{drink.strMeasure8}</td></tr>
            <tr><td>{drink.strIngredient9}</td><td>{drink.strMeasure9}</td></tr>
            <tr><td>{drink.strIngredient10}</td><td>{drink.strMeasure10}</td></tr>
            <tr><td>{drink.strIngredient11}</td><td>{drink.strMeasure11}</td></tr>
            <tr><td>{drink.strIngredient12}</td><td>{drink.strMeasure12}</td></tr>
            <tr><td>{drink.strIngredient13}</td><td>{drink.strMeasure13}</td></tr>
            <tr><td>{drink.strIngredient14}</td><td>{drink.strMeasure14}</td></tr>
            <tr><td>{drink.strIngredient15}</td><td>{drink.strMeasure15}</td></tr>           
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
                    <Link to={linkCategory}>
                <Button variant="outline-success">{categoryName}</Button></Link>
                </p><p>{drinkAlco()}</p>
                </Tab.Pane>
                </Tab.Content>
                </Col>
                <Col sm={2}>{drinkThumb()}</Col>
                </Row>
                
                
               
                </Tab.Container>

                
            
            
        
      </div>
    );
  }