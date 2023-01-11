
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/contenedor/ItemListContainer'
import ItemDetailContainer from './components/itemDetalContainer/ItemDetailContainer'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="">


      <BrowserRouter>

        <Header />

        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App
