import React from 'react';
import CardMainComponent from "./card/CardMainComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import GlobalContextProv from "./contextAPI/globalContextProv";
import FormMainComponent from "./form/FormMainComponent";

function App() {
  return (


    <BrowserRouter basename = '/profile'>
        <GlobalContextProv>
        <Routes>
                <Route path= '/' element={<CardMainComponent/>}/>
                <Route path= '/form' element={<FormMainComponent/>}/>
        </Routes>
      </GlobalContextProv>
    </BrowserRouter>
  );
}

export default App;
