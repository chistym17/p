import ProjectSection from "../Projects/seconddiv";

const DSAWebProject = () => {
  const project = {
    name: "DSA Web - Sorting and Tree Visualizer",
    type: "Data Structures and Algorithms Visualizer",
    techStack: "ReactJS, JavaScript, Tailwind CSS, Node.js",
    description: [
      "Sorting Algorithms: Visualize and interact with various sorting algorithms like Quick Sort, Merge Sort, and Bubble Sort. The array visually sorts as the user selects options, showing each sorting step.",
      "Tree Traversals: Includes visual representations of in-order, pre-order, and post-order traversal steps for binary trees.",
      "Interactive Features: Engage with the algorithms by controlling speed, steps, and data.",
      "Step-by-Step Explanation: Get a detailed breakdown of each step during the execution of sorting and traversal algorithms.",
      "Responsive UI: Optimized for a seamless experience across different devices.",
    ],
    githubLink: "https://github.com/kaho0/sorted-dsa.git", // Replace with your GitHub link
    liveLink: "https://dsa-project-nine.vercel.app/", // Replace with your live site link
    images: [
      "/project/dsa2.png", // Correct path for image in the public folder
    ],
  };

  return (
    <div className="">
      {/* Description Section */}
      <div className="">
        <ProjectSection
          name={project.name}
          type={project.type}
          techStack={project.techStack}
          description={project.description}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          images={project.images} // Passing image array
        />
      </div>
    </div>
  );
};

export default DSAWebProject;
