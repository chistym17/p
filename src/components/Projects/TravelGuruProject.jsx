import ProjectSection from "./secprojectsection";

const TravelGuruProject = () => {
  const project = {
    name: "Travel Guru - Your Travel Companion",
    type: "Travel Booking Platform",
    techStack: "ReactJS, JavaScript, HTML, Tailwind CSS, Node.js, Firebase",
    description: [
      "User Authentication: Allows users to sign up, log in, and verify their email.",
      "Password Reset: Users can reset their password through email verification if forgotten.",
      "Explore Destinations: Discover popular destinations, including famous local foods.",
      "Book Destinations: Users can book their travel destinations directly on the platform.",
    ],
    githubLink: "https://github.com/kaho0/Voyage-vista",
    liveLink: "https://vista-omega.vercel.app/",
    images: ["/project/v2.png"],
  };

  return (
    <div className="md:container mx-auto mt-[20px] ">
      {/* Description Section */}
      <div className="">
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
    </div>
  );
};

export default TravelGuruProject;
