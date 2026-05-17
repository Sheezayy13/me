import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

// EDIT YOUR EXPERIENCE HERE
const experiences = [
  {
    role: 'Senior Designer & Security Architect',
    period:'remote',
    points: ['Led design for security platforms', 'Integrated AI/ML models', 'Reduced security incidents by 67%']
  },
  {
    role: 'Cybersecurity Specialist',
    period: '2025',
    points: ['Performed 50+ penetration tests', 'Designed network security', 'Achieved ISO 27001 compliance']
  },
   {
    role:  'Web developer',
    period: '2019 - 2024',
    points: ['built 10+ websites', 'Designed network security', ' better user experience ']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 rounded-xl p-6 border border-purple-500/30"
            >
              <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
              <div className="flex items-center gap-2 mb-3 text-purple-300">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              <ul className="space-y-1 text-white/60">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
