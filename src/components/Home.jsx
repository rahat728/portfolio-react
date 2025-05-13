import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full flex min-h-screen justify-center items-center px-8 py-12 md:px-16 lg:px-[160px] bg-black"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center">
        {/* Greeting */}
        <p className="text-yellow-300">Hi, my name is</p>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-7xl  font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            RAHAT
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-5xl sm:text-7xl md:text-7xl font-bold text-gray-300">
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
        <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Contact With Me
          </Link>
 
          <a
            href="https://drive.google.com/file/d/1BBFgA8yw1k_2SDGfKPOQfvtObu4zIBgQ/view?usp=sharing"
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
