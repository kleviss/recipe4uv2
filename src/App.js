import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import RecipeList from "./RecipesList";
import Footer from "./Footer.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Home from "./Home";
import RecipePage from "./RecipePage.js";
import "./old.module.css";
import "./App.css";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/recipes" exact component={RecipeList} />
          <Route path="/recipes/:id" component={RecipePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
