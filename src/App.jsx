import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { NavBar } from './components/NavBar'
import { Product } from './pages/Product'
import { About } from './pages/About'
import { Account } from './pages/Account'

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
