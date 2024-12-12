import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center px-8 md:px-16 lg:px-[160px]"
    >
      {/* Contact Information */}
      <div className="flex flex-col space-y-8 text-center md:text-left md:w-1/2 md:pr-16">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Let&apos;s Talk
        </h2>
        <p className="text-white">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out via
          the form or contact me directly.
        </p>
        <div className="space-y-4">
          <p className="flex items-center justify-center md:justify-start text-green-400">
            <FaEnvelope className="mr-4" /> asifuzzamanrahat728@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start text-green-400">
            <FaPhone className="mr-4" /> +8801402244831
          </p>
          <p className="flex items-center justify-center md:justify-start text-green-400">
            <FaMapMarkedAlt className="mr-4" /> Khulna, Bangladesh
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        method="POST"
        action="https://getform.io/f/bjjeqjlb"
        className="flex flex-col w-full md:w-1/2 space-y-3 mt-8 md:mt-0"
      >
        <label htmlFor="name">Name</label>
        <input
          className="bg-gray-800 p-4 text-white border border-gray-600 focus:border-green-400"
          type="text"
          placeholder="Name"
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input
          className="bg-gray-800 p-4 text-white border border-gray-600 focus:border-green-400"
          type="email"
          placeholder="Email"
          name="email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          className="bg-gray-800 p-4 text-white border border-gray-600 focus:border-green-400"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-6 py-4 mt-8 hover:scale-105 transition-transform duration-300 mx-auto md:mx-0">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
