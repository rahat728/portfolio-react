import NotesApp from "../assets/projects/notesapp.png";
import MusicPlayer from "../assets/projects/musicplayer.png";
const Projects = () => {
  return (
    <div
      name="work"
      className="w-full flex justify-center items-center min-h-screen bg-black text-white px-8 md:px-16 lg:px-[160px]"
    >
      <div className="max-w-[1200px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">My Projects</p>
        </div>

        {/* Container for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Image */}
            <div
              className="w-full h-48 bg-cover bg-center rounded-lg transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${NotesApp})` }}
            ></div>

            {/* Project Details */}
            <div className="mt-4">
              <span className="text-2xl font-bold">Notes App</span>
              <p className="text-gray-400 mt-2">HTML CSS JavaScript</p>
              <div className="pt-8 flex justify-center space-x-4">
                <a
                  href="https://github.com/rahat728/notes-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-bold transition-transform duration-300 hover:scale-110">
                    GitHub
                  </button>
                </a>
                <a
                  href="https://notes-app-vert-alpha.vercel.app/"
                  target="_blank"
                >
                  <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-bold transition-transform duration-300 hover:scale-110">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Image */}
            <div
              className="w-full h-48 bg-cover bg-center rounded-lg transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${MusicPlayer})` }}
            ></div>

            {/* Project Details */}
            <div className="mt-4">
              <span className="text-2xl font-bold">
                Music Player With Visualizer
              </span>
              <p className="text-gray-400 mt-2">HTML CSS JavaScript</p>
              <div className="pt-8 flex justify-center space-x-4">
                <a
                  href="https://github.com/rahat728/music-player-with-visualizer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-bold transition-transform duration-300 hover:scale-110">
                    GitHub
                  </button>
                </a>
                <a
                  href="https://music-player-with-visualizer.vercel.app/"
                  target="_blank"
                >
                  <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-bold transition-transform duration-300 hover:scale-110">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
