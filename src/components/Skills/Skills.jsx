import './Skills.scss';
import skillsList from './skillsList';

const Skills = () => {
	return (
			<section className="skills" id="skills">
				<div className="container">
					<h1>My Skills</h1>
					<ul className="skills-set">
						{skillsList.map((skill, index) => (
							<li key={index}>
								<img src={skill.source} alt={skill.alt} />
								<span>{skill.name}</span>
							</li>
						))}
					</ul>
				</div>
			</section>
	);
};

export default Skills;
