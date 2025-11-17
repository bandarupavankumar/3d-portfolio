import { projects } from "../constants";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const FeatureProjects = () => {
  return (
    <section className="w-full py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-white/60 mt-4 text-lg">
          Here are some of my recent projects. Each project was carefully 
          crafted with attention to detail, performance, and user experience.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-[#0f0f17] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-white/10"
          >
            {/* Screenshot */}
            <img
              src={proj.imgPath}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-8 flex flex-col gap-4">

              {/* Tech Stack badges */}
              <div className="flex gap-3 flex-wrap">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-sm bg-white/10 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-white/60">{proj.desc}</p>

              {/* Icons */}
              <div className="flex items-center gap-6 mt-4">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-purple-400 transition"
                >
                  <FiExternalLink />
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-purple-400 transition"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/yourname"
          target="_blank"
          className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-lg shadow-lg transition"
        >
          Check My Github →
        </a>
      </div>
    </section>
  );
};

export default FeatureProjects;
