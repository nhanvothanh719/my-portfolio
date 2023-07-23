import './Header.scss';
import logo from '../../assets/images/full_logo.png';
import { useEffect, useState } from 'react';

const Header = () => {

	const mobileMenuOpenColor = 'rgba(0, 0, 0, 0.7)';

	const [isMobile, setIsMobile] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [mobileMenuColor, setMobileMenuColor] = useState('unset');

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 769) {
				setIsMobile(true);
				showMobileMenu && setMobileMenuColor(mobileMenuOpenColor);
			} else {
				setIsMobile(false);
				setMobileMenuColor('unset');
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [showMobileMenu]);

	useEffect(() => {
		setShowMobileMenu(false);
		setMobileMenuColor('unset');
	}, [location]);

	const openMobileMenu = () => {
		if (showMobileMenu) {
			setShowMobileMenu(false);
			setMobileMenuColor('unset');
		} else {
			setShowMobileMenu(true);
			isMobile && setMobileMenuColor(mobileMenuOpenColor);
		}
	};

	return (
		<header style={{ backgroundColor: mobileMenuColor }}>
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
