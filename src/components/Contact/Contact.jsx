import './Contact.scss';

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="container">
				<h1>Contact</h1>

				<div className="contact-area">
					<div className="info-section">
						<h3>Get in touch</h3>
						<ul>
							<li>
								<i className="fas fa-map-marker-alt"></i>
								<p>Da Nang city, Viet Nam</p>
							</li>
							<li>
								<i className="fab fa-github-square"></i>
								<a
									href="https://github.com/nhanvothanh719"
									target="_blank"
									rel="noreferrer"
								>
									_nhan_vo_thanh_719_
								</a>
							</li>
							<li>
								<i className="far fa-envelope"></i>
								<a
									href="mailto:nhanvothanh719@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									nhanvothanh719@gmail.com
								</a>
							</li>
						</ul>
					</div>
					<div className="form-section"></div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
