import './Experience.scss';
import experienceList from './ExperienceList';

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<div className="container">
				<h2>My Experience</h2>
				<ul className="section-wrapper">
					{experienceList.map((item, index) => (
						<li key={index} className="item">
							<div className="details">
								<h4>{item.title}</h4>
								<span className="timestamp-details">{item.timeRange}</span>
								<>{item.description}</>
							</div>
							<div className="timeline">
								<div className="timeline-marker"></div>
							</div>
							<div className="timestamp">
								<span>{item.timeRange}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Experience;
