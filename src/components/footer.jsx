import React from 'react'
import { NavLink } from 'react-router-dom'
import Telegram from '../assets/images/socials/1.svg'
import Instagram from '../assets/images/socials/2.svg'
import Github from '../assets/images/socials/3.svg'
import CallMe from '../assets/images/socials/4.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-contact'>
				<h3>Contact</h3>
			</div>
			<div className='footer-contact__message'>
				<p>
					I'm currently looking to join a cross-functional team that values
					improving people's lives through accessible design. or have a project
					in mind? Let's connect.
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
					<NavLink to='t.me/tot_rustem'>
						<img src={Telegram} />
					</NavLink>
				</div>
				<div>
					<NavLink to='https://www.instagram.com/tarpeeton_dev/'>
						<img src={Instagram} />
					</NavLink>
				</div>
				<div>
					<NavLink to='https://github.com/tarpeeton'>
						<img src={Github} />
					</NavLink>
				</div>
				<div>
					<NavLink to='tel:+998917888041'>
						<img src={CallMe} />
					</NavLink>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
