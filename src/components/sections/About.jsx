import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];
  return (
    <section id="about" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          {/* Title with lines */}

          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow h-px bg-gray-400"></div>
            <h2 className="text-gray-700 mx-4 text-3xl font-semibold text-center">
              About Me
            </h2>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Text */}
            <div className="space-y-5 text-gray-500  bg-gray-100 dark:bg-gray-900 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida. Suspendisse ultricies sollicitudin lacus, et
                rutrum nunc bibendum sed.
              </p>
              <p>
                Donec tincidunt tellus sed libero ultricies, eu semper enim
                molestie. Etiam lorem quam, tincidunt nec malesuada eu, interdum
                nec leo. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Morbi placerat tortor sed felis
                tristique.
              </p>
              <p>
                Nunc aliquam magna ut nunc vestibulum, ut dictum nulla sagittis.
                Cras egestas magna sed nisl pellentesque, sed lobortis felis
                convallis. Phasellus eget ex at est lobortis iaculis eget non
                risus. Etiam ultricies at est sit amet condimentum.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-700">
                {" "}
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-700"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-700">
                {" "}
                🏫 Education{" "}
              </h3>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - XYZ University
                  (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-700">
                {" "}
                💼 Work Experience{" "}
              </h3>
              <div className="space-y-4 text-gray-500">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at ABC Corp (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
