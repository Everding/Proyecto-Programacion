import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HOME,CREAR,VER,EDITAR, NOSOTROS } from './Routers/router';

import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import Home from "./Pages/Home"
import ViewPage from "./Pages/ViewPage"
import NosotrosPage from './Pages/NosotrosPage';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={HOME} element={<Home/>} />
            <Route path={CREAR} element={<CreatePage/>} />
            <Route path={EDITAR} element={<EditPage/>} />
            <Route path={VER} element={<ViewPage/>} />
            <Route path= {NOSOTROS} element= {<NosotrosPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App