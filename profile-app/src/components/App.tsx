import React from 'react';
import CardMainComponent from "./card/CardMainComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./form/Form";

function App() {
  return (
    <BrowserRouter basename = '/profile'>
        <Routes>
            <Route path= '/' element={<CardMainComponent/> }/>
            <Route path= '/form' element={<Form/> }/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
