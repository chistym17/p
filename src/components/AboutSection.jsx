import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const AboutSection = () => {
  return (
    <section
      className="bg-[#f9e9f0] rounded-2xl h-auto mt-2 md:mt-5 px-6 sm:px-10 md:px-16"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 sm:py-8 md:py-12 lg:py-16 xl:gap-16">
        <img
          src="/project/IMG_0221.jpg"
          width={280}
          height={250}
          alt="Kahon Binte Zaman"
          className="rounded-lg mx-auto sm:w-52 sm:h-auto md:w-64 lg:w-80"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#c75b82] mb-4 text-center md:text-left font-[Rancho]">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 text-[#4a4a4a] font-[Raleway]">
            Hello! I'm <strong>Kahon Binte Zaman</strong>, a student with a
            focus on web technologies and aspiring to be a software developer.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-[#4a4a4a] mb-4 text-sm sm:text-base md:text-lg font-[Raleway]">
            <li>
              <strong>Full stack developer</strong> with 1+ year of experience.
            </li>
            <li>
              Mentor at{" "}
              <a
                href="https://www.facebook.com/groups/battlesofdynamics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4a4a] font-bold no-underline hover:text-[#4a4a4a]"
              >
                Battles of Dynamics
              </a>{" "}
              (1.5 years): created quizzes, slides, published results, and
              guided HSC students.
            </li>
            <li>
              Moderator in{" "}
              <a
                href="https://www.facebook.com/groups/physics.of.stupid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4a4a] font-bold no-underline hover:text-[#4a4a4a]"
              >
                Physics of Stupid
              </a>{" "}
              (3 years): solved physics doubts for group members.
            </li>
            <li>
              Learning <strong>Machine Learning</strong> and exploring Open
              Source.
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/kahon-binte-zaman-9414432b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a2d2ff] hover:text-[#6e9ecc]"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/kaho0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffafcc] hover:text-[#d6879c]"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093460772458&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4267B2] hover:text-[#365899]"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://discord.com/users/kahon_binte_zaman_61320"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7289da] hover:text-[#5b6eae]"
            >
              <FaDiscord size={28} />
            </a>
            <a
              href="https://leetcode.com/u/kahonbintezaman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a2d2ff] hover:text-[#6e9ecc]"
            >
              <SiLeetcode size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
