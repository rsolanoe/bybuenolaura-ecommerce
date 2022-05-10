import React, { useState } from "react";
import './app.css'
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import AppRouter from "./Routers/AppRouter";

const App = () => {

   const [addCart, setAddCart] = useState([])

   return (
      <AppContext.Provider value ={{addCart, setAddCart}}>
         <AppRouter />
      </AppContext.Provider>
   );
};

export default App;
