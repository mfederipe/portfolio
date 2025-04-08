import { useState } from "react";
import resify from "../../assets/images/resify.jpg";
import "./Projects.scss";

type Project = {
  title: string;
  image: string;
  techStack: string[];
  libraries?: string[];
  api?: string[];
  description: string;
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    title: "Resify",
    image: resify,
    techStack: ["React", "Node.js", "Express", "JavaScript"],
    libraries: [
      "axios",
      "react-router-dom",
      "react-markdown",
      "react-toastify",
      "sass",
    ],
    api: ["LinkedIn Job Search API", "Google Gemini API"],
    description:
      "AI resume builder that tailors resumes to LinkedIn job listings.",
    liveLink: "#",
    githubLink: "https://github.com/mfederipe/marison-federipe-capstone",
  },
];

function Projects() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section
      className={`projects ${
        theme === "dark" ? "projects--dark" : "projects--light"
      }`}
    >
      <div className="projects__toggle">
        <label className="projects__switch">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            checked={theme === "light"}
          />
          <span className="projects__slider"></span>
        </label>
      </div>

      <div className="projects__cards">
        {projects.map((project, index) => {
          const {
            title,
            image,
            techStack,
            libraries,
            api,
            description,
            liveLink,
            githubLink,
          } = project;

          return (
            <div className="projects__card" key={index}>
              <div className="projects__card-tab">
                <div className="projects__card-dots">
                  <span className="projects__dot projects__dot--red"></span>
                  <span className="projects__dot projects__dot--yellow"></span>
                  <span className="projects__dot projects__dot--green"></span>
                </div>
              </div>
              <div className="projects__card-container">
                <pre className="projects__card-code">
                  <code>
                    {(() => {
                      const fields = [
                        { key: "title", value: title },
                        { key: "techStack", value: techStack },
                        { key: "libraries", value: libraries },
                        { key: "api", value: api },
                        { key: "description", value: description },
                      ];

                      let line = 1;
                      const lines = [];

                      lines.push(
                        <div className="projects__code-line" key={line}>
                          <span className="projects__line-number">
                            {line++}
                          </span>
                          <span>
                            <span className="projects__key">const</span>{" "}
                            <span className="projects__variable">project</span>{" "}
                            = &#123;
                          </span>
                        </div>
                      );

                      fields.forEach(({ key, value }) => {
                        if (!value) return;

                        if (Array.isArray(value)) {
                          lines.push(
                            <div className="projects__code-line" key={line}>
                              <span className="projects__line-number">
                                {line++}
                              </span>
                              <span>
                                &nbsp;&nbsp;
                                <span className="projects__key">{key}</span>: [
                                {value.map((item, i) => (
                                  <span
                                    key={i}
                                    className="projects__string"
                                    title={`${key} #${i + 1}`}
                                  >
                                    "{item}"{i < value.length - 1 ? ", " : ""}
                                  </span>
                                ))}
                                ],
                              </span>
                            </div>
                          );
                        } else {
                          lines.push(
                            <div className="projects__code-line" key={line}>
                              <span className="projects__line-number">
                                {line++}
                              </span>
                              <span>
                                &nbsp;&nbsp;
                                <span className="projects__key">
                                  {key}
                                </span>:{" "}
                                <span className="projects__string">
                                  "{value}"
                                </span>
                                ,
                              </span>
                            </div>
                          );
                        }
                      });

                      lines.push(
                        <div className="projects__code-line" key={line}>
                          <span className="projects__line-number">
                            {line++}
                          </span>
                          <span>&#125;</span>
                        </div>
                      );

                      return lines;
                    })()}
                  </code>
                </pre>

                <img src={image} alt={title} className="projects__card-image" />

                <div className="projects__card-btns">
                  {liveLink && (
                    <a
                      href={liveLink}
                      className="projects__btn-live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ▶ Live Demo
                    </a>
                  )}
                  {githubLink && (
                    <a
                      href={githubLink}
                      className="projects__btn-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ⎇ GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
