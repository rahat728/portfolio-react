import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen px-8 md:px-16 lg:px-[160px] bg-black py-28"
    >
      <div className="max-w-[1000px] mx-autoflex flex-col justify-center h-full">
        {/* Greeting */}
        <p className="text-yellow-300">Hi, my name is</p>

        {/* Main Heading */}
        <h1 className="text-7xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            RAHAT
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-7xl font-bold text-gray-300">
          I&apos;m a Front End Developer.
        </h2>

        {/* Description */}
        <p className="text-gray-300 py-4 max-w-[700px]">
          I&apos;m a front-end developer specializing in building and
          occasionally designing exceptional digital experiences. Currently,
          I&apos;m focused on building responsive front-end web applications.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4 mt-8">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
            Contact With Me
          </button>
          <a
            href="https://drive.google.com/file/d/179h9z8oFPCUDO5JH4ZagvMAHdZexyFF9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 flex items-center"
          >
            Resume
            <span className="ml-3">
              <HiArrowNarrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
