
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'
import Create from './Create'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Blogs' element={<Blogs/>}/>
    <Route path='/Create' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
  )
}



export default App