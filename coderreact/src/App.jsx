
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/contenedor/ItemListContainer'
import ItemDetailContainer from './components/itemDetalContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Contact from './components/Contact/Contact';

function App() {


  return (


    // <MyContext.Provider>

    <div className="">


      <BrowserRouter>

        <Header />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="*" element={<Navigate to={"/"}/>}/>
          <Route exact path='/contacto' element={<Contact/>}/>
        </Routes>


      </BrowserRouter>

    </div>)
    {/* </MyContext.Provider> */}
  
}

export default App
