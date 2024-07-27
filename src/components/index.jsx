import Header from './header'
import Me from '../assets/images/Me.png'
import Arrow from '../assets/images/Arrow.png'
const Main = () => {
	return (
		<div>
			<Header />
			<section className='content'>
				<div className='content-header'>
					<div className='content-header__row'>
						<div className='picture'>
							<div className='picture-image__background'></div>
							<img className='picture-item' src={Me} alt='my Image' />
						</div>

						<div className='content-header__arrow'>
							<div>
								<img className='content-header__arow-image' src={Arrow} />
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
							<p>I'm a Frontend Developer</p>
						</div>
						<div className='info-subtitle'>
							<sub>I'm out of work now ☹️☹️☹️</sub>
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

					<section className='work'>
						<div className='work-image'>
							<h3>Work Experience</h3>
						</div>
						<div className='title_work'>
								<div className='tittiti'>s</div>
								<div className='tittiti'>r</div>
								<div className='tittiti'>t</div>
								<div className='tittiti'>t</div>
						</div>
					</section>
				</div>
			</section>
		</div>
	)
}

export default Main
