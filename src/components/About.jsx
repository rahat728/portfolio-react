
const About = () => {
  return (
    <div name='about' className='w-full flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 md:px-16 lg:px-[160px] '>
      <div className='max-w-[1000px] w-full flex flex-col md:flex-row gap-16'>
        {/* Title and Description Section */}
        <div className='w-full md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-4xl font-bold mb-12'>About Me</h2>
          <p className='text-lg mb-8'>
            Hi, I&apos;m Rahat. Nice to meet you! I am passionate about building excellent software that enhances the lives of those around me. 
            I specialize in creating solutions for clients, ranging from individuals and small businesses to large enterprise corporations.
          </p>
        </div>

        {/* Skill Bars Section */}
        <div className='w-full md:w-1/2 flex flex-col gap-4'>
          <div className='w-full'>
            <label className='block mb-1'>HTML & CSS</label>
            <div className='w-full h-2 bg-gray-700 rounded'>
              <div className='h-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-300 rounded' style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <label className='block mb-1'>JavaScript</label>
            <div className='w-full h-2 bg-gray-700 rounded'>
              <div className='h-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-300 rounded' style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <label className='block mb-1'>ReactJS</label>
            <div className='w-full h-2 bg-gray-700 rounded'>
              <div className='h-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-300 rounded' style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <label className='block mb-1'>TypeScript</label>
            <div className='w-full h-2 bg-gray-700 rounded'>
              <div className='h-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-300 rounded' style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <label className='block mb-1'>TailwindCSS</label>
            <div className='w-full h-2 bg-gray-700 rounded'>
              <div className='h-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-300 rounded' style={{ width: '80%' }}></div>
            </div>
          </div>
          
          {/* Add more skill bars here */}
        </div>
      </div>

      {/* Statistics Section */}
      <div className='w-full flex flex-col md:flex-row justify-center items-center mt-16'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              3+
            </h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              50+
            </h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              20+
            </h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

