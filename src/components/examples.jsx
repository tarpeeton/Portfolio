import { NavLink } from 'react-router-dom'

const sources = 'https://ucarecdn.com/96401127-7fda-4c7f-b054-3a6c77bceff6/'
const sourcesImg = 'https://ucarecdn.com/cc968b90-f2c9-440d-b9aa-201ae476fb9f/'
const webIcon = 'https://ucarecdn.com/dc04f694-2319-41de-a9a3-a8978a31bb7e/'

// eslint-disable-next-line react/prop-types
const Examples = ({ projectRef }) => {
	return (
		<section className='examples' ref={projectRef}>
			{/* Example Item 1 */}
			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-text'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>RMS-Gaming</span>
							<div className='examples-items__description'>
								RMS Gaming The best platform to buy games RMS Gaming is the best
								place for gaming fans. Through our platform, you can easily and
								quickly buy the newest and most popular games. RMS Gaming not
								only allows you to buy games, but also gives you the opportunity
								to get detailed information about games and write reviews on
								them.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src='https://ucarecdn.com/96401127-7fda-4c7f-b054-3a6c77bceff6/' />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton/Rms_gaming'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} />
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://rms-gaming.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>
						<div className='examples-item__row-project margin__left'>
							<img
								className='example-image'
								src='https://ucarecdn.com/be64ac7a-13b8-4230-a977-b2e77883f661/-/preview/1000x537/'
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Example Item 2 */}

			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-project'>
							<img
								className='example-image'
								src='https://ucarecdn.com/8390f49f-6eb1-43c5-a087-bc1af4ffbc92/-/preview/1000x559/'
							/>
						</div>
						<div className='examples-item__row-text row_text--margin'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>MegaShop</span>
							<div className='examples-items__description'>
								Megashop A new level of online shopping Megashop is the best
								platform for online shopping of various types of products. We
								provide you with a convenient and pleasant shopping experience
								through our wide range, competitive prices and superior customer
								service.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src={sources} />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton/megashop_frontend'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} className='telegram_user_source '/>
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://megashop-eta.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Example Item 3 */}

			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-text'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>OkayPost</span>
							<div className='examples-items__description'>
								OkayPost Delivery of products from Britain to Uzbekistan
								OkeyPost is a reliable and fast service for delivering goods
								from the UK to Uzbekistan. With our help, you can easily order
								products available in the UK and deliver them to Uzbekistan.
								OkeyPost provides convenience, security and speed for our
								customers.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src={sources} />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton/OkeyPost_Online'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} />
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://okeypost-tau.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>

						<div className='examples-item__row-project  margin__left'>
							<img
								className='example-image'
								src='https://ucarecdn.com/65db1b0b-21fe-445f-aa64-57f997ed6c3b/-/preview/1000x542/'
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Example Item 4 */}

			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-project'>
							<img
								className='example-image'
								src='https://ucarecdn.com/ed122bd0-fab6-408c-8db3-f04dd90d34b7/-/preview/999x548/'
							/>
						</div>
						<div className='examples-item__row-text row_text--margin'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>Digian</span>
							<div className='examples-items__description'>
								Digital Marketing Marketing Services Digian is a full support
								computer marketing platform. Our help is to help you develop and
								renew your online business. Offering senior leadership in all
								areas of marketing for us.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src={sources} />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton/Digital-marketing'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} />
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://marketing-phi-one.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Example Item 5 */}

			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-text'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>Mico Hospital</span>
							<div className='examples-items__description'>
								Online management service Mico Hospital is a platform that
								provides modern medical services online. Our goal is to provide
								patients with convenient and fast access to medical advice.
								Through Mico Hospital, you can have an online consultation,
								receive medical advice and monitor your health with a skilled
								user.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src={sources} />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton/Micro-hospital'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} />
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://micro-hospital.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>

						<div className='examples-item__row-project   margin__left'>
							<img
								className='example-image'
								src='https://ucarecdn.com/7554b69c-ff6f-4031-b716-e94232d6a1ee/-/preview/1000x550/'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Example Item 6 */}

			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-project'>
							<img
								className='example-image'
								src='https://ucarecdn.com/0f412de4-4ebb-4ef4-93db-51278f3b72c3/-/preview/999x540/'
							/>
						</div>
						<div className='examples-item__row-text row_text--margin'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>Finexo</span>
							<div className='examples-items__description'>
								Safe and convenient trading with cryptocurrencies Finexo Crypto
								Currency is a reliable and secure platform for trading and using
								cryptocurrencies. Through our services, you can buy, sell and
								store cryptocurrencies. With Finexo, we offer a reliable and
								convenient way to trade in the world of cryptocurrencies.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src={sources} />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton/Finexo'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} />
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://finexo-murex.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Example Item 7 */}

			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-text'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>Seninstar</span>
							<div className='examples-items__description'>
								Online music player Seninstar is an online music player
								specially designed for music lovers. Through our platform, you
								can listen to your favorite songs anytime and anywhere. Dive
								into the world of music with Seninstar and enjoy an
								unforgettable music experience.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src={sources} />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} />
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://seninstar.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>

						<div className='examples-item__row-project margin__left'>
							<img
								className='example-image'
								src='https://ucarecdn.com/595c8f01-a754-4848-a327-f8de1c0548cc/-/preview/999x551/'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Example Item 8 */}

			<div className='examples-item'>
				<div className='examples-item__row'>
					<div className='examples-item__row-images'>
						<div className='examples-item__row-project'>
							<img
								className='example-image'
								src='https://ucarecdn.com/8afa202e-7861-48bb-aa9e-6e83a57e3c55/-/preview/999x605/'
							/>
						</div>
						<div className='examples-item__row-text row_text--margin'>
							<span className='examples-items__header'>Featured Project</span>
							<span className='examples-items__title'>Bio Pharm</span>
							<div className='examples-items__description'>
								BioPharm Natural healing products BioPharm is a company that
								provides natural healing products. Our goal is to improve your
								health in natural and safe ways. BioPharm products are
								distinguished by their high quality and efficiency.
							</div>
							<div className='examples-links'>
								<div className='sources'>
									<img src={sources} />
									<NavLink
										className='examples-links__text'
										to='https://sources.com/tarpeeton/bio_farm_frontend'
									>
										Source Code
									</NavLink>
								</div>
								<div className='sources'>
									<img src={sourcesImg} />
									<NavLink
										className='examples-links__text'
										to='https://t.me/tot_rustem'
									>
										Telegram
									</NavLink>
								</div>
								<div className='sources'>
									<img src={webIcon} alt='Web Icon' />
									<NavLink
										className='examples-links__text'
										to='https://bio-farm-frontend.vercel.app/'
									>
										Web
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export { Examples }
