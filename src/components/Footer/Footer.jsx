import './Footer.scss';
import footerImg from '../../assets/images/dev_logo.png';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#6de14a"
					fillOpacity="1"
					d="M0,96L17.1,122.7C34.3,149,69,203,103,197.3C137.1,192,171,128,206,122.7C240,117,274,171,309,186.7C342.9,203,377,181,411,170.7C445.7,160,480,160,514,160C548.6,160,583,160,617,165.3C651.4,171,686,181,720,197.3C754.3,213,789,235,823,218.7C857.1,203,891,149,926,138.7C960,128,994,160,1029,176C1062.9,192,1097,192,1131,197.3C1165.7,203,1200,213,1234,186.7C1268.6,160,1303,96,1337,74.7C1371.4,53,1406,75,1423,85.3L1440,96L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
				></path>
			</svg>

			<div className="end-section">
				<div className="back-to-top" onClick={scrollToTop}>
					<i className="fas fa-angle-double-up"></i>
				</div>
				<div className="footer-info">
					<img src={footerImg} alt="footer-img" />
					<p>Thank you for watching</p>
					<img src={footerImg} alt="footer-img" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
