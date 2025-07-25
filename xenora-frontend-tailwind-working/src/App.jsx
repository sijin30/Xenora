import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Login from './Pages/Login'
export default function App() {
  return (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
    <Navbar />
  <Routes>
      
    <Route path='/'  element={<Home />}/>
    <Route path='/collection'  element={<Collection/>}/>
    <Route path='/about'  element={<About />}/>
    <Route path='/contact'  element={<Contact />}/>
    <Route path='/product/:productId' element={<Product/>} />
    <Route path='/cart'  element={<Cart />}/>
    <Route path='/checkout'  element={<Checkout />}/>
    <Route path='/login'  element={<Login />} />

  </Routes>

  </div>
  )
}
