// eslint-disable-next-line react/prop-types
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
    <div className="flex flex-col md:flex-row-reverse  py-6 px-3 mb-6 rounded-lg shadow-lg">
      {/* Left Side: Project Description */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        {/* Project Name and Links */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">{name}</h2>
        </div>

        {/* Project Type */}
        <p className="text-gray-600 italic mb-4">{type}</p>

        {/* Tech Stack */}
        <p className="text-gray-800 font-semibold mb-6">
          Technology Used: {techStack}
        </p>

        {/* Project Description with Bullet Points */}
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          {description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>

        <div className="flex space-x-6 mt-10">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary px-6 py-2 rounded-md shadow-md font-medium transition duration-200"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary px-6 py-2 rounded-md shadow-md font-medium transition duration-200"
          >
            Live
          </a>
        </div>
      </div>

      {/* Right Side: Photo Collage */}
      <div className="w-full md:w-1/2 flex flex-col justify-between ">
        <div className="flex space-x-2 mb-2">
          <div className="w-1/2 p-1">
            <img
              src={images[0]}
              alt={`Project Image 1`}
              className="rounded-lg object-cover w-full h-full border-4"
              style={{ borderColor: "var(--primary)" }}
            />
          </div>
          <div className="w-1/2 p-1">
            <img
              src={images[1]}
              alt={`Project Image 2`}
              className="rounded-lg object-cover w-full h-full border-4 "
              style={{ borderColor: "var(--primary)" }}
            />
          </div>
        </div>
        <div className="w-full p-1">
          <img
            src={images[2]}
            alt={`Project Image 3`}
            className="rounded-lg object-cover w-full h-full border-4"
            style={{ borderColor: "var(--primary)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
