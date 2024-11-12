import ProjectSection from "./seconddiv";

const Secondproject = () => {
  const project = {
    name: "IntegrateIT - Workflow Automation",
    type: "Workflow Automation Tool",
    techStack: "Monorepo, Next.js, Express, Kafka, Prisma, Docker, AWS",
    description: [
      'Developed a versatile workflow automation platform allowing users to create and manage custom "zaps" to automate tasks.',
      "Implemented a robust architecture comprising a primary backend for managing users and zap information, a webhook server to initiate zap processes, a processor server to queue tasks in Kafka, and a worker server to execute the tasks efficiently.",
      "Enabled seamless integration with external applications via webhooks, empowering users to automate workflows in their applications.",
      "Streamlined deployments with CI/CD pipelines, leveraging Docker for containerization and AWS for scalable cloud hosting.",
    ],
    githubLink: "https://github.com/your-repo",
    liveLink: "https://your-live-site.com",
    images: ["images/pay1.png", "images/pay2.png", "images/pay3.png"],
  };

  return (
    <div className="container mx-auto mt-[20px]">
      <ProjectSection
        name={project.name}
        type={project.type}
        techStack={project.techStack}
        description={project.description}
        githubLink={project.githubLink}
        liveLink={project.liveLink}
        images={project.images}
      />
    </div>
  );
};

export default Secondproject;
