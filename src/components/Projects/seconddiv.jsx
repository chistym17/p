import PropTypes from "prop-types";

const ProjectSection = ({
  name,
  type,
  techStack,
  description,
  githubLink,
  liveLink,
  images,
}) => {
  return (
    <div className="bg-[#f9e9f0] rounded-2xl h-auto mt-2 md:mt-5 px-6 sm:px-10 md:px-16 font-raleway">
      <div className="flex flex-col md:flex-row-reverse p-6 mb-6 rounded-lg">
        {/* Right Side: Project Description */}
        <div className="md:w-[60%] w-full mb-4 md:mb-0 md:ml-10">
          {/* Project Name and Links */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#e27396] font-rancho">
              {name} {/* Rancho font for the project name */}
            </h2>
          </div>

          {/* Project Type */}
          <p className="text-[#9cadce] italic mb-4">{type}</p>

          {/* Tech Stack */}
          <p className="text-[#7ec4cf] font-semibold mb-6">
            Technology Used: {techStack}
          </p>

          {/* Project Description with Bullet Points */}
          <ul className="list-disc list-inside text-[#4a4a4a] space-y-3">
            {description && description.length > 0 ? (
              description.map((line, index) => <li key={index}>{line}</li>)
            ) : (
              <li>No description available</li> // Fallback message
            )}
          </ul>

          <div className="flex space-x-4 mt-10 ml-6 md:ml-0">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#ea9ab2] px-6 py-2 rounded-md shadow-md font-medium transition duration-200"
            >
              GitHub
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#d1cfe2] px-6 py-2 rounded-md shadow-md font-medium transition duration-200"
            >
              Live
            </a>
          </div>
        </div>

        {/* Left Side: Photo Section */}
        <div className="md:w-[40%] w-full flex flex-col justify-between mb-4 md:mb-0">
          {/* Single Image for Small and Large Devices */}
          <div className="w-full p-1">
            <img
              src={images[0]} // Only the first image will be used
              alt="Project Image"
              className="rounded-lg object-cover border-none" // Removed extra border
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectSection.defaultProps = {
  description: [],
};

ProjectSection.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectSection;
