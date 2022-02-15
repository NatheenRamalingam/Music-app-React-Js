import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Menu from './Component/Menu';
import Music from './Component/Music';
import Pnf from './Component/Pnf';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Change from './Component/Input';
import Track from './Component/sub/Track';


function App(props){
  return(
    <div>
      {/* <h1>App Works</h1> */}
      <BrowserRouter>
      <Menu/>
        <Routes>{/* switch cases = routes is a switch and route is a case*/}
           
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/home`} element={<Home/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={`/contact`} element={<Contact/>}/>
            <Route path={`/track/:id`} element={<Track/>}/>
            <Route path={`/*`} element={<Pnf/>}/>
            <Route path={`/todo`} element={<Change/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;