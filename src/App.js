import HomePage from "./Pages/HomePage.js";
import ProductsPage from "./Pages/ProductsPage.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  return (
    <BrowserRouter>
		<Navbar/>
		<Routes>
			<Route path='/'>
				<Route index element={<HomePage/>}/>

				<Route path='products'>
					<Route index element={<ProductsPage/>}/>
					<Route path=":id" element={<ItemDetailContainer/>}/>
				</Route>
			</Route>
		</Routes>
    </BrowserRouter>
  )
}

export default App; 