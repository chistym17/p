import axios from "axios";
import { FaLinkedin, FaGithub, FaFacebook, FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#f9e9f0] rounded-2xl h-auto mt-2 md:mt-5 px-4 sm:px-8 lg:px-16"
    >
      <div className="flex flex-col justify-center items-center py-8 md:py-12 lg:py-16">
        <div className="text-center flex flex-col h-full max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c75b82] mb-4 lg:mb-6 font-[Rancho]">
            Contact Information
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 text-[#4a4a4a] font-[Raleway]">
            If you are interested in discussing potential collaborations or have
            any inquiries, please feel free to reach out. I look forward to
            connecting with professionals and exploring new opportunities.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#4a4a4a] mb-6 lg:mb-8">
            Email: kahonbintezaman@gmail.com
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 sm:space-x-6 justify-center mt-4 lg:mt-6">
            <a
              href="https://www.linkedin.com/in/kahon-binte-zaman-9414432b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a2d2ff] hover:text-[#6e9ecc]"
            >
              <FaLinkedin className="text-lg sm:text-xl lg:text-2xl" />
            </a>
            <a
              href="https://github.com/kaho0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffafcc] hover:text-[#d6879c]"
            >
              <FaGithub className="text-lg sm:text-xl lg:text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093460772458&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4267B2] hover:text-[#365899]"
            >
              <FaFacebook className="text-lg sm:text-xl lg:text-2xl" />
            </a>
            <a
              href="https://discord.com/users/kahon_binte_zaman_61320"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7289da] hover:text-[#5b6eae]"
            >
              <FaDiscord className="text-lg sm:text-xl lg:text-2xl" />
            </a>
            <a
              href="https://leetcode.com/u/kahonbintezaman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a2d2ff] hover:text-[#6e9ecc]"
            >
              <SiLeetcode className="text-lg sm:text-xl lg:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
