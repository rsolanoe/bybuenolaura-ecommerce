import React from "react";
import './app.css'
import AppRouter from "./Routers/AppRouter";

import {Provider} from 'react-redux'
import store from './redux/store';

const App = () => {

   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};

export default App;
