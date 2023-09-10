const honors = [
	{
		name: 'The Best Student of the Subject:',
		list: [
			'Software Development Life Cycle',
			'Website Design & Development',
			'Managing a Computing Project',
			'Professional Practice',
			'Networking',
			'Internet of Things',
		],
	},
	{ name: 'Top 3 Student of Spring Semester 2022' },
	{ name: 'Top 3 Student of Fall Semester 2022' },
];

const internshipExperience = [
	`First of all, by taking part in this internship, 
	I was able to better understand the fundamental web development technologies, 
	such as HTML for building web pages, CSS for style, and JavaScript for interactive elements.`,
	`Secondly, I was skilled in using Git, a version control system, 
	to efficiently and collaboratively manage code changes.`,
	`Thirdly, I understood how to design websites that fluidly adjust to various screen sizes and devices, 
	guaranteeing a consistent user experience on desktops, tablets, and phones.`,
	`What's more, I gained practical expertise with ReactJS, 
	one of the most popular front-end libraries that is extensively used in industry.`,
	`Last but not least, in addition to learning how to make use of Trello, a project management tool, 
	I acquired experience working with other developers, which is a valuable skill in 
	a professional environment.`,
];

const CoNEXTWorkingExperience = [
	`During more than 4 months working here, I worked extensively with the core languages and technologies 
	of front-end development, making me more proficient in building user interfaces.`,
	`Furthermore, I also learned how to use Figma to design the interface of a complete website 
	and then turn my design idea into an actual website. 
	This helps me in gaining a better understanding of design concepts and how they are implemented in code.`,
	`Finally, my communication skills were further refined, which are essential for 
	conveying technical concepts and updates to team members and stakeholders.`,
];

const experienceList = [
	{
		title: 'Working at CoNEXT company',
		timeRange: '06/2023 - 10/2023',
		description: (
			<>
				{CoNEXTWorkingExperience.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</>
		),
	},
	{
		title: 'Participating in the DevPlus course ',
		timeRange: '02/2023 - 04/2023',
		description: (
			<>
				{internshipExperience.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</>
		),
	},
	{
		title: 'Studying at University of Greenwich',
		timeRange: '11/2019 - 05/2023',
		description: (
			<ul>
				<li>
					<p>
						<strong>Major: </strong>Information Technology
					</p>
				</li>
				<li>
					<p>
						<strong>Achievements and Honors: </strong>
					</p>
					<ul className="honors-list">
						{honors.map((item, hIndex) => (
							<>
								<li key={hIndex}>{item.name}</li>
								{item.list && (
									<ul className="subjects-list">
										{item.list.map((subject, sIndex) => (
											<li key={sIndex}>{subject}</li>
										))}
									</ul>
								)}
							</>
						))}
					</ul>
				</li>
			</ul>
		),
	},
];

export default experienceList;
