import { useEffect, useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';

import projectsList from './projectsList';
import './Projects.scss';

const Projects = () => {
	const [openModal, setOpenModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState({});

	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		console.log(selectedProject);
		setImageIndex(0);
	}, [selectedProject]);

	console.log(imageIndex);

	const displayProjectDetails = (project) => {
		setSelectedProject(project);
		setOpenModal(true);
	};

	const closeModal = () => {
		setOpenModal(false);
	};

	const selectImage = (selectedIndex) => {
		setImageIndex(selectedIndex);
	};

	return (
		<section className="projects" id="projects">
			<div className="container">
				<h1>Typical Projects</h1>

				<ul className="projects-list">
					{projectsList.map((project, index) => (
						<li
							key={index}
							className="project-item"
							style={{ backgroundImage: `url(${project.images[0].src})` }}
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
								<i
									className="fa fa-info-circle"
									aria-hidden="true"
									onClick={() => displayProjectDetails(project)}
								></i>
							</div>
						</li>
					))}
				</ul>

				{selectedProject &&
					selectedProject.images &&
					selectedProject.images.length > 0 && (
						<Modal
							size="lg"
							aria-labelledby="contained-modal-title-vcenter"
							dialogClassName="dark-mode-modal"
							centered
							show={openModal}
							onHide={closeModal}
						>
							<Modal.Header closeButton>
								<Modal.Title>{selectedProject.name}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<p>{selectedProject.description}</p>
								<div className="project-images-wrapper">
									<Carousel activeIndex={imageIndex} onSelect={selectImage}>
										{selectedProject?.images?.map((img, index) => {
											console.log(img);
											return (
												<Carousel.Item key={index}>
													<img
														className="d-block w-100"
														src={img.src}
														alt={`project-image-${index}`}
													/>
													<Carousel.Caption>
														<p>{img.desc}</p>
													</Carousel.Caption>
												</Carousel.Item>
											);
										})}
									</Carousel>
								</div>
							</Modal.Body>
							<Modal.Footer>{selectedProject.footer}</Modal.Footer>
						</Modal>
					)}
			</div>
		</section>
	);
};

export default Projects;
