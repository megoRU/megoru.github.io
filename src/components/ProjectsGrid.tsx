import { ProjectCard } from './ProjectCard';
import { projects } from '../utils/projects';
import { motion } from 'framer-motion';

export const ProjectsGrid = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto py-12">
      <h3 className="text-3xl font-bold text-[var(--heading-color)] mb-10 text-left">
        Мои последние работы
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
