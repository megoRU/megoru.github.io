import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="group block relative rounded-3xl overflow-hidden bg-[var(--card-bg-color)] hover:bg-[var(--card-hover-bg-color)] transition-colors duration-300 h-full flex flex-col"
    >
      <div className="aspect-[402/211] overflow-hidden rounded-3xl m-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-bold text-[var(--heading-color)] mb-2">
          {project.title}
        </h4>
        <p className="text-[var(--description-color)] font-medium text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mt-auto flex items-center gap-3 flex-wrap">
          {project.techStack.map((tech, index) => (
            <div key={index} className="relative group/tech">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 object-contain opacity-80 group-hover/tech:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-full left-0 mb-3 w-64 p-4 rounded-xl bg-[var(--tooltip-bg-color)] text-[var(--tooltip-text-color)] text-sm opacity-0 invisible group-hover/tech:opacity-100 group-hover/tech:visible transition-all duration-200 shadow-xl z-50 border border-[var(--tooltip-border)]">
                <div className="flex gap-3">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  <div>
                    <strong className="block text-base font-bold mb-1 text-[var(--heading-color)]">{tech.name}</strong>
                    <p className="text-[var(--description-color)] text-xs leading-normal font-medium">{tech.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[10px] font-bold uppercase tracking-wider">
        {project.status}
      </div>
    </motion.a>
  );
};
