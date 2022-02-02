import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import HomePage from './Pages/HomePage.js';
import ProductsPage from './Pages/ProductsPage.js';
import NotFoundPage from './Pages/NotFoundPage.js';
import Footer from './Components/Footer/Footer.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailPage from './Pages/ItemDetailPage';

function App() {
  return (
    <BrowserRouter>
		<Navbar/>
		<Routes>
			<Route path='/'>
				<Route index element={<HomePage/>}/>

				<Route path='products'>
					<Route index element={<ProductsPage/>}/>
					<Route path=':id' element={<ItemDetailPage/>}/>
				</Route>
			</Route>
			<Route path='*' element={<NotFoundPage/>}/>
		</Routes>
		<Footer/>
    </BrowserRouter>
  )
}

export default App; 