import React from "react";
import {Routes,BrowserRouter as Router, Route} from "react-router-dom";
import PortfolioDominik from "./views/PortfolioDominik/PortfolioDominik";
import PortfolioJannis from "./views/PortfolioJannis/PortfolioJannis";


function App() {
  return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/JannisKaiser" exact element={<PortfolioJannis/>} />
            <Route path="/JanDominikFranz*" exact element={<PortfolioDominik/>} />
          </Routes>
        </Router>
      </div>
      );
}

export default App;
