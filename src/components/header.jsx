import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
const Header = () => {
	return(
		<header className='header'>
			<div className='header-row'>
				<div className='logo'>
					<img src={Logo}/>
				</div>
				<div className='links'>
						<ul className='header-row__links'>
							<li>
								<NavLink className='header-row__items' to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink className='header-row__items' to='/'>About</NavLink>
							</li>
							<li >
								<NavLink className='header-row__items' to='/'> Lib</NavLink>
							</li>
						</ul>
				</div>
			</div>
		</header>
	)
}




export default Header;