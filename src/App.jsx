import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sale from "./components/MainComponents/SaleProductCom/Sale";
import Stock from "./components/MainComponents/StockProductCom/Stock";
import AddProduct from "./components/MainComponents/AddProductCom/AddProduct";
import Analysis from "./components/MainComponents/AnalysisCom/Analysis";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <div className="bg-[#F9FAFB]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/sale-products"/> : <Login/>} />
          <Route path="/sale-products" element={isAuthenticated ? <Sale /> : <Navigate to="/" />} />
          <Route path="/add-product" element={isAuthenticated ? <AddProduct /> : <Navigate to="/" />} />
          <Route path="/view-stock" element={isAuthenticated ? <Stock /> : <Navigate to="/" />} />
          <Route path="/analysis" element={isAuthenticated ? <Analysis /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
