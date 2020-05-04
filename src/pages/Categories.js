import React, { useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import TabContainer from 'react-bootstrap/TabContainer';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Tab from 'react-bootstrap/Tab';
import Category from "./Category"
 

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
        let categoryname = encodeURIComponent(category.strCategory)
        return <ListGroup.Item action variant="success"><Link to={`/categories/${categoryname}`} >{category.strCategory}</Link></ListGroup.Item>})}

}




    return (
      <TabContainer id="list-group-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={4}>
        Here are the cocktail categories:
        <ListGroup>
        {render()}
        </ListGroup>
        </Col>
        <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
        
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        
        </Tab.Pane>
      </Tab.Content>
      </Col>
        </Row>
    </TabContainer>
    );
  }