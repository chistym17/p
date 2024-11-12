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
    <div className="bg-[#f9e9f0] rounded-2xl h-auto mt-2 md:mt-5 px-6 sm:px-10 md:px-16 font-raleway p-6">
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
        {/* Single Image Section */}
        {images && images.length > 0 && (
          <div className="md:w-[40%] w-full flex justify-center mb-6 md:mb-0 md:ml-6">
            <img
              src={images[0]} // Only the first image in the array is used
              alt={`${name} screenshot`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Text Section */}
        <div className="md:w-[60%] w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#e27396] font-rancho">
              {name}
            </h2>
          </div>
          <p className="text-[#9cadce] italic mb-4">{type}</p>
          <p className="text-[#7ec4cf] font-semibold mb-6">
            Technology Used: {techStack}
          </p>
          <ul className="list-disc list-inside text-[#4a4a4a] space-y-3">
            {description && description.length > 0 ? (
              description.map((line, index) => <li key={index}>{line}</li>)
            ) : (
              <li>No description available</li>
            )}
          </ul>
          <div className="flex space-x-4 mt-10">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#c75b82] px-6 py-2 rounded-md shadow-md font-medium transition duration-200"
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
