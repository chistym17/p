import ProjectSection from './seconddiv';
//paytm project
const MyPortfolio = () => {
  const project = {
    name: 'PayLink - Secure Wallet App',
    type: 'Advanced Digital Wallet Solution',
    techStack: 'Monorepo, Next.js, NextAuth, Express, Postgres, Prisma, Docker, AWS',
    description: [
      'Engineered a digital wallet solution for secure fund transfers between bank accounts and wallet balances.',
      'Architected a three-tier system: User Application for customer interaction, Bank Application for transaction management, and Bank Webhook for real-time notifications.',
      'Leveraged CI/CD pipelines to automate deployments, Dockerized services for consistency, and deployed on AWS EC2 for scalability and reliability.'
    ],
    
    
    
    githubLink: 'https://github.com/your-repo',
    liveLink: 'https://your-live-site.com',
    images: [
      'images/pay1.png',
      'images/pay2.png',
      'images/pay3.png'
    ]
  };
  
  return (
    <div className="md:container mx-auto mt-2">
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

export default MyPortfolio;
