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
					fill="#111729"
					fillOpacity="1"
					d="M0,128L30,128C60,128,120,128,180,154.7C240,181,300,235,360,250.7C420,267,480,245,540,213.3C600,181,660,139,720,133.3C780,128,840,160,900,160C960,160,1020,128,1080,133.3C1140,139,1200,181,1260,197.3C1320,213,1380,203,1410,197.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
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
