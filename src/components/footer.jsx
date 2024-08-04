import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Footer = ({ navRef }) => {
	return (
		<footer className='footer' ref={navRef}>
			<div className='footer-contact'>
				<h3>Contact</h3>
			</div>
			<div className='footer-contact__message'>
				<p>
					I`m currently looking to join a cross-functional team that values
					improving people`s lives through accessible design. or have a project
					in mind? Let`s connect.
				</p>

				<div className='footer-contact__message-link'>
					<NavLink
						className='footer-contact__message-gmail'
						to={{ pathname: 'mailto:tarpeetonteam@gmail.com' }}
					>
						tarpeetonteam@gmail.com
					</NavLink>
				</div>
			</div>

			<div className='footer-contact__social-links'>
				<div>
					<NavLink to='https://t.me/tot_rustem'>
						<img className='social-links__image-bordered' src='https://ucarecdn.com/3376cf22-9933-4b6d-a94e-a706df45533d/' />
					</NavLink>
				</div>
				<div>
					<NavLink to='https://www.instagram.com/tarpeeton_dev/'>
						<img className='social-links__image-bordered' src='https://ucarecdn.com/6c322df9-2560-4e18-8569-779f07c77564/' />
					</NavLink>
				</div>
				<div>
					<NavLink to='https://github.com/tarpeeton'>
						<img  className='social-links__image-bordered' src='https://ucarecdn.com/5d8fbb81-5413-4a72-878c-ce4e3b096f7a/' />
					</NavLink>
				</div>
				<div>
					<NavLink to='tel:+998917888041'>
						<img className='social-links__image-bordered' src='https://ucarecdn.com/93aa8d4c-edc1-49f8-b47f-f8141c7db87f/' />
					</NavLink>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
