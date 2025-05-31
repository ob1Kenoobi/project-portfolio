import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-900 text-center">
      <div className="mb-2 space-x-4">
        <a
          href="https://github.com"
          className="inline-block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com"
          className="inline-block text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-sm">Hasan Banna - {new Date().getFullYear()}</p>
    </footer>
  );
};
// This component renders a footer with copyright information and a link to React.
