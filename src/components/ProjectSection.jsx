import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 6,
    title: "Car Doctor",
    description: "Visit Us Today for Your Car Needs.",
    image: "project/car3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kaho0/car-doctor-client.git",
    previewUrl: "https://car-store-woad.vercel.app/",
  },
  {
    id: 7,
    title: "MyMart",
    description: "A Shopping Website",
    image: "project/my.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/ChatVid-Video-Chat-project",
    previewUrl: "http://ec2-13-48-1-231.eu-north-1.compute.amazonaws.com:5173/",
  },
  {
    id: 1,
    title: "TagTalk",
    description: "A Blogging Website",
    image: "project/tagtalk.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/TagTalk",
    previewUrl: "https://tagtalk-5e7ed.web.app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className=" rounded-lg py-12">
      <div className="container mx-auto px-8">
        {/* Update the color here by changing the hex code */}
        <h2 className="text-3xl font-bold font-raleway text-center text-[#e27396] mb-6">
          Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              className="bg-white rounded-lg custom-shadow custom-border overflow-hidden"
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
