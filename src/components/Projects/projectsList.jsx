import pBeeHouse_Dashboard from '../../assets/projects/BeeHouse/Dashboard.png';
import pBeeHouse_FrontPage from '../../assets/projects/BeeHouse/FrontPage.png';
import pBeeHouse_Balance from '../../assets/projects/BeeHouse/Balance.png';
import pBeeHouse_ViewAllUsers from '../../assets/projects/BeeHouse/ViewAllUsers.png';

import pDayOff_Chart from '../../assets/projects/DayOffManagement/Chart.png';
import pDayOff_NewRequest from '../../assets/projects/DayOffManagement/CreateNewRequest.png';
import pDayOff_Dashboard from '../../assets/projects/DayOffManagement/Dashboard.png';
import pDayOff_Login from '../../assets/projects/DayOffManagement/Login.png';
import pDayOff_Groups from '../../assets/projects/DayOffManagement/ViewAllGroups.png';
import pDayOff_Requests from '../../assets/projects/DayOffManagement/ViewAllRequests.png';
import pDayOff_Request from '../../assets/projects/DayOffManagement/ViewRequestDetails.png';

import pPlanttify_AboutUs from '../../assets/projects/Planttify/AboutUsPage.png';
import pPlanttify_BestSellings from '../../assets/projects/Planttify/BestSellingsSection.png';
import pPlanttify_ContactUs from '../../assets/projects/Planttify/ContactUsPage.png';
import pPlanttify_FrontPage from '../../assets/projects/Planttify/FrontPage.png';
import pPlanttify_News from '../../assets/projects/Planttify/NewsPage.png';
import pPlanttify_Shop from '../../assets/projects/Planttify/ShopPage.png';
import pPlanttify_Feedbacks from '../../assets/projects/Planttify/UserFeedbacksSection.png';

import pIsamiGiken_FrontPage from '../../assets/projects/IsamiGiken/FrontPage.png';
import pIsamiGiken_Info from '../../assets/projects/IsamiGiken/InfoSection.png';
import pIsamiGiken_Simulation from '../../assets/projects/IsamiGiken/SimulationPage.png';
import pIsamiGiken_Slider from '../../assets/projects/IsamiGiken/SliderSection.png';

const projectsList = [
	{
		name: 'IsamiGiken',
		images: [
			{
				src: pIsamiGiken_FrontPage,
				desc: '...',
			},
			{
				src: pIsamiGiken_Slider,
				desc: '...',
			},
			{
				src: pIsamiGiken_Info,
				desc: '...',
			},
			{
				src: pIsamiGiken_Simulation,
				desc: '...',
			},
		],
		technicalStacks: ['ReactJS', 'Laravel'],
		description: `This website was designed for IsamiGiken company which specializes in construction in Japan. `,
		footer: (
			<>
				<a
					href="https://github.com/nhanvothanh719/IsamiGiken"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-github-square"></i>
					<span>Code</span>
				</a>
				<a
					href="http://vo-thanh-nhan.gattscom.com/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fas fa-external-link-alt"></i>
					<span>Live</span>
				</a>
			</>
		),
	},
	{
		name: 'Planttify',
		images: [
			{
				src: pPlanttify_FrontPage,
				desc: '...',
			},
			{
				src: pPlanttify_BestSellings,
				desc: '...',
			},
			{
				src: pPlanttify_Feedbacks,
				desc: '...',
			},
			{
				src: pPlanttify_AboutUs,
				desc: '...',
			},
			{
				src: pPlanttify_Shop,
				desc: '...',
			},
			{
				src: pPlanttify_News,
				desc: '...',
			},
			{
				src: pPlanttify_ContactUs,
				desc: '...',
			},
		],
		technicalStacks: ['Figma', 'HTML', 'Sass', 'JavaScript'],
		description: `Following the design I had previously made in Figma, 
		I carefully developed this website. Specifically designed for online tree shops, 
		this platform includes numerous pages. 
		Each page has been thoughtfully designed to ensure a cohesive and engaging online experience.`,
		footer: (
			<>
				<a
					href="https://www.figma.com/file/Y3x243d55QIwdXDjV9IB9m/Selling-Plants?type=design&node-id=0-1&mode=design"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-figma"></i>
					<span>Design</span>
				</a>
				<a href="/" target="_blank" rel="noreferrer">
					<i className="fab fa-github-square"></i>
					<span>Code</span>
				</a>
				<a
					href="http://vn-wp-nhan.gattscom.com/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fas fa-external-link-alt"></i>
					<span>Live</span>
				</a>
			</>
		),
	},
	{
		name: 'Day off management',
		images: [
			{
				src: pDayOff_Dashboard,
				desc: '...',
			},
			{
				src: pDayOff_Chart,
				desc: '...',
			},
			{
				src: pDayOff_Requests,
				desc: '...',
			},
			{
				src: pDayOff_Request,
				desc: '...',
			},
			{
				src: pDayOff_NewRequest,
				desc: '...',
			},
			{
				src: pDayOff_Groups,
				desc: '...',
			},
			{
				src: pDayOff_Login,
				desc: '...',
			},
		],
		technicalStacks: ['ReactJS', 'Redux', 'NodeJS', 'MongoDB', 'Firebase'],
		description: `This website was developed with the main purpose of managing employee day offs and 
		Slack channels within a company.`,
		footer: (
			<>
				<a
					href="https://github.com/nhanvothanh719/final-project-SRS/tree/develop"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-github-square"></i>
					<span>Code</span>
				</a>
				<a
					href="https://log-off-management.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fas fa-external-link-alt"></i>
					<span>Live</span>
				</a>
			</>
		),
	},
	{
		name: 'BeeHouse',
		images: [
			{
				src: pBeeHouse_FrontPage,
				desc: '...',
			},
			{
				src: pBeeHouse_Dashboard,
				desc: '...',
			},
			{
				src: pBeeHouse_Balance,
				desc: '...',
			},
			{
				src: pBeeHouse_ViewAllUsers,
				desc: '...',
			},
		],
		technicalStacks: ['ReactJS', 'Laravel', 'MariaDB', 'AWS3'],
		description: `This web application was developed in order to replace the traditional way 
		to manage the boarding house by assisting the landlord in managing both tenants and rooms, 
		generating monthly invoices, and assisting the renter in making online payments.`,
		footer: (
			<>
				<a href="/" target="_blank" rel="noreferrer">
					<i className="fab fa-github-square"></i>
					<span>Code</span>
				</a>
				<a
					href="https://drive.google.com/file/d/1_15rAQNsZPqip3yOedUO-vhHBbU7rKhB/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					<i className="far fa-play-circle"></i>
					<span>Demo</span>
				</a>
			</>
		),
	},
];

export default projectsList;
