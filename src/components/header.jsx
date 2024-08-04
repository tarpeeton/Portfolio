import React from 'react'
import { useState } from 'react'
import { MobileNavigation } from './mobileNavigation'

const Header = React.memo(function Hello({
	scrollToSkills,
	scrollToProjects,
	scrollToContact,
}) {
	const [menu, setMenu] = useState(false)

	const handleSetMenu = () => {
		setMenu(!menu)
	}



	return (
		<>
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
							<li
								className='header-row__items'
								onClick={() => scrollToSkills()}
							>
								Skills
							</li>
							<li
								className='header-row__items'
								onClick={() => scrollToProjects()}
							>
								Projects
							</li>
							<li
								className='header-row__items'
								onClick={() => scrollToContact()}
							>
								Contact Us
							</li>
							<button
								className='header-row__button'
								onClick={() => handleSetMenu()}
							>
							<img src='https://ucarecdn.com/5e39a5b1-7431-4a6d-8883-a969f5679371/'/>
							</button>
						</ul>
					</div>
				</div>
			</header>
			{menu ? (
				<MobileNavigation
					handleSetMenu={handleSetMenu}
					scrollToSkills={scrollToSkills}
					scrollToProjects={scrollToProjects}
					scrollToContact={scrollToContact}
				/>
			) : null} 
		</>
	)
})

export default Header
