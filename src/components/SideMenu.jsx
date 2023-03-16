import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import '../styles/sideMenu.css'

export function SideMenu(props) {
	const { toggleMenu } = props
	return (
		<>
			<div className='side-menu flex-column font-three' onClick={() => toggleMenu()}>
				<ul className='side-menu-items'>
					<MenuItems />
				</ul>
				<ul className='side-menu-footer'>
					<li>
						<Link to='/about'>
							<p>About</p>
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<p>Contact Us</p>
						</Link>
					</li>
				</ul>
			</div>
			<div className='overlay' onClick={() => toggleMenu()}></div>
		</>
	)
}
