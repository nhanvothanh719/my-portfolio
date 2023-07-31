import './Skills.scss';
import skillsList from './skillsList';
import dotsBackground from '../../assets/images/dots_background.png';

const Skills = () => {
	return (
		<section className="skills" id="skills">
			<div className="container">
				<h1>My Skills</h1>
			</div>
			<div className="skills-section">
				<img className="top-left-img" src={dotsBackground} alt="img-bg" />
				<img className="bottom-right-img" src={dotsBackground} alt="img-bg" />
				<div className="container">
					<ul className="skills-set">
						{skillsList.map((skill, index) => (
							<li key={index}>
								<img src={skill.source} alt={skill.alt} />
								<span>{skill.name}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
