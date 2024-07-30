import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = React.memo(function Hello() {
	return (
		<header className='header'>
			<div className='header-row'>
				<div className='logo'>
					<img
						src='https://ucarecdn.com/f157a9fe-96b0-4a9f-add2-cef1d95a4949/-/preview/35x43/'
						alt='Logo'
					/>
				</div>
				<div className='links'>
					<ul className='header-row__links'>
						<li>
							<NavLink className='header-row__items' to='/'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className='header-row__items' to='/about'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink className='header-row__items' to='/lib'>
								Lib
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
})

export default Header
