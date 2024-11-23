function ProjectSlide ({ title, description, techStack, role, image, codeLink, projectLink }) {
    return (
        <div className="p-10 bg-white bg-opacity-20 text-white rounded-2xl max-w-full">
            <div className="flex flex-col">
                <div className="flex flex-col justify-between mb-5">
                    <div className="flex items-center justify-center mb-3 ">
                        <img
                            className="w-[320px] h-[320px] mb-3 fill"
                            src={image}
                            alt={`${title} thumbnail`}
                        />
                    </div>
                    <div className="flex flex-col text-[16px] w-[320px]">
                        <div className="text-blue text-[24px] mb-3">{title}</div>
                        <div className="flex flex-col content-between">
                        <div className="mb-8">
                            <div>{description}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="text-blue mr-2">Tech Stack:</div>
                            <div>{techStack}</div>
                        </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="text-blue mr-2 mb-2">Role:</div>
                            <div>{role}</div>
                        </div>
                    </div>
                    
                </div>

                {/* Buttons */}
                <div className="flex flex-row space-x-3 justify-between">
                    <a
                        className="bg-blue px-5 py-2 text-[16px] rounded-full text-white"
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Code
                    </a>
                    <a
                        className="bg-white text-blue px-5 py-2 text-[16px] rounded-full"
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide;