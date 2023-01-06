
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/contenedor/ItemListContainer'


function App() {
  

  return (
    <div className="">
      <Header/>
      <div className="grid grid-cols-8 gap-2 m-2 p-2">
        <ItemListContainer />
        </div>
      
    </div>
  )
}

export default App
