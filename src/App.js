import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home/Home";
import First from "./pages/First/First";
import Second from "./pages/Second/Second";

class App extends Component {
  render() {
    return (
        <main>
          <Router>
              <div>
                  <Route exact path="/" component={ Home } />
                  <Route path="/first" component={ First } />
                  <Route path="/second" component={ Second } />
              </div>
          </Router>
        </main>
    );
  }
}

export default App;
