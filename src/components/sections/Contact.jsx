import { RevealOnScroll } from "../RevealOnScroll";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center  bg-gray-100 dark:bg-gray-900"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow h-px bg-gray-400"></div>
            <h2 className="text-gray-600 mx-4 text-5xl font-semibold text-center">
              Contact
            </h2>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          <p className="text-gray-700 mb-6 text-2xl space-x-2">
            I am currently seeking employment, and I would appreciate it if you
            could contact me with any available job opportunities.
          </p>

          <button className="bg-gray-200 text-black px-5 py-2 rounded hover:bg-gray-300 transition space-x-2.5">
            Write Message
          </button>

          <div className="flex justify-center gap-6 mt-10 text-gray-700 text-2xl">
            <a href="mailto:your@email.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">Hasan - 2025</p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
