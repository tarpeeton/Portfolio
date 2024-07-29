import Header from './header'
import Me from '../assets/images/Me.png'
import Arrow from '../assets/images/Arrow.png'
import Cofe from '../assets/images/work/3.png'
import { NavLink } from 'react-router-dom'
import For from '../assets/images/work/4.png'
import One from '../assets/images/work/1.png'
import Two from '../assets/images/work/2.png'
import Skills from '../assets//images/Skills.png'
import github from '../assets/images/github.svg'
import telegramImg from '../assets/images/telegram.svg'

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
									<img src={One} />
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
									<img src={Two} />
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
									<img src={Cofe} />
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
									<img src={For} />
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
					<section className='skills'>
						<div className='skills-header'>
							<p className='skills-header__item'>
								I'm currently looking to join a{' '}
								<span className='skills-header__item-purple'>
									cross-functional{' '}
								</span>
								team <br />{' '}
								<span className='skills-header__items-mixed'>
									that values improving people's lives through accessible design
								</span>{' '}
							</p>
						</div>

						<img className='skiils-images' src={Skills} alt='skils image' />
					</section>

					{/* ==============Examples=========== */}
					<section className='examples'>
						<div  className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
											RMS-Gaming
										</span>
										<div className='examples-items__description'>
										RMS Gaming
The best platform to buy games
RMS Gaming is the best place for gaming fans. Through our platform, you can easily and quickly buy the newest and most popular games. RMS Gaming not only allows you to buy games, but also gives you the opportunity to get detailed information about games and write reviews on them.
										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton/Rms_gaming'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>
									<div style={{marginLeft: "-25px"}} className='examples-item__row-project'>
										<img className='example-image' src='https://ucarecdn.com/be64ac7a-13b8-4230-a977-b2e77883f661/-/preview/1000x537/'/>
									</div>
								</div>
							</div>
						</div>
						{/* 2 */}






						<div className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-project'>
									<img className='example-image' src='https://ucarecdn.com/8390f49f-6eb1-43c5-a087-bc1af4ffbc92/-/preview/1000x559/'/>
									</div>
									<div style={{marginLeft:"10px"}}  className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
											MegaShop
										</span>
										<div className='examples-items__description'>
											
Megashop
A new level of online shopping
Megashop is the best platform for online shopping of various types of products. We provide you with a convenient and pleasant shopping experience through our wide range, competitive prices and superior customer service.
										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton/megashop_frontend'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
{/* 3 */}






						<div className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
										OkayPost
										</span>
										<div className='examples-items__description'>
										OkayPost
Delivery of products from Britain to Uzbekistan
OkeyPost is a reliable and fast service for delivering goods from the UK to Uzbekistan. With our help, you can easily order products available in the UK and deliver them to Uzbekistan. OkeyPost provides convenience, security and speed for our customers.
										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton/OkeyPost_Online'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>

									<div  style={{marginLeft: "-25px"}} className='examples-item__row-project'>
									<img className='example-image' src='https://ucarecdn.com/65db1b0b-21fe-445f-aa64-57f997ed6c3b/-/preview/1000x542/'/>
									</div>
								</div>
							</div>
						</div>
						{/* 4 */}

						



						<div className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-project'>
									<img className='example-image' src='https://ucarecdn.com/ed122bd0-fab6-408c-8db3-f04dd90d34b7/-/preview/999x548/'/>
									</div>
									<div style={{marginLeft:"10px"}}  className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
										Digian
										</span>
										<div className='examples-items__description'>
										Digital Marketing Marketing Services
										Digian is a full support computer marketing platform. Our help is to help you develop and renew your online business. Offering senior leadership in all areas of marketing for us.
										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton/Digital-marketing'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 5 */}




						<div className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
										Mico
										Hospital
										</span>
										<div className='examples-items__description'>
										Online management service
Mico Hospital is a platform that provides modern medical services online. Our goal is to provide patients with convenient and fast access to medical advice. Through Mico Hospital, you can have an online consultation, receive medical advice and monitor your health with a skilled user.

										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton/Micro-hospital'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>

									<div  style={{marginLeft: "-25px"}} className='examples-item__row-project'>
									<img className='example-image' src='https://ucarecdn.com/7554b69c-ff6f-4031-b716-e94232d6a1ee/-/preview/1000x550/'/>
									</div>
								</div>
							</div>
						</div>
						{/* 6 */}



						<div className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-project'>
									<img className='example-image' src='https://ucarecdn.com/0f412de4-4ebb-4ef4-93db-51278f3b72c3/-/preview/999x540/'/>
									</div>
									<div style={{marginLeft:"10px"}}  className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
										Finexo

										</span>
										<div className='examples-items__description'>
										Safe and convenient trading with cryptocurrencies
										Finexo Crypto Currency is a reliable and secure platform for trading and using cryptocurrencies. Through our services, you can buy, sell and store cryptocurrencies. With Finexo, we offer a reliable and convenient way to trade in the world of cryptocurrencies.
										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton/Finexo'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 7 */}



						<div className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
											Seninstar
										</span>
										<div className='examples-items__description'>
										Online music player
Seninstar is an online music player specially designed for music lovers. Through our platform, you can listen to your favorite songs anytime and anywhere. Dive into the world of music with Seninstar and enjoy an unforgettable music experience.
										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>

									<div  style={{marginLeft: "-25px"}} className='examples-item__row-project'>
									<img className='example-image' src='https://ucarecdn.com/595c8f01-a754-4848-a327-f8de1c0548cc/-/preview/999x551/'/>
									</div>
								</div>
							</div>
						</div>
						{/* 6 */}



						<div className='examples-item'>
							<div className='examples-item__row'>
								<div className='examples-item__row-images'>
									<div className='examples-item__row-project'>
									<img className='example-image' src='https://ucarecdn.com/8afa202e-7861-48bb-aa9e-6e83a57e3c55/-/preview/999x605/'/>
									</div>
									<div style={{marginLeft:"10px"}}  className='examples-item__row-text'>
										<span className='examples-items__header'>
											Featured Project
										</span>
										<span className='examples-items__title'>
											Bio Pharm
										</span>
										<div className='examples-items__description'>
										BioPharm
Natural healing products
BioPharm is a company that provides natural healing products. Our goal is to improve your health in natural and safe ways. BioPharm products are distinguished by their high quality and efficiency.
										</div>
										<div className='examples-links'>
											<div className='github'>
												<img src={github} />
												<NavLink
													className='examples-links__text'
													to='https://github.com/tarpeeton/bio_farm_frontend'
												>
													Source Code
												</NavLink>
											</div>
											<div className='telegram'>
												<img src={telegramImg} />
												<NavLink
													className='examples-links__text'
													to='https://t.me/tot_rustem'
												>
													Telegram
												</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 7 */}









						{/* END */}
					</section>
				</div>
			</section>
		</div>
	)
}

export default Main
