import pBeeHouse_Dashboard from '../../assets/projects/BeeHouse/Dashboard.png';
import pBeeHouse_FrontPage from '../../assets/projects/BeeHouse/FrontPage.png';

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
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pIsamiGiken_Slider,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pIsamiGiken_Info,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pIsamiGiken_Simulation,
                desc: 'Lorem ipsum dolor sit amet'
            }
        ],
		technicalStacks: ['ReactJS', 'Laravel'],
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
		do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute
		irure dolor in reprehenderit in voluptate velit esse cillum
		dolore eu fugiat nulla pariatur.`,
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
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pPlanttify_BestSellings,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pPlanttify_Feedbacks,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pPlanttify_AboutUs,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pPlanttify_Shop,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pPlanttify_News,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pPlanttify_ContactUs,
                desc: 'Lorem ipsum dolor sit amet'
            }
        ],
		technicalStacks: ['HTML', 'Sass', 'JavaScript', 'Figma'],
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
		do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute
		irure dolor in reprehenderit in voluptate velit esse cillum
		dolore eu fugiat nulla pariatur.`,
		footer: (
			<>
				<a href="https://www.figma.com/file/Y3x243d55QIwdXDjV9IB9m/Selling-Plants?type=design&node-id=0-1&mode=design" target="_blank" rel="noreferrer">
					<i className="fab fa-figma"></i>
					<span>Design</span>
				</a>
				<a href="/" target="_blank" rel="noreferrer">
					<i className="fab fa-github-square"></i>
					<span>Code</span>
				</a>
				<a href="http://vn-wp-nhan.gattscom.com/" target="_blank" rel="noreferrer">
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
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pDayOff_Chart,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pDayOff_Requests,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pDayOff_Request,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pDayOff_NewRequest,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pDayOff_Groups,
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pDayOff_Login,
                desc: 'Lorem ipsum dolor sit amet'
            },
        ],
		technicalStacks: ['ReactJS', 'Redux', 'NodeJS', 'MongoDB', 'Firebase'],
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
		do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute
		irure dolor in reprehenderit in voluptate velit esse cillum
		dolore eu fugiat nulla pariatur.`,
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
				<a href="https://log-off-management.netlify.app/" target="_blank" rel="noreferrer">
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
                desc: 'Lorem ipsum dolor sit amet'
            },
            {
                src: pBeeHouse_Dashboard,
                desc: 'Lorem ipsum dolor sit amet'
            }
        ],
		technicalStacks: ['ReactJS', 'Laravel', 'MariaDB', 'AWS3'],
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
		do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute
		irure dolor in reprehenderit in voluptate velit esse cillum
		dolore eu fugiat nulla pariatur.`,
		footer: (
			<>
				<a href="/" target="_blank" rel="noreferrer">
					<i className="fab fa-github-square"></i>
					<span>Code</span>
				</a>
				<a href="/" target="_blank" rel="noreferrer">
					<i className="far fa-play-circle"></i>
					<span>Demo</span>
				</a>
			</>
		),
	},
];

export default projectsList;