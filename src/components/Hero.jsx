import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="lg:py-5 h-[400px]">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-5xl lg:leading-normal font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, Im chisty
            </span>

            <br></br>
            <TypeAnimation
              sequence={[
                "Chisty",
                1000,
                "Software Developer",
                1000,
                "ReactJs Developer",
                1000,
               
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Aspiring software developer fluent in web technologies, dedicated to crafting seamless digital solutions.
          </p>
          <div>
            <Link
              to="https://drive.google.com/file/d/161bvyOFeXFsSYxSHsbeg4-qIZVi--xZ5/view?usp=sharing"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br
          from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white text-xl"
            >
                Download Resume
            </Link>
            {/* <Link
              to="https://drive.google.com/file/d/1RkP07Zi520krVTGTdX6RFWZDso6-n6pO/view"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-puple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3 border border-white">
                Download Resume
              </span>
            </Link> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="https://i.ibb.co/2N2d5sH/heropic-Photo-Room-png-Photo-Room.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;