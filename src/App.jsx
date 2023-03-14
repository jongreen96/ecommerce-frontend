import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Products } from './pages/products'
import { NavBar } from './components/navBar'
import { Product } from './pages/product'
import { About } from './pages/about'
import { Account } from './pages/account'

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/account' element={<Account />} />
				<Route path='/product' element={<Product />} />
				<Route path='/products' element={<Products />} />
			</Routes>
		</>
	)
}

export default App
