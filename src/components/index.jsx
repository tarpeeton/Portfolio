import { NavLink } from 'react-router-dom'
import { useRef } from 'react'

import { Footer } from './footer'
import Header from './header'
import { Examples } from './examples'

const Main = () => {
	const footerRef = useRef(null)
	const skillsRef = useRef(null)
	const projectRef = useRef(null)
	// Skroll funksiyasi
	const scrollToRef = ref => {
		ref.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div>
			<Header
				scrollToSkills={() => scrollToRef(skillsRef)}
				scrollToProjects={() => scrollToRef(projectRef)}
				scrollToContact={() => scrollToRef(footerRef)}
			/>
			<section className='content'>
				<div className='content-header'>
					<div className='content-header__row'>
						<div className='picture'>
							<div className='picture-image__background'></div>
							<img
								className='picture-item'
								src='https://ucarecdn.com/34d0f86c-739b-444d-a717-55212f799d77/-/preview/258x259/'
								alt='my Image'
							/>
						</div>

						<div className='content-header__arrow'>
							<div>
								<img
									className='content-header__arow-image'
									src='https://ucarecdn.com/48afaeeb-9292-4493-a41b-23d3f2fe9e8f/-/preview/122x118/'
								/>
							</div>
							<div className='content-header__arow-text'>
								<span className='content-header__arow-white'>Hello! I Am</span>

								<span className='content-header__arow-purple'>
									Rustam Kidiraliyev
								</span>
							</div>
						</div>
						<div className='content-header__info'>
							<h2 className='content-header__info-title'>A Designer who</h2>
							<div className='content-header__info-row'>
								<span>Judges a book</span>
								<div className='content-header__info-text'>
									<div className='content-header__info-top'>by its</div>
									<div className='content-header__info-bg'>cover</div>
									<span>...</span>
								</div>
							</div>
							<span className='content-header_subtitle'>
								Because if the cover does not impress you what else can?
							</span>
						</div>
					</div>

					<section className='info'>
						<div className='info-title'>
							<p>I`m a Frontend Developer</p>
						</div>
						<div className='info-subtitle'>
							<sub>I`m out of work now ☹️☹️☹️</sub>
						</div>
						<div className='info-description'>
							<p>
								A self-taught UI/UX designer, functioning in the industry for 2+
								years now. I make meaningful and delightful digital products
								that create an equilibrium between user needs and business
								goals.
							</p>
						</div>
					</section>

					{/* ==========================WORk======================== */}
					<section className='work'>
						<div className='work-image__background'></div>
						<div className='work-title__text'>
							<h3>Work Experience</h3>
						</div>
						<div className='work-example'>
							{/* 1 CARD */}
							<div className='work-example__linear-purple_one'>
								<div className='work-example__linear-logo'>
									<img src='https://ucarecdn.com/f558cf7b-4724-4886-9f45-1cecbce597b8/-/preview/122x115/' />
								</div>
								<div className='work-example__linear-info'>
									<h3 className='work-example__linear-header'>
										CIB on the Mobile{' '}
									</h3>
									<sub className='work-example__linear-subtitle'>
										Take your client onboard seamlessly by our amazing tool of
										digital onboard process.
									</sub>
									<NavLink to='/' className='work-example__linear-button'>
										LEARN MORE
									</NavLink>
								</div>
							</div>
							{/* 2 CARD */}
							<div className='work-example__linear-purple'>
								<div className='work-example__linear-logo'>
									<img src='https://ucarecdn.com/7e3712c3-5058-439c-ad88-5dd8c4a2718b/-/preview/120x99/' />
								</div>
								<div className='work-example__linear-info'>
									<h3 className='work-example__linear-header'>
										CIB on the Mobile{' '}
									</h3>
									<sub className='work-example__linear-subtitle'>
										Take your client onboard seamlessly by our amazing tool of
										digital onboard process.
									</sub>
									<NavLink to='/' className='work-example__linear-button'>
										LEARN MORE
									</NavLink>
								</div>
							</div>
							<div className='work-example__linear-purple'>
								<div className='work-example__linear-logo'>
									<img src='https://ucarecdn.com/fd18892f-0141-47ff-adf6-a1db60e86e53/-/preview/120x118/' />
								</div>
								<div className='work-example__linear-info'>
									<h3 className='work-example__linear-header'>
										CIB on the Mobile{' '}
									</h3>
									<sub className='work-example__linear-subtitle'>
										Take your client onboard seamlessly by our amazing tool of
										digital onboard process.
									</sub>
									<NavLink to='/' className='work-example__linear-button'>
										LEARN MORE
									</NavLink>
								</div>
							</div>
							<div className='work-example__linear-purple-last'>
								<div className='work-example__linear-logo'>
									<img src='https://ucarecdn.com/2e680e9c-fb89-441b-b9f2-a6b826ecf14f/-/preview/114x97/' />
								</div>
								<div className='work-example__linear-info'>
									<h3 className='work-example__linear-header'>
										CIB on the Mobile{' '}
									</h3>
									<sub className='work-example__linear-subtitle'>
										Take your client onboard seamlessly by our amazing tool of
										digital onboard process.
									</sub>
									<NavLink to='/' className='work-example__linear-button'>
										LEARN MORE
									</NavLink>
								</div>
							</div>
						</div>
					</section>

					{/* SKILSS */}
					<section className='skills' ref={skillsRef}>
						<div className='skills-header'>
							<p className='skills-header__item'>
								I`m currently looking to join a{' '}
								<span className='skills-header__item-purple'>
									cross-functional{' '}
								</span>
								team <br />{' '}
								<span className='skills-header__items-mixed'>
									that values improving people`s lives through accessible design
								</span>{' '}
							</p>
						</div>

						<img
							className='skiils-images'
							src='https://ucarecdn.com/f7e9368f-8c6a-4c68-b00f-ae92bb50bda1/-/preview/895x657/'
							alt='skils image'
						/>
					</section>

					{/* ==============Examples=========== */}
					<Examples projectRef={projectRef} />

					{/* Footer */}
					<Footer navRef={footerRef} />
				</div>
			</section>
		</div>
	)
}

export default Main
