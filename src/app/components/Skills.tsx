import { motion } from 'motion/react';
import { Code2, Palette, Shield, Brain, LineChart, Network } from 'lucide-react';

// EDIT YOUR SKILLS HERE
const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    tags: ['Figma', 'Adobe XD', 'Prototyping']
  },
  {
    icon: Code2,
    title: 'Web Development',
    tags: ['React', 'TypeScript', 'Node.js']
  },
  {
    icon: LineChart,
    title: 'Business Analysis',
    tags: ['Requirements', 'Data Analytics']
  },
  {
    icon: Shield,
    title: 'Information Security',
    tags: ['Penetration Testing', 'Compliance']
  },
  {
    icon: Network,
    title: 'Cyber Network Tech',
    tags: ['Network Architecture', 'Cloud Security']
  },
  {
    icon: Brain,
    title: 'AI Integration',
    tags: ['Machine Learning', 'AI APIs']
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
