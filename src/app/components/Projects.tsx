import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

// EDIT YOUR PROJECTS HERE
const projects = [
  {
    title: 'ASL AI',
    description: 'American sign language recognition system',
    tags: ['React', 'Python', 'AI'],
    link: 'github'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                <ExternalLink className="w-4 h-4" />
                <span>View Project</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
