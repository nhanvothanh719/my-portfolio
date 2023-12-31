import './Intro.scss';
import myImg from '../../assets/images/my_img.png';
import { useEffect, useState } from 'react';

const Intro = () => {
	const phrases = ['Vo Thanh Nhan', 'a Full Stack Developer'];
	const typingSpeed = 200;
	const pauseDuration = 3000;
	const deleteSpeed = 200;

	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const currentPhrase = phrases[currentIndex];
		const targetText = isDeleting ? '' : currentPhrase;

		const textLength = displayText.length;

		if (displayText !== targetText) {
			const speed = isDeleting ? deleteSpeed : typingSpeed;

			const timer = setTimeout(() => {
				if (isDeleting) {
					setDisplayText((prevDisplayText) => prevDisplayText.slice(0, -1));
				} else {
					setDisplayText(targetText.slice(0, textLength + 1));
				}
			}, speed);

			return () => clearTimeout(timer);
		} else {
			if (!isDeleting) {
				setTimeout(() => setIsDeleting(true), pauseDuration);
			} else {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
				setIsDeleting(false);
			}
		}
	}, [displayText, currentIndex, isDeleting]);

	useEffect(() => {
		const cursorTimer = setInterval(() => {
			setShowCursor((prevShowCursor) => !prevShowCursor);
		}, 500);

		return () => clearInterval(cursorTimer);
	}, []);

	return (
		<section className="intro" id="intro">
			<div className="container">
				<div className="section-text">
					<h2>Introduction</h2>
					<h3>
						{`I'm`} <strong className="change-text">{displayText}</strong>
						<strong className="cursor">{showCursor ? '|' : ''}</strong>
					</h3>
					<p>
						Welcome to my{' '}
						<strong>
							{' '}
							{'<'}Portfolio{'>'}
						</strong>
						!
					</p>
					<p>
						{
							`Hello there! My name is `}<strong>Vo Thanh Nhan</strong>{`. I'm a
							passionate Full Stack Developer who has a strong focus on building
							user-friendly and efficient web applications. I'm excited to
							showcase my journey and the projects I've been working on, so let's
							dive in!`
						}
					</p>
					<div className="view-cv-button">
						<a
							href="https://drive.google.com/file/d/12_0RUvafejWlvd_1TuaWMHtOqh4GUOI2/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							View My CV
						</a>
					</div>
				</div>
				<div className="section-image">
					<img src={myImg} alt="my-image" />
				</div>
			</div>
		</section>
	);
};

export default Intro;
