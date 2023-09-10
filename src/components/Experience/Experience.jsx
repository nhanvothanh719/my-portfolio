import './Experience.scss';
import experienceList from './ExperienceList';

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<div className="container">
				<h1>My Experience</h1>

				<ul className="section-wrapper">
					{experienceList.map((item, index) => (
						<li key={index} className="item">
							<div className="details">
								<h4>{item.title}</h4>
								<time>{item.timeRange}</time>
								<>{item.description}</>
							</div>
							<div className="timeline">
								<div className="timeline-marker"></div>
							</div>
							<div className="timestamp">
								<time>{item.timeRange}</time>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Experience;
