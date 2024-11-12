import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProjectsSection from "../../components/ProjectSection";
import { motion, AnimatePresence } from "framer-motion";

const ViewAllProjectsButton = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div
      className="flex flex-col items-center mt-8"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <button
        onClick={toggleProjects}
        className="flex items-center bg-transparent text-[#c75b82] border border-[#c75b82] hover:bg-[#c75b82] hover:text-white px-4 py-2 rounded-md font-semibold transition duration-200"
        aria-expanded={showProjects}
      >
        {showProjects ? "Hide Projects" : "View All Projects"}
        <span className="ml-2">
          {showProjects ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <AnimatePresence>
        {showProjects && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full mt-8 bg-[#f9e9f0] rounded-lg shadow-lg p-6"
          >
            <ProjectsSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ViewAllProjectsButton;
