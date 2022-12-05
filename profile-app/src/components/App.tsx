import React from 'react';
import CardMainComponent from "./card/CardMainComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./form/Form";
import GlobalContextProv from "./contextAPI/globalContextProv";

function App() {
  return (


    <BrowserRouter basename = '/profile'>
        <GlobalContextProv>
        <Routes>
                <Route path= '/' element={<CardMainComponent/>}/>
                <Route path= '/form' element={<Form/>}/>
        </Routes>
      </GlobalContextProv>
    </BrowserRouter>
  );
}

export default App;
