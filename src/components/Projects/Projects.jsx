import './Projects.scss';
import projectIsamiGiken from '../../assets/projects/IsamiGiken.png';
import projectPlanttfy from '../../assets/projects/Planttify.png';
import projectDayOff from '../../assets/projects/DayoffManagement.png';
import projectBeeHouse from '../../assets/projects/BeeHouse.png';

const Projects = () => {
	const projectsList = [
		{
			name: 'IsamiGiken',
			image: projectIsamiGiken,
			technicalStacks: ['ReactJS', 'Laravel'],
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum
			dolore eu fugiat nulla pariatur.`,
		},
		{
			name: 'Planttify',
			image: projectPlanttfy,
			technicalStacks: ['HTML', 'Sass', 'JavaScript', 'Figma'],
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum
			dolore eu fugiat nulla pariatur.`,
		},
		{
			name: 'Day off management',
			image: projectDayOff,
			technicalStacks: ['ReactJS', 'Redux', 'NodeJS', 'MongoDB', 'Firebase'],
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum
			dolore eu fugiat nulla pariatur.`,
		},
		{
			name: 'BeeHouse',
			image: projectBeeHouse,
			technicalStacks: ['ReactJS', 'Laravel', 'MariaDB', 'AWS3'],
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum
			dolore eu fugiat nulla pariatur.`,
		},
	];

	return (
		<section className="projects">
			<div className="container">
				<h1>Typical Projects</h1>

				<ul className="projects-list">
					{projectsList.map((project, index) => (
						<li
							key={index}
							className="project-item"
							style={{ backgroundImage: `url(${project.image})` }}
						>
							<div className="project-info">
								<h5 className="project-name">{project.name}</h5>
								<ul className="used-technical-stacks">
									{project.technicalStacks.map((item, item_idx) => (
										<li key={item_idx}>{item}</li>
									))}
								</ul>
								<p className="project-description">{project.description}</p>
							</div>

							<div className="view-more">
								<i className="fa fa-info-circle" aria-hidden="true"></i>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
