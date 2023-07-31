import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import { Element } from 'react-scroll';
import ParticleBackground from './components/Particles/Particles';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<ParticleBackground />
					<Element name="intro">
						<Intro />
					</Element>
					<Element name="experience">
						<Experience />
					</Element>
					<Element name="skills">
						<Skills />
					</Element>
					<Element name="project">
						<Projects />
					</Element>
					<Element name="contact">
						<Contact />
					</Element>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
