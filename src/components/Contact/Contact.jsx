import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './Contact.scss';
import ContactImage from '../../assets/images/contact_snake.png';

const messageSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name is required!')
		.min(2, 'Name is too short!')
		.max(20, 'Name is too long'),
	email: Yup.string()
		.email('Input email is invalid!')
		.required('Email is required!'),
	message: Yup.string()
		.required('Message is required!')
		.min(2, 'Message is too short!'),
});

const Contact = () => {
	const handleSubmit = (values, { setSubmitting }) => {
		// console.log(values);

		setSubmitting(false);
	};

	return (
		<section className="contact" id="contact">
			<div className="container">
				<h2>Contact</h2>

				<div className="contact-area">
					<div className="info-section">
						<img className='top-image' src={ContactImage} alt="" />
						<div className="title-wrapper">
						<h3>Get in touch</h3>
						</div>
						<ul>
							<li>
								<h5>Address</h5>
								<div className="contact-details">
									<i className="fas fa-map-marker-alt"></i>
									<p>Da Nang city, Viet Nam</p>
								</div>
							</li>
							<li>
								<h5>Github</h5>
								<div className="contact-details">
									<i className="fab fa-github-square"></i>
									<a
										href="https://github.com/nhanvothanh719"
										target="_blank"
										rel="noreferrer"
									>
										nhanvothanh719
									</a>
								</div>
							</li>
							<li>
								<h5>Gmail</h5>
								<div className="contact-details">
									<i className="far fa-envelope"></i>
									<a
										href="mailto:nhanvothanh719@gmail.com"
										target="_blank"
										rel="noreferrer"
									>
										nhanvothanh719@gmail.com
									</a>
								</div>
							</li>
						</ul>
					</div>

					<div className="form-section">
						<h3>Send Email</h3>
						<Formik
							initialValues={{
								name: '',
								email: '',
								message: '',
							}}
							validationSchema={messageSchema}
							onSubmit={handleSubmit}
						>
							{({ touched, errors, isSubmitting, values }) => (
								<Form
									onSubmit={(event) => {
										event.preventDefault();
										handleSubmit(values, { setSubmitting: isSubmitting });
									}}
								>
									<div>
										<Field type="text" name="name" placeholder="Name" />
										{errors.name && touched.name ? (
											<div className="error-message">
												<em>{errors.name}</em>
											</div>
										) : (
											<div style={{ visibility: 'hidden' }}>
												<em> No error </em>
											</div>
										)}
									</div>

									<div>
										<Field type="email" name="email" placeholder="Email" />
										{errors.email && touched.email ? (
											<div className="error-message">
												<em>{errors.email}</em>
											</div>
										) : (
											<div style={{ visibility: 'hidden' }}>
												<em> No error </em>
											</div>
										)}
									</div>

									<div>
										<Field as="textarea" name="message" placeholder="Message" />
										{errors.message && touched.message ? (
											<div className="error-message">
												<em>{errors.message}</em>
											</div>
										) : (
											<div style={{ visibility: 'hidden' }}>
												<em> No error </em>
											</div>
										)}
									</div>

									<button type="submit" className="submit-button">
										<div className="button-border">Submit</div>
									</button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
