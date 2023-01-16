
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/contenedor/ItemListContainer'
import ItemDetailContainer from './components/itemDetalContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {


  return (
    <div className="">


      <BrowserRouter>

        <Header />

        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="*" element={<Navigate to={"/"}/>}/>
        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App
