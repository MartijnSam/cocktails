import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Categories from './pages/Categories'
import Category from './pages/Category'
import DrinkPage from './pages/DrinkPage'



function App() {
  return (
    <div className="App">
      <div>
        
      </div>
      <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/categories/:category/:cocktail" component={DrinkPage} />
          {/* <Route path="/search/:searchtext?" component={SearchPage} />                 */}
           <Route path="/categories/:category" component={Category} />
          <Route path="/categories" component={Categories} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" exact={true} component={HomePage} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;