import React from "react";
import './app.css'
import AppRouter from "./Routers/AppRouter";

import {Provider} from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {

   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
         </PersistGate>
      </Provider>
   );
};

export default App;
