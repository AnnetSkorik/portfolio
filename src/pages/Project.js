import { useState } from "react";
import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";

const Project = () => {
    const { id } = useParams();
    const project = projects[id];
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleImageClick = () => {
        if (project.projectLink) {
            window.location.href = project.projectLink;
        }
    };

    const handleMouseEnter = () => {
        setTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };

    const handleMouseMove = (event) => {
        setTooltipPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <div className="project-image-wrapper" style={{ position: 'relative' }}>
                        <img
                            src={project.imgBig}
                            alt={project.title}
                            className="project-details__cover"
                            onClick={handleImageClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            style={{ cursor: 'pointer' }}
                        />
                        {tooltipVisible && (
                            <span
                                className="tooltip"
                                style={{
                                    position: 'fixed',
                                    top: tooltipPosition.y + 10, // Добавляем небольшое смещение по Y
                                    left: tooltipPosition.x + 10, // Добавляем небольшое смещение по X
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontSize: '12px',
                                    zIndex: 10,
                                    pointerEvents: 'none' // Чтобы не блокировать взаимодействие с картинкой
                                }}
                            >
                                Go to website
                            </span>
                        )}
                    </div>

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Project;
