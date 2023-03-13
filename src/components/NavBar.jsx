import logo from '../assets/logo.svg'
import basket from '../assets/basket.svg'
import menu from '../assets/menu.svg'
import profile from '../assets/profile.svg'
import search from '../assets/search.svg'

import '../styles/NavBar.css'
import { NavLink } from 'react-router-dom'

export function NavBar() {
	return (
		<nav role='navigation' aria-label='main navigation'>
			<div className='navbar flex'>
				<div className='nav-left flex'>
					<img src={menu} alt='Menu' className='menu icon' aria-label='Menu button' role='button' />
					<img src={search} alt='Search' className='search icon' aria-label='Search button' role='button' />
				</div>
				<div className='nav-center'>
					<img src={logo} alt='GVG Logo' className='logo' />
				</div>
				<div className='nav-right flex'>
					<img src={profile} alt='Profile' className='profile icon' aria-label='Profile button' role='button' />
					<img src={basket} alt='Basket' className='basket icon' aria-label='Basket button' role='button' />
				</div>
			</div>
			<ul className='navbar-menu flex'>
				<li className='navbar-item'>
					<NavLink to='/products'>All Products</NavLink>
				</li>
				<li className='navbar-item'>
					<NavLink to='/products'>On Sale</NavLink>
				</li>
				<li className='navbar-item'>
					<NavLink to='/products'>Phones</NavLink>
				</li>
				<li className='navbar-item'>
					<NavLink to='/products'>Tablets</NavLink>
				</li>
				<li className='navbar-item'>
					<NavLink to='/products'>Consoles</NavLink>
				</li>
			</ul>
			<div className='navbar-offer'> All bundles 30% off! </div>
		</nav>
	)
}
