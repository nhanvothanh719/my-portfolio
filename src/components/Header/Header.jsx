import './Header.scss';
import logo from '../../assets/images/full_logo.png';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import menuItems from '../../constants/menuItems';

const Header = () => {
	const mobileMenuOpenColor = 'rgba(0, 0, 0, 0.7)';
	const desktopNavbarColor = '#09203a';
	const location = useLocation();

	const [isMobile, setIsMobile] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const [navbarColor, setNavbarColor] = useState(desktopNavbarColor);

	useEffect(() => {
		const handleResize = () => {
			const isMobileScreen = window.innerWidth < 769;
			setIsMobile(isMobileScreen);

			if (isMobileScreen) {
				setNavbarColor(() =>
					showMobileMenu ? mobileMenuOpenColor : 'unset',
				);
			} else {
				setNavbarColor(desktopNavbarColor);
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
	}, [location]);

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
							{menuItems.map((item, index) => (
								<li key={index}>
									<NavLink exact to={item.href} activeclassname="active">
										{item.title}
									</NavLink>
								</li>
							))}
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
								{menuItems.map((item, index) => (
									<li key={index}>
										<NavLink exact to={item.href} activeclassname="active">
											{item.title}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
