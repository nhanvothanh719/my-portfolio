import './Header.scss';
import logo from '../../assets/images/full_logo.png';
import { useEffect, useState } from 'react';

const Header = () => {
	const mobileMenuOpenColor = 'rgba(0, 0, 0, 0.7)';
	const desktopNavbarColor = '#09203a';

	const [isMobile, setIsMobile] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const [navbarColor, setNavbarColor] = useState(desktopNavbarColor);

	useEffect(() => {
		const handleResize = () => {
			const isMobileScreen = window.innerWidth < 769;
			setIsMobile(isMobileScreen);

			if (isMobileScreen) {
				setNavbarColor(() => {
					if (showMobileMenu) {
						return mobileMenuOpenColor;
					} else {
						return 'unset';
					}
				});
			} else {
				setNavbarColor(desktopNavbarColor);
				setShowMobileMenu(false);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const openMobileMenu = () => {
		if (isMobile) {
			if (showMobileMenu) {
				setShowMobileMenu(false);
				setNavbarColor('unset');
			} else {
				setShowMobileMenu(true);
				setNavbarColor(mobileMenuOpenColor);
			}
		}
	};

	return (
		<header style={{ backgroundColor: navbarColor }}>
			<div className="normal-navbar">
				<div className="container">
					<img src={logo} alt="my-logo" />

					<nav>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">About</a>
							</li>
							<li>
								<a href="/">Experience + Skills</a>
							</li>
							<li>
								<a href="/">Projects</a>
							</li>
							<li>
								<a href="/">Resume</a>
							</li>
							<li>
								<a href="/">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div
				className={showMobileMenu ? 'mobile-navbar active' : 'mobile-navbar'}
			>
				<div className="container">
					<div className="header-section">
						<div className="hamburger-button" onClick={openMobileMenu}>
							<span className="white-line"></span>
							<span className="white-line"></span>
							<span className="white-line"></span>
						</div>
					</div>
					<div className="menu-section">
						<nav>
							<ul>
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/">About</a>
								</li>
								<li>
									<a href="/">Experience + Skills</a>
								</li>
								<li>
									<a href="/">Projects</a>
								</li>
								<li>
									<a href="/">Resume</a>
								</li>
								<li>
									<a href="/">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
