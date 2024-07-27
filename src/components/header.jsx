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
							<li className='header-row__items'>Home</li>
							<li className='header-row__items'>About</li>
							<li className='header-row__items'>Lib</li>
						</ul>
				</div>
			</div>
		</header>
	)
}




export default Header;