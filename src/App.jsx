import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'element={<ItemListContainer greeting = "Saludos" />}/>
        <Route path='/category/:idCategory' element={<ItemListContainer greeting = "Saludos" />}/>
        <Route path='/detail/:idProduct'element={<ItemDetailContainer/>}/>
        <Route path='*'element={<Navigate to='/' />}/>
      </Routes>
      
    </BrowserRouter> 
  )
}

export default App

