import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="bg-white rounded-2xl  flex flex-col md:flex-row items-center justify-between p-4 md:p-10 mt-5 h-auto md:h-[600px]">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-black"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hi, I&apos;m Chisty
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-md text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          I am <span className="font-bold text-[#EDA751]">Mynuddin Chisty</span>, a passionate Full Stack Developer specializing in modern web technologies.
        </motion.p>

        <motion.div
          className="flex flex-wrap space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <a
            href="https://drive.google.com/file/d/1-rlGkbIp7QdzI22Qe9MwzvD40FiddYfR/view?usp=sharing"
            download
            className="w-full sm:w-auto bg-[#EDA751] text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg font-semibold flex items-center justify-center"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
          <a
            href="mailto:your-email@example.com"
            className="w-full sm:w-auto bg-transparent border border-[#EDA751] text-[#EDA751] text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg font-semibold flex items-center justify-center mt-4 sm:mt-0"
          >
            <FaEnvelope className="mr-2" />
            Send Email
          </a>
        </motion.div>



      </div>

      {/* Right Side: Picture */}
      <motion.div
        className="hidden md:block w-full md:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img
          src="images/vecteezy_working-on-web-and-development-illustration_.jpg"
          alt="Web Development Illustration"
          className="max-w-full h-auto rounded-lg"
        />
      </motion.div>

    </div>
  );
}

export default HeroSection;
