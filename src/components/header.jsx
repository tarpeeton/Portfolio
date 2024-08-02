import React from 'react'
const Header = React.memo(function Hello({
	scrollToSkills,
	scrollToProjects,
	scrollToContact,
}) {
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
						<li className='header-row__items' onClick={() => scrollToSkills()}>
							Skills
						</li>
						<li
							className='header-row__items'
							onClick={() => scrollToProjects()}
						>
							Projects
						</li>
						<li className='header-row__items' onClick={() => scrollToContact()}>
							Contact Us
						</li>
						<button className='header-row__button'>
							<svg
								width='24px'
								height='24px'
								viewBox='-5.52 -5.52 35.04 35.04'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									strokeLinecap='round'
									strokeLinejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<path
										d='M4 7L7 7M20 7L11 7'
										stroke='#ffffff'
										strokeWidth='1.5'
										strokeLinecap='round'
									></path>{' '}
									<path
										d='M20 17H17M4 17L13 17'
										stroke='#ffffff'
										strokeWidth='1.5'
										strokeLinecap='round'
									></path>{' '}
									<path
										d='M4 12H7L20 12'
										stroke='#ffffff'
										strokeWidth='1.5'
										strokeLinecap='round'
									></path>{' '}
								</g>
							</svg>
						</button>
					</ul>
				</div>
			</div>
		</header>
	)
})

export default Header
