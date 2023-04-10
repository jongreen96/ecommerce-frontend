import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/auth/authSlice';
import { selectCartAmount } from '../store/cart/cartSlice';
import '../styles/navigation.css';

import logo from '../assets/logo.svg';
import menuIcon from '../assets/menu.svg';
import basketIcon from '../assets/basket.svg';
import profileIcon from '../assets/profile.svg';
import searchIcon from '../assets/search.svg';
import { MenuItems } from './MenuItems';
import { SideMenu } from './SideMenu';
import { Search } from './Search';
import { Login } from './Login';
import { Basket } from './Basket';

export default function NavBar() {
	const user = useSelector(selectUser);
	const cartAmount = useSelector(selectCartAmount);
	const [menu, setMenu] = useState({
		menu: false,
		search: false,
		login: false,
		basket: false,
	});

	const toggleMenu = (button) => {
		setMenu({
			menu: false,
			search: false,
			login: false,
			basket: false,
			[button]: !menu[button],
		});
	};

	return (
		<>
			<nav className='bg-white' role='navigation' aria-label='main navigation'>
				<div className='navbar flex'>
					<div className='nav-left flex'>
						<img
							src={menuIcon}
							alt='Menu'
							onClick={() => toggleMenu('menu')}
							className='icon'
							aria-label='Menu button'
							role='button'
						/>
						<img
							src={searchIcon}
							alt='Search'
							onClick={() => toggleMenu('search')}
							className='icon'
							aria-label='Search button'
							role='button'
						/>
					</div>

					<div className='nav-center'>
						<Link to='/'>
							<img src={logo} alt='GVG Logo' className='logo' />
						</Link>
					</div>

					<div className='nav-right flex'>
						{user && <div className='login-status'></div>}
						{user ? (
							<Link to='/account'>
								<img
									src={profileIcon}
									alt='Profile'
									className='icon'
									aria-label='Profile button'
									role='button'
								/>
							</Link>
						) : (
							<img
								src={profileIcon}
								alt='Profile'
								onClick={() => toggleMenu('login')}
								className='icon'
								aria-label='Profile button'
								role='button'
							/>
						)}
						<img
							src={basketIcon}
							alt='Basket'
							className='icon'
							aria-label='Basket button'
							role='button'
							onClick={() => toggleMenu('basket')}
						/>
						{cartAmount !== 0 && (
							<div className='basket-quantity'>
								<p>{cartAmount}</p>
							</div>
						)}
					</div>
				</div>

				<ul className='navbar-menu flex font-three'>
					<MenuItems />
				</ul>

				<div className='navbar-offer'> All bundles 30% off! </div>

				{menu.menu && <SideMenu toggleMenu={toggleMenu} />}
				{menu.search && <Search toggleMenu={toggleMenu} />}
				{menu.login && <Login toggleMenu={toggleMenu} />}
				{menu.basket && <Basket toggleMenu={toggleMenu} />}
			</nav>
		</>
	);
}
