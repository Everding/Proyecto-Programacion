import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HOME,CREAR,VER,EDITAR,SOBRE, NOSOTROS,LOGIN } from './Routers/router';

import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import Home from "./Pages/Home"
import ViewPage from "./Pages/ViewPage"
import SobrePage from './Pages/SobrePage';
import NosotrosPage from './Pages/NosotrosPage';import LoginPage from "./Pages/LoginPage"

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={HOME} element={<Home/>} />
            <Route path={CREAR} element={<CreatePage/>} />
            <Route path={EDITAR} element={<EditPage/>} />
            <Route path={VER} element={<ViewPage/>} />
            <Route path={SOBRE} element={<SobrePage/>} />
            <Route path= {NOSOTROS} element= {<NosotrosPage/>}/>
            <Route path={LOGIN} element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App