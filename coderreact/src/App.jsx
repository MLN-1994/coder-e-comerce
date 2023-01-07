
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/contenedor/ItemListContainer'
import ItemDetailContainer from './components/itemDetalContainer/ItemDetailContainer'


function App() {
  

  return (
    <div className="">
      <Header/>
        <ItemListContainer />
      <ItemDetailContainer />
    </div>
  )
}

export default App
