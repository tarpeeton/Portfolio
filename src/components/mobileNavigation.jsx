import '../assets/mobileNav.css';

export const MobileNavigation = ({handleSetMenu , scrollToSkills,scrollToProjects,
	scrollToContact}) => {




  return (
    <div className='navigationMobile'>
      <div className='navigationMobile-col'>
        <div className='navigationMobile-col__item' onClick={() => scrollToSkills()}>
          <span className='navItem_name'>Skills</span>
          <span className='navigationMobile-col__svg'>
						<img src='https://ucarecdn.com/2e3a1657-24a3-4d28-a049-cd2e02619b20/'/>
					</span>
        </div>
        <div className='navigationMobile-col__item' onClick={() =>scrollToProjects()}>
          <span className='navItem_name'>Projects</span>
          <span className='navigationMobile-col__svg'>
					<img src='https://ucarecdn.com/14157a05-81c1-48cf-a463-cf21b6387ac2/'/>
					</span>
        </div>
        <div className='navigationMobile-col__item' onClick={() =>scrollToContact()}>
          <span className='navItem_name'>Contact</span>
          <span className='navigationMobile-col__svg'>
						<img src='https://ucarecdn.com/2f99ebec-135f-4c35-bc66-30c338d8a349/' alt='hu'/>
					</span>
        </div>

				<div className='mobilebutton-col'>
					<button onClick={() => handleSetMenu()}>
						<img src='https://ucarecdn.com/403fe56e-ee3d-4656-a945-0f31f2a8ddfb/'/>
					</button>
				</div>
      </div>
    </div>
  );
};
