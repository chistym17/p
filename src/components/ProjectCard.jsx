/* eslint-disable react/prop-types */
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <div
        className="h-52 md:h-64 relative group overflow-hidden"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay bg-white items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            to={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#e27396] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#e27396] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            to={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#e27396] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#e27396] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-[#e27396] font-raleway bg-[#ffffff] rounded-b-xl py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#4a4a4a]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
