import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import Navigation from './components/NavBar'
import Categories from './pages/Categories'
import Category from './pages/Category'
import DrinkPage from './pages/DrinkPage'
import SearchPage from './pages/SearchPage'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <div>
        
      </div>
      <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/categories" exact={true} component={Categories} />
          <Route path="/about" exact={true} component={AboutPage} />
          <Route path="/categories/:category" exact={true} component={Category} />
          <Route path="/categories/:category/:cocktail?" component={DrinkPage} />
          <Route path="/search/:searchtext" component={SearchPage} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;