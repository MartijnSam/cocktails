import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function DrinkPage() {
  const [search, setSearch] = useState(false);

  const searchText = useParams();
  const searchedFor = decodeURIComponent(searchText.searchtext);

  useEffect(() => {
    async function getSearch() {
      console.log(`searching for:`, searchText.searchtext);
      const queryParam = encodeURIComponent(searchText.searchtext);
      const data = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`
      );
      console.log(`here is the cocktail data:`, data.data);
      setSearch(data.data);
    }
    getSearch();
  }, [searchText]);

  const render = () => {
    if (search === false) {
      return "Searching for your drink";
    }
    if (
      search === undefined ||
      typeof search !== "object" ||
      search.drinks === null
    ) {
      return "Found nothing... sorry :(";
    } else {
      return search.drinks.map((drink) => {
        let categoryname = encodeURIComponent(drink.strCategory);

        return (
          <Col key={drink.idDrink}>
            <Card>
              <Card.Img variant="top" src={drink.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{drink.strDrink}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Link to={`/categories/${categoryname}/${drink.idDrink}`}>
                  <Button variant="outline-success">More info</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        );
      });
    }
  };

  return (
    <div className="searchlist">
      You've searched for "{searchedFor}", here are the results:
      <Container>
        <Row xs={2} md={4} lg={6}>
          {render()}
        </Row>
      </Container>
    </div>
  );
}
