import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import IntroPage from './pages/IntroPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ExperienceSkillsPage from './pages/ExperienceSkillsPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route exact path="/contact" element={<ContactPage />} />
						<Route exact path="/about" element={<AboutPage />} />
						<Route
							exact
							path="/experience-skills"
							element={<ExperienceSkillsPage />}
						/>
						<Route exact path="/projects" element={<ProjectsPage />} />
						<Route exact path="/intro" element={<Navigate to="/" />} />
						<Route exact path="/" element={<IntroPage />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
